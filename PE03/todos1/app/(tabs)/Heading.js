import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    {/* Main title for the app */}
    <Text style={styles.headerText}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80, // Space from top
  },
  headerText: {
    textAlign: 'center', // Center the text
    fontSize: 72, // Large font size
    color: 'rgba(175, 47, 47, 0.25)', // Light red color
    fontWeight: '100', // Light font weight
  },
});

export default Heading;
