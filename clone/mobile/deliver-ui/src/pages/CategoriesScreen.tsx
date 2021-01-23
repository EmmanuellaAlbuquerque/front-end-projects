import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from 'react-native';

import styles from './styles/CategoriesScreen';
import back from '../../assets/images/back.png';
import search from '../../assets/images/search.png';

export default function CategoriesScreen() {
	const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
	  <TouchableOpacity>
			<Image
				style={styles.backButton}
	      source={back}
	    />
	  </TouchableOpacity>
      <Text style={styles.title}>
        Categories
      </Text>
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
	    <SafeAreaView style={styles.CategoriesContainer}>
	    </SafeAreaView>
    </View>
  );
}
