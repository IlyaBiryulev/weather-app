import { Flex, Image, Text, Title } from '@mantine/core';

import { DailyWeather } from '../../model/types';

interface DailyProps {
  dailyData: DailyWeather;
}

export const DailyWeatherCard = ({ dailyData }: DailyProps) => {
  const date = new Date(dailyData.day).toLocaleDateString().toString();

  return (
    <Flex direction="column" align="center" justify="center">
      <Image src={`https://www.meteosource.com/static/img/ico/weather/${dailyData?.icon}.svg`} />
      <Title order={5}>{dailyData?.all_day.temperature}&deg;</Title>
      <Text size="xs">{date}</Text>
    </Flex>
  );
};
