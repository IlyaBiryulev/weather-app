import { useEffect } from 'react';
import { Flex, Stack } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import weatherStore from '@/entities/weather-meta/api/weatherStore';
import { CurrentWeatherCard } from '@/entities/weather-meta/ui/CurrentWeatherCard/CurrentWeatherCard';
import { DailyWeatherCard } from '@/entities/weather-meta/ui/DailyWeatherCard/DailyWeatherCard';

import styles from './WeatherList.module.css';

export const WeatherList = observer(() => {
  const { getCurrentWeatherAction, weather } = weatherStore;

  useEffect(() => {
    getCurrentWeatherAction();
  }, [getCurrentWeatherAction]);

  return (
    <Stack className={styles.container}>
      {weather && <CurrentWeatherCard weatherData={weather.current} />}
      <Flex gap={10}>
        {weather?.daily.data.map((day) => <DailyWeatherCard dailyData={day} key={day.day} />)}
      </Flex>
    </Stack>
  );
});
