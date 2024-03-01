import { apiRequest } from '@/shared/api/client';

export const getCurrentWeather = () => {
  const params = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return apiRequest(params);
};
