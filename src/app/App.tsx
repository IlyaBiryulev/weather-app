import { NavLinks } from '@/shared/ui/NavLinks/NavLinks';

import { withAppProviders } from './providers';
import { AppRouter } from './router';

const App = () => {
  return (
    <div>
      <NavLinks />
      <AppRouter />
    </div>
  );
};

export default withAppProviders(App);
