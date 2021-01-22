import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import logo from './assets/images/logo.png';
import box from './assets/images/box.png';
import background from './assets/images/background.png';

import styles from './styles';

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProText-Regular': require('./assets/fonts/SFProText-Regular.ttf'),
    'SFProText-Semibold': require('./assets/fonts/SFProText-Semibold.ttf'),
    Roboto_700Bold
  });

  function handleOrderNow() {

  }

  function handleDismiss() {

  }

  if (!fontsLoaded) {
    // return <AppLoading />;
    return <Text>Loading</Text>
  } else {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //   <Text style={{ fontFamily: 'SFProDisplay-Bold', fontSize: 40 }}>SFProDisplay-Bold</Text>
      //   <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 40 }}>SFProDisplay-Bold</Text>
      // </View>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
        <View style={styles.backdropTop}>
          <Image
            style={styles.logo}
            source={logo}
          />
        </View>
        <View style={styles.backdropBase}>
          <Image
              style={[styles.logo, styles.box]}
              source={box}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Non-Contact Deliveries
              </Text>
            <Text style={styles.text}>
              When placing an order, select the option “Contactless delivery” and
              the courier will leave your order at the door.
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleOrderNow}>
              <Text style={[styles.orderButtonText, styles.buttonText]}>
                ORDER NOW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.dismissButton]} onPress={handleDismiss}>
              <Text style={[styles.dismissButtonText, styles.buttonText]}>
                DISMISS
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

