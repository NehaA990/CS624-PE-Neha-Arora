**Input:** The app begins by letting the user
type in their favorite course using a simple text box. There's also a small
image (icon.png) at the top to make the screen look nice. The input is captured
as soon as the user types something, like “CS624”, and it's stored in the app
so it can be used later.

**Process:** Behind the scenes, the app uses React Native’s core components to
build the layout. It handles what the user types using a state variable, and
updates the screen whenever something changes. All the MSCS core courses, two
depth of study courses, and one capstone course are displayed using scrollable
text. The app is built with a functional component using an arrow function, and
it’s styled with an internal StyleSheet to keep things clean.

**Output:** In the end, the app shows a scrollable list of the MSCS courses,
and it also displays the course the user typed in. The user’s favorite course
appears clearly at the bottom, so it’s easy to spot. Everything is styled
nicely so it looks good on a mobile screen.
