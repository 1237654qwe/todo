import React from 'react';

import { Header } from './components/Header/Header';
import { TodoContainer } from './components/TodoContainer/TodoContainer'

import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="container__header">
        <Header />
      </div>
      <div className="container__todo">
        <TodoContainer />
      </div>
      <div className="container__footer">
        <p>Click to edit a todo</p>
        <p>Created by Kukharenko Danil</p>
      </div>
    </div>
  );
}

export default App;