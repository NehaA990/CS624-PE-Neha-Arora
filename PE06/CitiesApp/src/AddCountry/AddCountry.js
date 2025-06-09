import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = {
    country: '',
    currency: '',
  };

  // This function updates state when text input changes
  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  // Called when user taps "Add Country"
  submit = () => {
    const { country, currency } = this.state;

    // Check if fields are empty
    if (country === '' || currency === '') {
      alert('Please complete form');
      return;
    }

    // Remove the phrase 'not used' from the currency name
    const cleanedCurrency = currency.replace(/not used/gi, '').trim();

    // Create a new country object with generated ID and usage flag
    const newCountry = {
      country,
      currency: cleanedCurrency,
      used: currency.toLowerCase().includes('not') ? false : true,
      id: uuid.v4(),
    };

    // Pass new country to parent component
    this.props.addCountry(newCountry);

    // Reset form and go back to country list
    this.setState({ country: '', currency: '' }, () => {
      this.props.navigation.navigate('CountriesNav', { screen: 'Countries' });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>

        {/* Input for country name */}
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />

        {/* Input for currency name, e.g. 'Dollar' or 'Won not used' */}
        <TextInput
          placeholder='Currency (e.g. "Dollar", "Won not used")'
          onChangeText={(val) => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />

        {/* Button to submit the form */}
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// Styles for the form layout and components
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddCountry;
