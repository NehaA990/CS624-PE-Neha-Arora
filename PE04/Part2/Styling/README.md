
Input

The app initializes with a hardcoded array of multiple profile objects. Each object contains a name, occupation, description, and a showThumbnail boolean that determines whether the card should appear in a minimized form. A static user image is used for all profiles.

Process

Each profile object is mapped to a ProfileCard component, rendered inside a responsive grid layout. When a card is tapped, the handleProfileCardPress() function toggles its showThumbnail state using immutability-helper. This change updates the component’s styling by applying a scale transformation. The layout adapts to screen size using Dimensions to calculate card width dynamically.

Output

The output is a grid of user profile cards. Each card displays a name, job title, description, and image. Tapping a card shrinks or restores its size, giving visual feedback to the user. The result is an interactive list of profiles suitable for contact apps or team showcases.
