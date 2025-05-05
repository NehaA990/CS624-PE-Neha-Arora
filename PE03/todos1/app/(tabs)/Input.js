import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue} // Current value of input
      onChangeText={inputChange} // Update value on change
      style={styles.input}
      placeholder="What needs to be done?" // Placeholder text
      placeholderTextColor="#CACACA" // Color for placeholder
      selectionColor="#666666" // Color for text selection
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20, // Horizontal margins
    marginRight: 20,
    shadowOpacity: 0.2, // Light shadow for input
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60, // Input height
    backgroundColor: '#ffffff', // White background
    paddingLeft: 10, // Padding inside input
    paddingRight: 10,
    borderRadius: 6, // Rounded corners
  },
});

export default Input;
