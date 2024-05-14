import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { css } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { IndexRouter } from './routes';

const App: React.FC = () => {
  return (
    <Container id='container'>
      <IndexRouter />
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

const Container = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: auto;
`;
