import React, { Component } from 'react';
import { todoList } from '../Json/todoList';
import Title from './title';
import List from './list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <List />
      </div>
    );
  }
}

//<List todoList={todoList} />