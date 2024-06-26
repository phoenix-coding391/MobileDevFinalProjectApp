import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AppContext from './AppContext';

const EditScreen = () => {
  const { descriptions, handleSave } = useContext(AppContext);
  const [selectedGame, setSelectedGame] = useState('ds3');
  const [text, setText] = useState(descriptions['ds3']);

  const handleGameChange = (game) => {
    setSelectedGame(game);
    setText(descriptions[game]);
  };

  return (
    <View style={styles.container}>
      <Text>Edit your top 3 games list</Text>
      <Picker
        selectedValue={selectedGame}
        style={styles.picker}
        onValueChange={handleGameChange}
      >
        <Picker.Item label="Dark Souls 3" value="ds3" />
        <Picker.Item label="Elden Ring" value="er" />
        <Picker.Item label="Bloodborne" value="bb" />
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Edit game description"
        multiline
      />
      <Button title="Save" onPress={() => handleSave(selectedGame, text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: 200,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    textAlignVertical: 'top',
  },
});

export default EditScreen;
