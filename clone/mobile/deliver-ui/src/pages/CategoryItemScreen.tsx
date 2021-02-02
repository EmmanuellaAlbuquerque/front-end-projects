import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Animated } from 'react-native';

import ImageSlider from '../components/ImageSlider';

import back from '../../assets/images/back.png';
import heart from '../../assets/icons/heart.png';
import whiteShoppingCart from '../../assets/icons/white-shopping-cart.png';

import styles from './styles/CategoryItemScreen';

export default function CategoryItemScreen({ route, navigation }){
	const [selectedIdItem, setSelectedIdItem] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const item = route.params.item;

  function handleGoBack() {
    navigation.navigate('CategoryScreen');
  }

  const renderCategoryItem = ({ item }) => (
  	<Image style={styles.picture} source={item.require}/>
  );

	return(
		<View style={styles.itemContainer}>
		  <TouchableOpacity style={styles.button} onPress={handleGoBack}>
				<Image
					style={styles.backButton}
					source={back}
				/>
		  </TouchableOpacity>
			<ImageSlider images={item.pictures} />
			<View style={styles.detailsContainer}>
				<Text>{item.name}</Text>

				<View style={styles.priceDetails}>
					<Text>{item.price}</Text>
					<Text>{item.measure}</Text>					
				</View>

				<Text>{item.approximation}</Text>
				<Text>{item.title}</Text>
				<Text>{item.description}</Text>

				<View style={styles.actionButtonsContainer}>
					<TouchableOpacity>
						<Image
							style={styles.icon}
							source={heart}
						/>
					</TouchableOpacity>

					<TouchableOpacity>
						<Image
							style={styles.icon}
							source={whiteShoppingCart}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
