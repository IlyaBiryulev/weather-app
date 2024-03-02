import { CubeWithData } from '@/features/CubeWithData/CubeWithData';

import styles from './CubePage.module.css';

function CubePage() {
  return (
    <div className={styles.container}>
      <CubeWithData />
    </div>
  );
}

export default CubePage;
