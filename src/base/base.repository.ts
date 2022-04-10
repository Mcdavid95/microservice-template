import { Logger } from '@nestjs/common';
import { Model, ModelClass, transaction } from 'objection';
import { DbAccess } from './base.interface';

export abstract class BaseRepository implements DbAccess {
  private readonly model: ModelClass<Model>;

  protected constructor(model: ModelClass<Model>) {
    this.model = model;
  }

  public async create<T = any>(data: T): Promise<any> {
    Logger.log('BaseRepository.create');

    return await transaction(this.model, async (Model) => {
      return Model.query().insertGraphAndFetch(data);
    });
  }

  public async findAll<T = any>(params?: T): Promise<any[]> {
    Logger.log('BaseRepository.findAll');

    return this.model.query();
  }

  public async findOne<T = any>(obj: T): Promise<any> {
    Logger.log('BaseRepository.findOne');

    return this.model.query().findOne(obj);
  }

  public async findMany<T = any>(obj: T): Promise<any[]> {
    Logger.log('BaseRepository.findOne');

    return this.model.query().where(obj);
  }

  public async findById(id: string): Promise<any> {
    Logger.log('BaseRepository.findById');

    return this.model.query().findById(id);
  }

  public async update<T = any>(id: string, data: T): Promise<any> {
    Logger.log('BaseRepository.update');

    return this.model.query().patchAndFetchById(id, data);
  }

  public async delete(id: string): Promise<any> {
    Logger.log('BaseRepository.delete');

    return this.model.query().deleteById(id);
  }
}


// import { Injectable } from '@nestjs/common';
//
// @Injectable()
// export class BaseRepository {}
