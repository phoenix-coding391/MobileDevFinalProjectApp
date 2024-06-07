import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import ImageSelector from './ImageSelector';

const imagesForDisplay = {
    ds3: {
        src: require('./assets/Dark_souls_3_cover_art.jpg'),
        description: "Game: Dark Souls 3\n\nDescription: Grim/Dark high-fantasy Action-RPG focused around an un-ending cycle and humanities inability to accept change\n\nGameplay/Mechanics: 8/10\nSetting: 9/10\nStorytelling: 10/10\nEnjoyability: 8/10\n\nPosition: 3rd",
        },
    er: {
        src: require('./assets/Elden_Ring_Box_art.jpg'),
        description: "Game: Elden Ring\n\nDescription: High-fantasy Open-World Action-RPG focused around the choice between clinging to an old way of life, or orchestrating it's destruction in place of a new one\n\nGameplay/Mechanics: 9/10\nSetting: 10/10\nStorytelling: 9/10\nEnjoyability: 10/10\n\nPosition: 2nd",
        },
    bb: {
        src: require('./assets/Bloodborne_Cover_Art.jpg'),
        description: "Game: Bloodborne\n\nDescription: Gothic/Cosmic Horror Action-RPG focused around the madness and atrocities that result from humanities blind pursuit of power and understanding, and it's insignificance in the face of indifferent forces represented as Lovecraftian Outer-Gods\n\nGameplay/Mechanics: 10/10\nSetting: 10/10\nStorytelling: 10/10\nEnjoyability: 10/10\n\nPosition: 1st",
        },
};

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState('');

  const handleImageSelection = (imageKey) => {
    setSelectedImage(imagesForDisplay[imageKey].src);
    setImageDescription(imagesForDisplay[imageKey].description);
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <>
        <Image
               style={styles.image}
               source={selectedImage}
        />
        <Text style={styles.imageText}>{imageDescription}</Text>
        </>
      )}
      <ImageSelector onSelectImage={handleImageSelection} />
      <Text style={styles.imageText}>Tap On Each Icon To View It's Corresponding Game's Status In My Personal List Of The Top 3 Souls And Souls-Like Games</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },



  image: {
          width: 400,
          height: 400,
      },

  imageText: {
          marginTop: 10,
          fontSize: 16,
          color: '#333',
          textAlign: 'center',
      },
});
