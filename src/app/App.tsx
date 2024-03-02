import { NavLinks } from '@/shared/ui/NavLinks/NavLinks';

import { withAppProviders } from './providers';
import { AppRouter } from './router';

const App = () => {
  return (
    <>
      <NavLinks />
      <AppRouter />
    </>
  );
};

export default withAppProviders(App);
