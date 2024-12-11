export interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  age?: number;
  address?: {
    street: string;
    city: string;
    country: string;
  };
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  roles: string[];
}
