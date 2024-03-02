import { Flex, Image, Text, Title } from '@mantine/core';

import { CurrentWeather } from '../../model/types';

import styles from './CurrentWeatherCard.module.css';

interface CurrentWeatherProps {
  weatherData: CurrentWeather;
}

export const CurrentWeatherCard = ({ weatherData }: CurrentWeatherProps) => {
  const currentDate = new Date().toLocaleTimeString().toString();

  return (
    <Flex direction="column" align="center" justify="center" className={styles.box}>
      <Flex gap={1} justify="center" align="center">
        <Title order={1}>{weatherData?.temperature}&deg;</Title>
        <Image
          src={`https://www.meteosource.com/static/img/ico/weather/${weatherData?.icon_num}.svg`}
        />
      </Flex>
      <Text>Saint-Petersburg</Text>
      <Text>{currentDate}</Text>
    </Flex>
  );
};
