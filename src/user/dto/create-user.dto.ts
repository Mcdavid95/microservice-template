import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length
} from 'class-validator';
import { IAddress } from '../../database';

export class CreateUserDto {
  /**
   * User's first name
   */
  @IsString()
  first_name: string;

  /**
   * User's last name
   */
  @IsString()
  last_name: string;

  /**
   * User's username
   */
  @IsString()
  @IsOptional()
  username: string;

  /**
   * User's date of birth
   */
  @IsDateString()
  dob: Date;

  /**
   * User's address
   */
  @IsString()
  @IsOptional()
  address: string;

  /**
   * User's address zip code
   */
  @IsString()
  @IsOptional()
  zip_code: string;

  /**
   * User's address city
   */
  @IsString()
  @IsOptional()
  city: string;

  /**
   * User's address state
   */
  @IsString()
  @IsOptional()
  state: string;

  /**
   * User's address country
   */
  @IsString()
  @IsOptional()
  country: string;

  /**
   * User's password
   */
  @IsString()
  password: string;

  /**
   * User's phone number
   */
  @IsPhoneNumber('NG', { message: 'Phone number is not valid' })
  phone: string;

  @IsBoolean()
  @IsOptional()
  phone_verified: boolean;

  /**
   * User's email address
   */
  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsBoolean()
  @IsOptional()
  email_verified: boolean;

  /**
   * User's BVN
   */
  @IsString({ message: 'Invalid BVN. BVN should be a numeric string of 11 characters' })
  @Length(11, 11)
  bvn: string;

  @IsBoolean()
  @IsOptional()
  bvn_verified: boolean;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  /**
   * User's gender
   */
  @IsString()
  @IsOptional()
  gender: string;

  /**
   * User's marital status
   */
  @IsString()
  @IsOptional()
  marital_status: string;

  @IsDate()
  @IsOptional()
  deleted_at: Date;

  @IsOptional()
  addresses: IAddress[];
}
