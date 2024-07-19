import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageSelector from './ImageSelector';
import AppContext from './AppContext';
import { initializeDatabase } from './DatabaseConnection'; // Adjusted import

const imagesForDisplay = {
  ds3: {
    src: require('./assets/Dark_souls_3_cover_art.jpg'),
  },
  er: {
    src: require('./assets/Elden_Ring_Box_art.jpg'),
  },
  bb: {
    src: require('./assets/Bloodborne_Cover_Art.jpg'),
  },
};

const HomeScreen = () => {
  const { descriptions } = useContext(AppContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState('');

   useEffect(() => {
      const initDB = async () => {
        await initializeDatabase();
      };

      initDB();
    }, []);

  const handleImageSelection = (imageKey) => {
    setSelectedImage(imagesForDisplay[imageKey].src);
    setImageDescription(descriptions[imageKey]);
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <>
          <Image style={styles.image} source={selectedImage} />
          <Text style={styles.imageText}>{imageDescription}</Text>
        </>
      )}
      <ImageSelector onSelectImage={handleImageSelection} />
      <Text style={styles.imageText}>
        Tap On Each Icon To View Its Corresponding Game's Status In My Personal List Of The Top 3 Souls And Souls-Like Games
      </Text>
    </View>
  );
};

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

export default HomeScreen;
