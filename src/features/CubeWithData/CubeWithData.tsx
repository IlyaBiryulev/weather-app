import { useEffect } from 'react';
import { Text } from '@react-three/drei';
import { Euler, Vector3 } from 'three';

import { CanvasViewer } from '@/entities/three-canvas/ui';
import weatherStore from '@/entities/weather-meta/api/weatherStore';

const facePositions = [
  new Vector3(0, 0, 0.5),
  new Vector3(0, 0, -0.5),
  new Vector3(0, 0.5, 0),
  new Vector3(0, -0.5, 0),
  new Vector3(-0.5, 0, 0),
  new Vector3(0.5, 0, 0),
];

const faceRotations = [
  new Euler(0, 0, 0),
  new Euler(0, Math.PI, 0, 'XYZ'),
  new Euler(-Math.PI / 2, 0, 0, 'XYZ'),
  new Euler(Math.PI / 2, 0, 0, 'XYZ'),
  new Euler(0, -Math.PI / 2, 0, 'XYZ'),
  new Euler(0, Math.PI / 2, 0, 'XYZ'),
];

export const CubeWithData = () => {
  const { getCurrentWeatherAction, weather } = weatherStore;

  useEffect(() => {
    getCurrentWeatherAction();
  }, [getCurrentWeatherAction]);

  return (
    <CanvasViewer>
      <mesh>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshLambertMaterial attach="material" color="#87cefa" />
        {weather?.daily.data.map((day, index) => (
          <group key={index} position={facePositions[index]} rotation={faceRotations[index]}>
            <Text
              fontSize={0.07}
              anchorX="center"
              anchorY="middle"
              position={[0, 0, 0]}
              color={'#000'}
            >
              Temperature: {day.all_day.temperature}°{'\n'}
              Day: {day.day}
            </Text>
          </group>
        ))}
      </mesh>
    </CanvasViewer>
  );
};
