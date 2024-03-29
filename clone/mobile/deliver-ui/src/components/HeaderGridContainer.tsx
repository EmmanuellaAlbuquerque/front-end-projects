import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from 'react-native';

import back from '../../assets/images/back.png';
import search from '../../assets/images/search.png'

import styles from './styles/HeaderGridContainer';

export default function HeaderGridContainer({ route, navigation, children, searchItem, name }) {
	const [searchText, setSearchText] = useState('');
	var title;
	if (route.params !== undefined) {
		title = route.params.item.title;
	}
	else if (name){
		title = name;
	}
	else {
		title = route.name;
	}

	function handleGoBack() {
		navigation.navigate('Categories');
  }

	return (
	<>
		{ route.params && <Image
		style={styles.cover}
		source={route.params.item.cover}
		/>
	  }
		<View style={styles.container}>
			<View style={styles.header}>
			  <TouchableOpacity style={styles.button} onPress={handleGoBack}>
				<Image
					style={styles.backButton}
					source={back}
				/>
			  </TouchableOpacity>
		  </View>
		  <Text style={styles.title}>
			{title}
		  </Text>
		  { searchItem && 
			<View style={[styles.searchShape, styles.searchContainer]}>
				<Image
				  style={styles.searchIcon}
				source={search}
				/>
			  <TextInput
				style={[styles.searchShape, styles.searchInput]}
				placeholder="Search"
				onChangeText={searchText => setSearchText(searchText)}
				defaultValue={searchText}
			  />
			</View>
		  }
		  {children}
		</View>
	</>
	);
}
