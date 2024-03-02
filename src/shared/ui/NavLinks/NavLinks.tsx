import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from '@mantine/core';

import { ROUTES } from '@/app/router';

import styles from './NavLinks.module.css';

export const NavLinks = () => {
  const location = useLocation();

  const getLinks = () => {
    if (location.pathname === ROUTES.BASE) {
      return (
        <Link to={ROUTES.THREE_PAGE}>
          <Button variant="light" className={styles.btn}>
            Куб
          </Button>
        </Link>
      );
    } else if (location.pathname === ROUTES.THREE_PAGE) {
      return (
        <Link to={ROUTES.BASE}>
          <Button variant="light" className={styles.btn}>
            Главная
          </Button>
        </Link>
      );
    }
  };
  return getLinks();
};
