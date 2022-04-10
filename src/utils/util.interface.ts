export interface IJwtPayload {
  id: string | any;
  email: string;
  aud?: string;
  iat?: string;
  exp?: string;
}
