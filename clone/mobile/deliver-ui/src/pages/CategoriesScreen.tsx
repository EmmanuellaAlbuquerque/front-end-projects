import React from 'react';
import { View, FlatList } from 'react-native';

import Card from '../components/Card';
import HeaderGridContainer from '../components/HeaderGridContainer';
import categories from '../utils/categories';

import styles from './styles/CategoriesScreen';


export default function CategoriesScreen({ route, navigation, children }) {
    const renderCategory = ({ item }) => (
      <Card title={item.title} photo_url={item.photo_url} amount={item.amount} navigation={navigation} />
  );

  function handleGoBack() {
    navigation.navigate('SplashScreen');
  }

  return (
    <HeaderGridContainer navigation={navigation} route={route} children={children}>
      <View style={styles.CategoriesContainer}>
        <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={category => category.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      </View>
    </HeaderGridContainer>
  );
}
