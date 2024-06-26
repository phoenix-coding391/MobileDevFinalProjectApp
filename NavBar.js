// NavBar.js
import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppContext from './AppContext';

const NavBar = () => {
  const { setCurrentView } = useContext(AppContext);

  return (
    <View style={styles.navBar}>
      <Button title="Top 3" onPress={() => setCurrentView('Home')} />
      <Button title="Edit" onPress={() => setCurrentView('Edit')} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Example background color
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default NavBar;
