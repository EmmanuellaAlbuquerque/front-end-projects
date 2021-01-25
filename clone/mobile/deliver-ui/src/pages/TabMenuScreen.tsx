import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from './CategoriesScreen';

import styles from './styles/TabMenuScreen';

import grid from '../../assets/icons/grid.png';
import gridFocused from '../../assets/icons/grid-focused.png';

import shoppingCart from '../../assets/icons/shopping-cart.png';
import shoppingCartFocused from '../../assets/icons/shopping-cart-focused.png';

import user from '../../assets/icons/user.png';
import userFocused from '../../assets/icons/user-focused.png';

function notImplementedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Not Implemented Yet</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabMenuScreen() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          switch(route.name) {
            case "Categories":
              if (focused) {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={gridFocused}
                  />
                )
              }
              else {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={grid}
                  />
                )
              }
              break;
            case "Checkout":
              if (focused) {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={shoppingCartFocused}
                  />
                )
              }
              else {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={shoppingCart}
                  />
                )
              }
              break;
            case "Profile":
              if (focused) {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={userFocused}
                  />
                )
              }
              else {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={user}
                  />
                )
              }
              break;
          }
        },
      })}
        tabBarOptions={{
          showLabel: false,
        }}
    >
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Checkout" component={notImplementedScreen} options={{ tabBarBadge: 8 }} />
      <Tab.Screen name="Profile" component={notImplementedScreen} />
    </Tab.Navigator>
  );
}
