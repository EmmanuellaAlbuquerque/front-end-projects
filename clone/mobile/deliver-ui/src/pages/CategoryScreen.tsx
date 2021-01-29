import React, { useState } from 'react';
import { View, Text } from 'react-native';

import HeaderGridContainer from '../components/HeaderGridContainer';

import styles from './styles/CategoryScreen';

export default function CategoryScreen({ route, navigation, children }) {
  function handleGoBack() {
    navigation.navigate('Categories');
  }

	return (
		<HeaderGridContainer navigation={navigation} route={route} children={children}>
	    <View style={styles.CategoryContainer}>
	    	<Text>TWES</Text>
	    </View>
		</HeaderGridContainer>
	);
}
