import { ReactNode } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import styles from './CanvasViewer.module.css';

interface CanvasProps {
  children: ReactNode;
}

export const CanvasViewer = ({ children }: CanvasProps) => {
  return (
    <Canvas
      className={styles.canvas}
      camera={{
        fov: 25,
        position: [5, 5, 5],
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 1]} />
      <OrbitControls />
      {children}
    </Canvas>
  );
};

export default CanvasViewer;
