import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';

// Static user image used for all profiles
const userImage = require('../../assets/images/user.png');

//  profile data
const data = [
  { image: userImage, name: 'John Doe', occupation: 'Developer', description: 'Great with JS.', showThumbnail: false },
  { image: userImage, name: 'Jane Smith', occupation: 'Designer', description: 'UX/UI wizard.', showThumbnail: false },
  { image: userImage, name: 'Mike Ross', occupation: 'Backend Dev', description: 'Node.js expert.', showThumbnail: false },
  { image: userImage, name: 'Rachel Green', occupation: 'Manager', description: 'Project pro.', showThumbnail: false },
  { image: userImage, name: 'Harvey Specter', occupation: 'Lawyer', description: 'Suits guy.', showThumbnail: false },
  { image: userImage, name: 'Donna Paulsen', occupation: 'COO', description: 'Knows everything.', showThumbnail: false }
];

// Stateless functional component for rendering a profile card
const ProfileCard = ({ image, name, occupation, description, onPress, showThumbnail }) => {
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) containerStyles.push(styles.cardThumbnail); // Apply scale transformation if thumbnail

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardOccupation}>{occupation}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

// Prop type validation
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

// Main app component managing the card list
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data }; // Initialize state with profile data
  }

  // Toggle thumbnail state of a profile card
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    // Generate card components from state
    const list = this.state.data.map((item, index) => (
      <ProfileCard
        key={index}
        {...item}
        onPress={() => this.handleProfileCardPress(index)}
      />
    ));

    return <View style={styles.container}>{list}</View>;
  }
}

// Calculate card width based on screen size
const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth / 2 - 20;

// Styles for layout and components
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 60, // Top padding for spacing
    paddingBottom: 10
  },
  cardContainer: {
    width: cardWidth,
    height: 200,
    backgroundColor: 'dodgerblue',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
    padding: 8,
    borderWidth: 2,
    borderColor: 'black'
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  cardImage: {
    width: 40,
    height: 40
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  },
  cardOccupation: {
    fontSize: 12,
    color: 'white',
    marginVertical: 2
  },
  cardDescription: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center'
  },
  cardThumbnail: {
    transform: [{ scale: 0.2 }] // Shrinks card when toggled
  }
});
