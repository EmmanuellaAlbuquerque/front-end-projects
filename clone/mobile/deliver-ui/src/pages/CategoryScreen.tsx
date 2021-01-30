import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

import HeaderGridContainer from '../components/HeaderGridContainer';

import check from '../../assets/icons/check.png';

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

export default function CategoryScreen({ route, navigation, children }) {
	const chips = route.params.item.chips;

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

	return (
		<HeaderGridContainer navigation={navigation} route={route} children={children}>
	    <View style={styles.CategoryContainer}>
	    	<ScrollView horizontal={true}>
		      <FlatList
		        data={chips}
		        renderItem={renderChipItem}
		        keyExtractor={(item) => item.name}
		        extraData={selectedId}
		        numColumns={3}
		      />
	    	</ScrollView>
	    </View>
		</HeaderGridContainer>
	);
}
