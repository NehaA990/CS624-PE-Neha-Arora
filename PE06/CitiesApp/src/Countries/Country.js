import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

// Country detail screen shows info passed via navigation route
const Country = ({ route }) => {
  // Get the selected country object from route params
  const { country } = route.params;

  return (
    <View style={styles.container}>
      {/* Country name as title */}
      <Text style={styles.heading}>{country.country}</Text>

      {/* Show currency label and value */}
      <Text style={styles.label}>Currency:</Text>
      <Text style={styles.value}>{country.currency}</Text>

      {/* Show usage status */}
      <Text style={styles.label}>Used:</Text>
      <Text style={styles.value}>{country.used ? 'Yes' : 'No'}</Text>
    </View>
  );
};

// Styling for the screen layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#ffeb3b',
  },
});

export default Country;
