import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import CustomButton from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar'; 

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', // Input value for the new todo
      todos: [], // List of todos
      activeTab: 'all', // Active tab to filter todos
    };

    // Binding methods to the class
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  inputChange(inputValue) {
    this.setState({ inputValue }); // Update input value as the user types
  }

  submitTodo() {
    if (this.state.inputValue.trim() === '') return; // Skip if input is empty

    const newTodo = {
      title: this.state.inputValue,
      todoIndex: todoIndex++, // Unique index for each todo
      complete: false, // Initially not completed
    };

    // Add the new todo to the list
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      inputValue: '', // Clear the input field
    }));
  }

  toggleComplete(todoIndex) {
    // Toggle the completion status of the todo
    const todos = this.state.todos.map(todo =>
      todo.todoIndex === todoIndex
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    this.setState({ todos });
  }

  deleteTodo(todoIndex) {
    // Remove the todo from the list
    const todos = this.state.todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  setActiveTab(tab) {
    // Set the active tab for filtering
    this.setState({ activeTab: tab });
  }

  getFilteredTodos() {
    const { activeTab, todos } = this.state;

    // Filter todos based on the selected tab
    if (activeTab === 'completed') {
      return todos.filter(todo => todo.complete);
    }
    if (activeTab === 'incomplete') {
      return todos.filter(todo => !todo.complete);
    }
    return todos; // Return all todos by default
  }

  render() {
    const filteredTodos = this.getFilteredTodos(); // Get todos based on active tab

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
          >
            <Heading />
            <Input
              inputValue={this.state.inputValue}
              inputChange={this.inputChange}
            />
            <View style={styles.submitButtonContainer}>
              <CustomButton title="Submit" onPress={this.submitTodo} />
            </View>
            <View style={styles.todoList}>
              <TodoList
                todos={filteredTodos} // Display filtered todos
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            </View>
          </ScrollView>

          {/* TabBar component to handle tab navigation */}
          <TabBar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  todoList: {
    padding: 10,
  },
  submitButtonContainer: {
    alignItems: 'flex-end', // Align submit button to the right
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
