import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import logo from './assets/images/logo.png';

import styles from './styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return <Text>Loading</Text>
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'SFProDisplay-Bold', fontSize: 40 }}>SFProDisplay-Bold</Text>
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 40 }}>SFProDisplay-Bold</Text>
      </View>
      // <View>
      //   <Image
      //     source={logo}
      //   />
      // </View>
    );
  }
}
