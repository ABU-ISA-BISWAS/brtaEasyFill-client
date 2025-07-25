import { Institute } from './institute.model';

export interface User {
  id: number;
  username: string;
  role: 'SUPER_ADMIN' | 'INSTITUTE_ADMIN' | 'USER';
  institute?: Institute;
  status?: string;
}
