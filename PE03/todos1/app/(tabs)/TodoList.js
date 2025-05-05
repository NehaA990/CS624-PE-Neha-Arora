import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  const todoItems = todos.map((todo) => (
    <Todo
      key={todo.todoIndex} // Use unique key
      todo={todo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
    />
  ));

  return <View>{todoItems}</View>;
};

export default TodoList;
