import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import App from './App';

const store = createStore(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);

// https://toddmotto.com/react-create-class-versus-component/
// https://github.com/callemall/material-ui/tree/master/docs/src/app/components/pages/components
