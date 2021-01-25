import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';

import logo from '../../assets/images/logo.png';
import box from '../../assets/images/box.png';
import background from '../../assets/images/background.png';

import styles from './styles/SplashScreen';

/* lose type safety */
export default function SplashScreen({ navigation }: { navigation: any }) {
  function handleOrderNow() {
    navigation.navigate('TabMenuScreen');
  }

  function handleDismiss() {

  }

  return (
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
