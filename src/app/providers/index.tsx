import compose from 'compose-function';

import { withMantine } from './withMantine';
import { withRouter } from './withRouter';

export const withAppProviders = compose(withRouter, withMantine);
