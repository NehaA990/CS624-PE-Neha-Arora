import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

// Main screen for the Core Components app
const CoreComponentsApp = () => {
  // State to store the course name the user likes
  const [likedCourse, setLikedCourse] = useState('');

  return (
    // ScrollView makes the screen scrollable if content overflows
    <ScrollView style={styles.screen}>
      {/* University icon */}
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
      />

      {/* Prompt to enter favorite course */}
      <Text style={styles.promptText}>Which course did you like?</Text>

      {/* Input box for entering the course name */}
      <TextInput
        placeholder="e.g. CS624"
        style={styles.courseInput}
        value={likedCourse}
        onChangeText={setLikedCourse}
      />

      {/* Display what the user typed */}
      {likedCourse !== '' && (
        <Text style={styles.feedbackText}>You entered: {likedCourse}</Text>
      )}

      {/* Section: Core Courses */}
      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      <Text style={styles.courseItem}>CS 504 – Software Engineering</Text>
      <Text style={styles.courseItem}>CS 506 – Programming for Computing</Text>
      <Text style={styles.courseItem}>CS 519 – Cloud Computing Overview</Text>
      <Text style={styles.courseItem}>CS 533 – Computer Architecture</Text>
      <Text style={styles.courseItem}>CS 547 – Secure Systems and Programs</Text>
      <Text style={styles.courseItem}>CS 622 – Discrete Math and Algorithms</Text>
      <Text style={styles.courseItem}>DS 510 – AI for Data Science</Text>
      <Text style={styles.courseItem}>DS 620 – Machine Learning & Deep Learning</Text>

      {/* Section: Depth of Study */}
      <Text style={styles.sectionHeader}>Depth of Study (6 credits)</Text>
      <Text style={styles.courseItem}>CS 624 – Full-Stack Development: Mobile App</Text>
      <Text style={styles.courseItem}>CS 628 – Full-Stack Development: Web App</Text>

      {/* Section: Capstone */}
      <Text style={styles.sectionHeader}>Capstone</Text>
      <Text style={styles.courseItem}>CS 680 – Computer Science Capstone</Text>
    </ScrollView>
  );
};

// Internal styles for layout and appearance
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  promptText: {
    fontSize: 16,
    marginBottom: 10,
  },
  courseInput: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  feedbackText: {
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#444',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f9e79f',
    padding: 10,
    marginTop: 20,
  },
  courseItem: {
    fontSize: 16,
    marginLeft: 12,
    marginVertical: 3,
  },
  catalogLink: {
    color: 'blue',
    marginTop: 30,
    fontSize: 14,
  },
});

// Export the main component
export default CoreComponentsApp;
