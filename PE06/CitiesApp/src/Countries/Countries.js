import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  // Navigate to Country detail screen when an item is pressed
  navigate = (item) => {
    this.props.navigation.navigate('Country', { country: item });
  };

  render() {
    const { countries } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {/* Show message if there are no countries */}
          {!countries.length && <CenterMessage message="No saved countries!" />}

          {/* Loop through countries and display each */}
          {countries.map((item) => (
            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={item.id}>
              <View style={styles.countryContainer}>
                {/* Show country name */}
                <Text style={styles.country}>{item.country}</Text>

                {/* Show currency, and mark if not used */}
                <Text style={styles.currency}>
                  {item.currency} {item.used === false ? '(Not used)' : ''}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}

// Basic styling for country rows
const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});
