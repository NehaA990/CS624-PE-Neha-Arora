import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';

import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country'; // ✅ country detail screen

import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 🔹 Stack for Cities
function CitiesStackScreen({ cities }) {
  function CityPlaceholder() {
    return (
      <View>
        <Text>City Details Placeholder</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

// 🔹 Stack for Countries
function CountriesStackScreen({ countries }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
}

// 🔹 App Root
export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => {
    setCities((prev) => [...prev, city]);
  };

  const addCountry = (country) => {
    setCountries((prev) => [...prev, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Cities Tab */}
        <Tab.Screen name="CitiesNav">
          {(props) => <CitiesStackScreen {...props} cities={cities} />}
        </Tab.Screen>

        {/* Add City Tab */}
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>

        {/* Countries Tab */}
        <Tab.Screen name="CountriesNav">
          {(props) => <CountriesStackScreen {...props} countries={countries} />}
        </Tab.Screen>

        {/* Add Country Tab */}
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
