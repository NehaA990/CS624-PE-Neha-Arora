import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import styles from './style'

// Define component that displays name of a course 
const CourseItem = ({ name }) => {
  return (
      // Render the courses name 
    <Text style={styles.courseItem}>{name}</Text>
  );
};

//  Main component to display list of courses
const Courses = () => {
  const [likedCourse, setLikedCourse] = useState('');

// List of core requirement courses
const coreCourses = [
  'CS 504 - Software Engineering',
  'CS 506 - Programming for Computing',
  'CS 519 - Cloud Computing Overview',
  'CS 533 - Computer Architecture',
  'CS 547 - Secure Systems and Programs',
  'CS 622 - Discrete Math and Algorithms',
  'DS 510 - AI for Data Science',
  'DS 620 - Machine Learning & Deep Learning',
];
// Courses under depth of study category
const depthOfStudyCourses = [
  'CS 624 - Full-Stack Development: Mobile App',
  'CS 628 - Full-Stack Development: Web App',
];
  // Capstone project course
const capstoneCourses = [
  'CS 680 - Computer Science Capstone',
];
  // Render courses component
  return (
    <ScrollView style={styles.screen}>
       {/* Display university icon */}
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.logo}
      />
      {/* Ask user to enter their liked course */}
      <Text style={styles.promptText}>Which course did you like?</Text>
       {/* Input field for entering liked course */}
      <TextInput
        placeholder="e.g. CS624"
        style={styles.courseInput}
        value={likedCourse}
        onChangeText={setLikedCourse}
      />
       {/* Display entered course if any */}
      {likedCourse !== '' && (
        <Text style={styles.feedbackText}>You entered: {likedCourse}</Text>
      )}
        {/* Depth of Study section */}
      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      {coreCourses.map((course, index) => (
        <CourseItem key={index} name={course} />
      ))}
      
      <Text style={styles.sectionHeader}>Depth of Study (6 credits)</Text>
      {depthOfStudyCourses.map((course, index) => (
        <CourseItem key={index} name={course} />
      ))}
       {/* Capstone section */}
      <Text style={styles.sectionHeader}>Capstone</Text>
      {capstoneCourses.map((course, index) => (
        <CourseItem key={index} name={course} />
      ))}
    </ScrollView>
  );
};
// Export courses component as default
export default Courses;