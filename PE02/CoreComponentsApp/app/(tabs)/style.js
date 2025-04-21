import { StyleSheet } from 'react-native';
// Create a stylesheet for the app
const styles = StyleSheet.create({
    // Style for the main screen container
  screen: {
    padding: 20,
    backgroundColor: '#fff',
  },
    // Style for university logo
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  // Style for prompt text
  promptText: {
    fontSize: 16,
    marginBottom: 10,
  },
  // Style for course input field
  courseInput: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  // Style for feedback text
  feedbackText: {
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#444',
  },
  // Style for section headers
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#f9e79f',
    padding: 10,
    marginTop: 20,
  },
  // Style for individual course items
  courseItem: {
    fontSize: 16,
    marginLeft: 12,
    marginVertical: 3,
  },
});
// Export stylesheet as default
export default styles;