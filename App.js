// App.js
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppProvider } from './AppContext';
import HomeScreen from './HomeScreen';
import EditScreen from './EditScreen';
import AppContext from './AppContext';

const ButtonBar = () => {
  const { setCurrentView } = React.useContext(AppContext);
  return (
    <View style={styles.buttonContainer}>
      <Button title="Top 3" onPress={() => setCurrentView('Home')} />
      <Button title="Edit" onPress={() => setCurrentView('Edit')} />
    </View>
  );
};

const Content = () => {
  const { currentView } = React.useContext(AppContext);
  return currentView === 'Home' ? <HomeScreen /> : <EditScreen />;
};

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <ButtonBar />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
