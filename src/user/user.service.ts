import { ConflictException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import  * as _ from 'lodash';
import { AddressRepository } from '../address';
import { IAddress, IAddressPartial } from '../database';
import { UtilService } from '../utils';
import { CreateUserDto } from './dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  @Inject(UserRepository)
  private readonly userRepo: UserRepository;
  @Inject(AddressRepository)
  private readonly addressRepo: AddressRepository
  @Inject(UtilService)
  private readonly utilService: UtilService;

  public async create(data: CreateUserDto) {

    await this.throwIfUserExists(data);

    // Hash password
    data.password = await this.utilService.hashPassword(data.password);

    // Todo: link user to role

    // Todo: user data (BVN, NIN, Bank Account, CAC, etc) verification with okra

    // Todo: optionally verifies user's email address

    // Todo: Send OTP to user's phone number for verification

    // Extract and add address data to the user's data graph
    const addresses: IAddress[] = UserService.extractUserAddress(data);

    UserService.cleanUpUserData(data);

    // Relate user to address (one-to-many)
    data.addresses = addresses;

    // Create user
    const user = await this.userRepo.create(data);

    // Delete password from the user's data graph
    delete user.password;

    // Generate JWT token
    let token;
    try {
      const tokenData = { id: user.id, email: user.email };
      token = this.utilService.generateJwtToken(tokenData);
    } catch (e) {
      // Delete user and address if token generation fails
      await this.rollbackUserAccount(user);

      // Throw error
      throw new InternalServerErrorException(`Error generating JWT token: ${e.message}`);
    }

    /*
    * Todo: call the wallet service to create a wallet for the user
    *  if the wallet creation fails, delete the user and address
    *  just like when the token generation fails
    **/

    /*
     * Todo: send welcome email to user's email address. This should be done after the wallet creation
     *  because the wallet creation is an async operation.
     *  The email should be sent via the notification service.
    **/

    return { user, auth_token: token };
  }

  private async throwIfUserExists(data: CreateUserDto): Promise<void> {
    let existingUser

    // check if user exists using email
    if (data.email) {
      existingUser = await this.userRepo.findOne({ email: data.email });
    }

    if (existingUser) {
      throw new ConflictException('User with the email address already exists');
    }

    // check if user exists using username
    if (!existingUser && data.username) {
      existingUser = await this.userRepo.findOne({ username: data.username });
    }

    if (existingUser) {
      throw new ConflictException('User with the username already exists');
    }

    // check if user exists using phone number
    if (!existingUser && data.phone) {
      existingUser = await this.userRepo.findOne({ phone: data.phone });
    }

    if (existingUser) {
      throw new ConflictException('User with the phone number already exists');
    }
  }

  private static extractUserAddress(data: CreateUserDto): IAddress[] {
    const address: IAddressPartial = _.pick(data, ['address', 'line', 'zip_code', 'city', 'state', 'country']);

    address.line = address.address;
    address.is_preferred = true;

    delete address.address;

    return [<IAddress>address];
  }

  private static cleanUpUserData(data: CreateUserDto): void {
    delete data.address;
    delete data.zip_code;
    delete data.city;
    delete data.state;
    delete data.country;
  }

  private async rollbackUserAccount(user: any): Promise<void> {
    await this.addressRepo.delete(user.addresses[0].id);
    await this.userRepo.delete(user.id);
  }
}
