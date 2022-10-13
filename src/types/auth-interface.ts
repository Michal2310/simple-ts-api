export interface BodyRequest {
  email: string;
  name: string;
  password: string;
}

export interface QueryRequest {
  token: string;
  email: string;
}

export interface Login {
  email: string;
  password: string;
}
