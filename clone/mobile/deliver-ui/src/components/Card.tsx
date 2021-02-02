import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles/Card';

export default function Card({ item, navigation }) {
	function handleCategoryPress(title) {
		navigation.navigate('CategoryScreen', {
            item,
    });
	}

  return (
	  <TouchableOpacity 
	  	onPress={() => handleCategoryPress(item)}
	  	style={styles.card}>
	    <Image
	      style={styles.cardImage}
	      source={item.photo_url}
	    />
	    <Text style={styles.cardTitle}>
	      {item.title}
	    </Text>
	    <Text style={styles.cardAmount}>
	      ({item.amount})
	    </Text>
	  </TouchableOpacity>
  );
}
