import React, { useState } from 'react';
import { View, Button, StyleSheet, Pressable, Text, Image } from 'react-native';

export default function ImageSelector({ onSelectImage }) {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelectedImage = (image) => {
        setSelectedImage(image);
        onSelectImage(image);
    };

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress = {() => handleSelectedImage('ds3')} >
                <Image style={[styles.image, selectedImage === 'ds3' && styles.selected]} source={require('./assets/ds3_bonfire.jpg')} />
            </Pressable>
            <Pressable onPress = {() => handleSelectedImage('er')} >
                <Image style={[styles.image, selectedImage === 'er' && styles.selected]} source={require('./assets/er_Icon.jpg')} />
            </Pressable>
            <Pressable onPress = {() => handleSelectedImage('bb')} >
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
        width: 100,
    },

    image: {
        width: 30,
        height: 30,
    },

    selected: {
            borderWidth: 2,
            borderColor: 'black',
        },
});