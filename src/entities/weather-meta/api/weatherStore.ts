import { makeAutoObservable, runInAction } from 'mobx';

import { getCurrentWeather } from '.';

class weatherStore {
  weather = [];
  isLoding = false;

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
