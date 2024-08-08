import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import {Image} from '@rneui/themed';

export default function ImageSelector({ onSelectImage }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
    onSelectImage(image);
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => handleSelectedImage('ds3')}>
        <Image style={[styles.image, selectedImage === 'ds3' && styles.selected]} source={require('./assets/ds3_bonfire.jpg')} />
      </Pressable>
      <Pressable onPress={() => handleSelectedImage('er')}>
        <Image style={[styles.image, selectedImage === 'er' && styles.selected]} source={require('./assets/er_Icon.jpg')} />
      </Pressable>
      <Pressable onPress={() => handleSelectedImage('bb')}>
        <Image style={[styles.image, selectedImage === 'bb' && styles.selected]} source={require('./assets/hunters_mark.jpg')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '80%',
  },
  image: {
    width: 50,
    height: 50,
  },
  selected: {
    borderWidth: 2,
    borderColor: 'black',
  },
});
