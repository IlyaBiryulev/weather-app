import { makeAutoObservable, runInAction } from 'mobx';

import { Weather } from '../model/types';

import { getCurrentWeather } from '.';

class weatherStore {
  weather: Weather | undefined = undefined;
  isLoding: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentWeatherAction = async () => {
    try {
      this.isLoding = true;
      const res = await getCurrentWeather();

      runInAction(() => {
        this.weather = res;
        this.isLoding = true;
      });
    } catch {
      this.isLoding = false;
    }
  };
}

export default new weatherStore();
