import { withAppProviders } from './providers';
import { AppRouter } from './router';

const App = () => {
  return <AppRouter />;
};

export default withAppProviders(App);
