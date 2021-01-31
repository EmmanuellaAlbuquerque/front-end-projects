import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

import HeaderGridContainer from '../components/HeaderGridContainer';

import check from '../../assets/icons/check.png';
import heart from '../../assets/icons/heart.png';
import whiteShoppingCart from '../../assets/icons/white-shopping-cart.png';

import styles from './styles/CategoryScreen';

const Chip = ({ item, onPress, style, selected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
  	{ selected ?
  		<>
  			<Image
	        style={styles.check}
	        source={check}
	      />
	  		<Text style={[styles.nameSelected, styles.rootName]}>
	  			{item.name} ({item.amount})
	  		</Text>
  		</>
  		:
  		<Text style={[styles.name, styles.rootName]}>{item.name} ({item.amount})</Text>
  	}
  </TouchableOpacity>
);

const Data = ({ item }) => (
	<View style={styles.dataContainer}>
		<Image
			style={styles.picture}
			source={item.picture}
		/>
		<View style={styles.data}>
			<View>
				<Text style={styles.dataName}>{item.name}</Text>
				<View style={styles.dataInfo}>
					<Text style={styles.price}>{item.price}</Text>
					<Text style={styles.measure}>{item.measure}</Text>
				</View>
			</View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={[styles.button, styles.heartButton]}>
	  			<Image
		        style={styles.icon}
		        source={heart}
		      />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.whiteShoppingCartButton]}>
	  			<Image
		        style={styles.icon}
		        source={whiteShoppingCart}
		      />
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export default function CategoryScreen({ route, navigation, children }) {
	const chips = route.params.item.chips;
	const data = route.params.item.data;

  function handleGoBack() {
    navigation.navigate('Categories');
  }

  const [selectedId, setSelectedId] = useState('Сabbage and lettuce');

  const renderChipItem = ({ item }) => {
    const backgroundColor = item.name === selectedId ? "#E2CBFF" : "#FFF";
    const selected = item.name === selectedId ? true : false;

    return (
      <Chip
        item={item}
        onPress={() => setSelectedId(item.name)}
        style={{ backgroundColor }}
        selected={selected}
      />
    );
  };

  const renderData = ({ item }) => {
    return (
      <Data
        item={item}
      />
    );
  };

	return (
		<HeaderGridContainer navigation={navigation} route={route} children={children}>
	    <View style={styles.CategoryContainer}>
	    	<ScrollView horizontal={true} style={styles.scrollHorizontal}>
		      <FlatList
		      	style={styles.chipsList}
		        data={chips}
		        renderItem={renderChipItem}
		        keyExtractor={(item) => item.name}
		        extraData={selectedId}
		        numColumns={3}
		      />
	    	</ScrollView>
	      <FlatList
	        data={data}
	        renderItem={renderData}
	        keyExtractor={(item) => item.id.toString()}
	        numColumns={1}
	        contentContainerStyle={{ paddingBottom: 20 }}
	      />
	    </View>
		</HeaderGridContainer>
	);
}
