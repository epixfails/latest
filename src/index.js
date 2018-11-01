import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { List } from './components/List';
import { FileInput } from './components/FileInput';
import { Weather } from './components/Weather';
import * as serviceWorker from './serviceWorker';

const AppWrap = styled.div`
  width: 800px;
  margin: auto;
`;

ReactDOM.render(
  <AppWrap>
    <List />
    <FileInput />
    <Weather />
  </AppWrap>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
