import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppContext from './AppContext';

const HomeScreen = () => {
  const { descriptions } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    // Sort games based on position and update gameList
    const sortedGames = Object.values(descriptions).sort((a, b) => {
      const positionOrder = ['1st', '2nd', '3rd']; // Define your position order here
      return positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position);
    });
    setGameList(sortedGames);
  }, [descriptions]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gameList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gameList.length) % gameList.length);
  };

  const currentGame = gameList[currentIndex];

  return (
    <View style={styles.container}>
      {currentGame ? (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Image style={styles.image} source={{ uri: currentGame.coverArtUrl }} />
          <Text style={styles.gameName}>{currentGame.name}</Text>
          <Text style={styles.imageText}>{currentGame.description}</Text>
          <Text style={styles.detailText}>Gameplay Mechanics: {currentGame.gameplayMechanics}</Text>
          <Text style={styles.detailText}>Setting: {currentGame.setting}</Text>
          <Text style={styles.detailText}>Storytelling: {currentGame.storytelling}</Text>
          <Text style={styles.detailText}>Enjoyability: {currentGame.enjoyability}</Text>
          <View style={styles.navigation}>
            <TouchableOpacity onPress={handlePrevious} style={styles.navButton}>
              <Text style={styles.navButtonText}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.pageNumber}>
              {currentIndex + 1} / {gameList.length}
            </Text>
            <TouchableOpacity onPress={handleNext} style={styles.navButton}>
              <Text style={styles.navButtonText}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <Text>No games available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 10,
  },
  gameName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 24,
    color: '#007bff',
  },
  pageNumber: {
    fontSize: 18,
    marginHorizontal: 20,
  },
});

export default HomeScreen;
