import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.country}</Text>

      <Text style={styles.label}>Currency:</Text>
      <Text style={styles.value}>{country.currency}</Text>

      <Text style={styles.label}>Currency Used:</Text>
      <Text style={[styles.value, { color: country.used ? '#0f0' : '#f00' }]}>
        {country.used ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#ffeb3b',
    marginTop: 4,
  },
});

export default Country;
