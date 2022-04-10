import axios from 'axios';
import { HttpResponse } from '@/api/interceptor';

export interface UserRecord {
  id?: number | string;
  name: string;
  age: number | string;
  email: string;
  phone: string;
  gender: string;
  createTime: string;
}

export interface UserList {
  list: UserRecord[];
  total: number;
}

export function getUserList(page = 1): Promise<HttpResponse<UserList>> {
  const params = { page };
  return axios.get('https://some.api.com/api/get-user-list', { params });
}

export function updateUser(data: UserRecord): Promise<HttpResponse<UserRecord>> {
  return axios.post('https://some.api.com/api/update-user', data);
}

export function createUser(data: UserRecord): Promise<HttpResponse<UserRecord>> {
  return axios.post('https://some.api.com/api/create-user', data);
}

export function deleteUser(id: number): Promise<HttpResponse<null>> {
  return axios.post('https://some.api.com/api/delete-user', { id });
}
