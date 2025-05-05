import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabBar}>
      {/* All Tab */}
      <TouchableOpacity onPress={() => setActiveTab('all')}>
        <Text style={[styles.tab, activeTab === 'all' && styles.activeTab]}>All</Text>
      </TouchableOpacity>
      {/* Completed Tab */}
      <TouchableOpacity onPress={() => setActiveTab('completed')}>
        <Text style={[styles.tab, activeTab === 'completed' && styles.activeTab]}>Completed</Text>
      </TouchableOpacity>
      {/* Incomplete Tab */}
      <TouchableOpacity onPress={() => setActiveTab('incomplete')}>
        <Text style={[styles.tab, activeTab === 'incomplete' && styles.activeTab]}>Incomplete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row', // Horizontal tab layout
    justifyContent: 'space-around', // Equal space between tabs
    backgroundColor: '#ffffff', // White background for tab bar
    paddingVertical: 10, // Padding around tabs
    borderTopWidth: 1, // Border at the top
    borderTopColor: '#ededed',
  },
  tab: {
    fontSize: 18, // Tab text size
    color: '#333', // Default text color
    fontWeight: 'bold', // Bold tab text
  },
  activeTab: {
    color: '#007bff', // Blue color for active tab
  },
});

export default TabBar;
