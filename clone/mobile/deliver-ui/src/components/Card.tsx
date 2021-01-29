import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles/Card';

export default function Card({ title, photo_url, amount, navigation}) {
	function handleCategoryPress() {
		navigation.navigate('CategoryScreen', {
            title,
          });
	}

  return (
	  <TouchableOpacity 
	  	onPress={handleCategoryPress}
	  	style={styles.card}>
	    <Image
	      style={styles.cardImage}
	      source={photo_url}
	    />
	    <Text style={styles.cardTitle}>
	      {title}
	    </Text>
	    <Text style={styles.cardAmount}>
	      ({amount})
	    </Text>
	  </TouchableOpacity>
  );
}
