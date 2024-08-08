# MobileDevFinalProjectApp

## Description
This is the main repo for my final project for the first Mobile Development course. This app will run in expo using metro, mainly run through android studio. It will display a series of images with descriptions
and ranking values to create a list of different games. There is also the ability to edit the contents of different games, or add entirely new games. Data persistance is achieved through the use of SQLite,
and a large number of the components are created with the React Native Elements component library

## Table of Contents
- Installation
- Usage
- Contact

## Installation
1. Install and configure Android Studio on your device, and set up an android emulator. The Pixel 8 API 33 with Android 13 "Tiramisu" emulator works best for this application.
2. Clone the project from this repo.
3. Ensure you have expo installed and the "NPX Expo Start" command is working.
4. Ensure you have the correct packages and dependencies installed by running the following commands: " npm i expo-sqlite ", " npm i @react-native/metro-config --save-dev ", " npm i expo-sqlite ", " npm i @react-native-picker/picker ", " npx expo install react-dom react-native-web @expo/metro-runtime ", " npx expo install expo-dev-client "

## Usage
To run the app in your Android Studio Emulator, run the command "npx expo start", press 'S' to switch to --go, then press 'A' to run the application on android.
Once the app is open, you will be shown the main screen with the games, their descriptions and values. You can use the arrow buttons on the bottom of the screen to navigate through the games, and the two buttons 
along the top of the screen to switch between the two main pages, "View Games" and "Edit/Add". In the edit/add screen, you will be shown a dropdown and various input fields. You must first select an option from
the dropdown to either create a new game, or select an existing game to edit the details of. You can then enter or edit any values in the input boxes. If you selected a game to edit, the fields will be populated
with the details from that game. If you chose to create a new game, the fields will be blank. You must enter a value in every input, and a web image url for the application to display for that game. Clicking the
"Save" button on the bottom of the edit/add screen will issue a command to the app's SQLite database and update it with the new or edited values. Switching back to the viewing screen will show the new game, or changes to an existing game.

## Contact
Jason Somerton-Earle - jasongtse@gmail.com/jason.somerton-earle03@ed.cna.nl.ca
