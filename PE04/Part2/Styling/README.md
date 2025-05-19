Input

The application begins with a predefined array of user profile data, including names, occupations, descriptions, and a static image (user.png). In the first part, the input is hardcoded and limited to a single profile. In the second part, the array includes multiple user profiles with a showThumbnail property to track user interaction.

Process

The app uses React Native components to render styled profile cards. The first part statically displays a single profile card with image, name, job title, and description. In the second part, each profile card is rendered dynamically using the map() function. A touch interaction toggles the showThumbnail state of a card, updating its visual scale using the immutability-helper library.

Output

The output is a visually styled grid of profile cards. On pressing a card, it dynamically shrinks or returns to normal size, providing visual feedback through state-driven rendering.
