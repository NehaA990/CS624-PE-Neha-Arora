Input

Users interact with the app through text fields and buttons in the AddCity and AddCountry screens. They provide inputs such as city names, countries, and currencies. These inputs are validated (ensuring fields aren't empty) before processing.

Process

Upon submission, the app generates a unique ID using the react-native-uuid library and constructs an object for each new city or country. These objects are added to the app’s state using React’s useState hook. Navigation is handled via React Navigation, directing users to appropriate screens (Cities or Countries stack) after a successful submission.

Output

The app displays a list of user-added cities and countries on their respective list screens. If no data is present, a CenterMessage component shows a placeholder message. Touching a list item navigates to a placeholder detail screen. This output provides a dynamic, real-time reflection of the data entered by users.
