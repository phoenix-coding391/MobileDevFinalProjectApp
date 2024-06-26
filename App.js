// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppProvider } from './AppContext';
import HomeScreen from './HomeScreen';
import EditScreen from './EditScreen';
import NavBar from './NavBar';
import AppContext from './AppContext';

const Content = () => {
  const { currentView } = React.useContext(AppContext);
  return currentView === 'Home' ? <HomeScreen /> : <EditScreen />;
};

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <NavBar />
        <Content />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
