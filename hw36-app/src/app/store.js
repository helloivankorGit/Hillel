import { createStore } from 'redux';

import { colorReducer } from './reducer';

export const store = createStore(colorReducer);
