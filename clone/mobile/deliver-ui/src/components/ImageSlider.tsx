import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View, 
  ImageBackground, Animated, Dimensions } from "react-native";

import styles from './styles/ImageSlider';

export default function ImageSlider({ images }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ], {useNativeDriver: false})}
          scrollEventThrottle={1}
        >
          {images.map((image) => {
            return (
              <View
                style={styles.image}
                key={image.id}
              >
                <ImageBackground source={image.require} style={styles.itemImage}>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image) => {
            const color = scrollX.interpolate({
              inputRange: [
                windowWidth * (image.id - 1),
                windowWidth * image.id,
                windowWidth * (image.id + 1)
              ],
              outputRange: ['rgba(255, 255, 255, 0.5)', '#fff', 'rgba(255, 255, 255, 0.5)'],
              extrapolate: "clamp"
            });

            const dotColor = {
              backgroundColor: color,
            }

            return (
              <Animated.View
                key={image.id}
                style={[styles.normalDot, dotColor]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
