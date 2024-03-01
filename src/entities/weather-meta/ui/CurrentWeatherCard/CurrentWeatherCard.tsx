import { Flex, Image, Text, Title } from '@mantine/core';

import styles from './CurrentWeatherCard.module.css';

export const CurrentWeatherCard = ({ data }) => {
  console.log(data.current);

  const currentWeather = data.current;
  const currentDate = new Date().toLocaleTimeString().toString();

  return (
    <Flex direction="column" align="center" justify="center" className={styles.box}>
      <Flex gap={1} justify="center" align="center">
        <Title order={1}>{currentWeather?.temperature}&deg;</Title>
        <Image
          src={`https://www.meteosource.com/static/img/ico/weather/${currentWeather?.icon_num}.svg`}
        />
      </Flex>
      <Text>Saint-Petersburg</Text>
      <Text>{currentDate}</Text>
    </Flex>
  );
};
