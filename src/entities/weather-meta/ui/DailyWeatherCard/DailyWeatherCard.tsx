import { Flex, Image, Text, Title } from '@mantine/core';

export const DailyWeatherCard = ({ data }) => {
  console.log(data);

  const date = new Date(data.day).toLocaleDateString().toString();
  console.log(date);
  return (
    <Flex direction="column" align="center" justify="center">
      <Image src={`https://www.meteosource.com/static/img/ico/weather/${data?.icon}.svg`} />
      <Title order={5}>{data?.all_day.temperature}&deg;</Title>
      <Text size="xs">{date}</Text>
    </Flex>
  );
};
