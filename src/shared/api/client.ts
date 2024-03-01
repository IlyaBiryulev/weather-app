import { BASE_URL } from '@/shared/consts/api';

export const apiRequest = async (config?: any): Promise<any | any> => {
  return fetch(`${BASE_URL}`, config).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
};
