import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button} from '@rneui/base';
import { Input, Text } from '@rneui/themed';
import { Picker } from '@react-native-picker/picker';
import AppContext from './AppContext';

const EditScreen = () => {
  const { descriptions, handleSave } = useContext(AppContext);
  const [selectedGame, setSelectedGame] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [gameplayMechanics, setGameplayMechanics] = useState('');
  const [setting, setSetting] = useState('');
  const [storytelling, setStorytelling] = useState('');
  const [enjoyability, setEnjoyability] = useState('');
  const [position, setPosition] = useState('');
  const [coverArtUrl, setCoverArtUrl] = useState('');

  useEffect(() => {
    if (selectedGame && selectedGame !== 'new' && descriptions[selectedGame]) {
      const game = descriptions[selectedGame];
      setName(game.name);
      setDescription(game.description);
      setGameplayMechanics(game.gameplayMechanics.toString());
      setSetting(game.setting.toString());
      setStorytelling(game.storytelling.toString());
      setEnjoyability(game.enjoyability.toString());
      setPosition(game.position);
      setCoverArtUrl(game.coverArtUrl);
    } else if (selectedGame === 'new') {
      // Reset fields for new game
      setName('');
      setDescription('');
      setGameplayMechanics('');
      setSetting('');
      setStorytelling('');
      setEnjoyability('');
      setPosition('');
      setCoverArtUrl('');
    }
  }, [selectedGame, descriptions]);

  const handleSavePress = () => {
    handleSave(
      selectedGame === 'new' ? name : selectedGame,
      description,
      gameplayMechanics,
      setting,
      storytelling,
      enjoyability,
      position,
      coverArtUrl
    );
  };

  return (
    <View style={styles.container}>
      {selectedGame === 'new' ? (
        <>
          <Text>Enter New Game Name:</Text>
          <TextInput
            placeholder="Game Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </>
      ) : (
        <>
          <Text>Select Game to Edit Or Add a New Game:</Text>
          <Picker
            selectedValue={selectedGame}
            onValueChange={(itemValue) => setSelectedGame(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select a game" value="" />
            <Picker.Item label="Add New Game" value="new" />
            {Object.keys(descriptions).map(gameName => (
              <Picker.Item key={gameName} label={gameName} value={gameName} />
            ))}
          </Picker>
        </>
      )}
      <Input
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Input
        placeholder="Gameplay Mechanics"
        value={gameplayMechanics}
        onChangeText={setGameplayMechanics}
        keyboardType="numeric"
        style={styles.input}
      />
      <Input
        placeholder="Setting"
        value={setting}
        onChangeText={setSetting}
        keyboardType="numeric"
        style={styles.input}
      />
      <Input
        placeholder="Storytelling"
        value={storytelling}
        onChangeText={setStorytelling}
        keyboardType="numeric"
        style={styles.input}
      />
      <Input
        placeholder="Enjoyability"
        value={enjoyability}
        onChangeText={setEnjoyability}
        keyboardType="numeric"
        style={styles.input}
      />
      <Input
        placeholder="Position"
        value={position}
        onChangeText={setPosition}
        style={styles.input}
      />
      <Input
        placeholder="Cover Art URL"
        value={coverArtUrl}
        onChangeText={setCoverArtUrl}
        style={styles.input}
      />
      <Button title="Save" onPress={handleSavePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default EditScreen;
