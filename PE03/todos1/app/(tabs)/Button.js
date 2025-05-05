import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, textColor = 'black' }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {/* Button text with dynamic color */}
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 10, // Top margin
    marginHorizontal: 20, // Side margins
    backgroundColor: '#ffffff', // Button background color
    padding: 15, // Padding inside button
    borderRadius: 6, // Rounded corners
    alignItems: 'center', // Center text
    shadowOpacity: 0.3, // Shadow effect
    shadowRadius: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    fontSize: 18, // Font size
    fontWeight: '600', // Font weight
  },
});

export default CustomButton;
