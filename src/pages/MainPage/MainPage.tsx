import { Center, Container } from '@mantine/core';

import { WeatherList } from '@/features/WeatherList/WeatherList';

import styles from './MainPage.module.css';

function MainPage() {
  return (
    <Container className={styles.main}>
      <Center>
        <WeatherList />
      </Center>
    </Container>
  );
}

export default MainPage;
