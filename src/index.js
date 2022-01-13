import React from 'react';
import ReactDOM from 'react-dom';
import { TaskProvider } from './TaskContext';
import App from './App';

ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
