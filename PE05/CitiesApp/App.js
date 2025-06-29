import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';

import Countries from './src/Countries/Countries';
import Countries from './src/Countries/Country';

import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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



  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
      <Stack.Screen name="Country" component={CountryPlaceholder} />
    </Stack.Navigator>
  );
}

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
        <Tab.Screen name="CitiesNav">
          {(props) => <CitiesStackScreen {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>

        <Tab.Screen name="CountriesNav">
          {(props) => <CountriesStackScreen {...props} countries={countries} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
