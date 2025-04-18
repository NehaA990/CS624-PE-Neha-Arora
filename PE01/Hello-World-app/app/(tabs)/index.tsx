import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Main component that renders personal info
export default function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>Name: Neha Arora</Text>
      <Text style={styles.infoText}>Program: M.S. in Computer Science</Text>
      <Text style={styles.infoText}>School: City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEB3B', // yellow background 
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Dark gray text
  },
  infoText: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 6,
    color: '#333',
  },
});
