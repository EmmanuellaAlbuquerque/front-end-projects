import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Card from '../components/Card';

import styles from './styles/CategoriesScreen';
import back from '../../assets/images/back.png';
import search from '../../assets/images/search.png';

import vegetables from '../../assets/images/vegetables.png';

const categories = [
  {
    id: 0,
    title: 'Vegetables',
    photo_url: require('../../assets/images/vegetables.png'),
    amount: "43",
  },

  {
    id: 1,
    title: 'Fruits',
    photo_url: require('../../assets/images/fruits.png'),
    amount: "32",
  },

  {
    id: 2,
    title: 'Bread',
    photo_url: require('../../assets/images/bread.png'),
    amount: "22",
  },

  {
    id: 3,
    title: 'Sweets',
    photo_url: require('../../assets/images/sweets.png'),
    amount: "56",
  },

  {
    id: 4,
    title: 'Pasta',
    photo_url: require('../../assets/images/pasta.png'),
    amount: "20",
  },

  {
    id: 5,
    title: 'Drinks',
    photo_url: require('../../assets/images/drinks.png'),
    amount: "30",
  },
];

const Tab = createBottomTabNavigator();

export default function CategoriesScreen({ navigation }: { navigation: any }) {
	const [searchText, setSearchText] = useState('');

    const renderCategory = ({ item }) => (
    <Card title={item.title} photo_url={item.photo_url} amount={item.amount} />
  );

  function handleGoBack() {
    navigation.navigate('SplashScreen');
  }

  return (
    <View style={styles.container}>
	  <TouchableOpacity onPress={handleGoBack}>
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
      <View style={styles.CategoriesContainer}>
        <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={category => category.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      </View>
    </View>
  );
}
