export interface DbAccess {
  delete(id: string): Promise<any>;

  findById(id: string): Promise<any>;

  update<T = any>(id: string, data: T): Promise<any>;

  findOne<T = any>(obj: T): Promise<any>;

  create<T = any>(data: T): Promise<any>;

  findMany<T = any>(obj: T): Promise<any[]>;

  findAll<T = any>(params?: T): Promise<any[]>;
}

export interface TransformResponse {
  statusCode: number;
  message: string;
  data: any
}
