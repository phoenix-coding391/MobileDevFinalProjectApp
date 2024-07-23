import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppContext from './AppContext';

const NavBar = () => {
  const { setCurrentView } = useContext(AppContext);

  return (
    <View style={styles.navBar}>
      <Button title="Games" onPress={() => setCurrentView('Home')} />
      <Button title="Edit/Add" onPress={() => setCurrentView({ view: 'Edit', gameName: null })} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 50,  // Adjusted padding for better touch area
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default NavBar;
