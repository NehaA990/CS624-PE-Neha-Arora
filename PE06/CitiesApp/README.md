
Input

Users interact with the mobile app through form inputs provided in the AddCountry and AddCity screens. For countries, users enter a country name and its currency. The app detects whether the currency is in use by checking if the input contains the word "not." This information is stored in state using React’s useState or component state.

Process

The app uses React Native and React Navigation to manage data and screen transitions. Stack navigation allows users to navigate from a list screen (Countries/Cities) to a detail screen (Country/City). When a country is added, a new object is created with a UUID, currency, and a used flag. This object is stored in the countries state array. Conditional rendering and custom styles are used throughout the UI.

Output

The app displays all added countries in a styled list, showing their currency and whether it is used. Tapping a country shows detailed info on the next scree
