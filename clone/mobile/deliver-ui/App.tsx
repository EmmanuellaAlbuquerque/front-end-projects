import React from 'react';
import { useFonts } from 'expo-font';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import SplashScreen from './src/pages/SplashScreen';
import CategoriesScreen from './src/pages/CategoriesScreen';
import TabMenuScreen from './src/pages/TabMenuScreen';
import CategoryScreen from './src/pages/CategoryScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProText-Regular': require('./assets/fonts/SFProText-Regular.ttf'),
    'SFProText-Semibold': require('./assets/fonts/SFProText-Semibold.ttf'),
    'SFProText-Medium': require('./assets/fonts/SFProText-Medium.ttf'),
    'SFProText-Bold': require('./assets/fonts/SFProText-Bold.ttf'),
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return <Text>Loading</Text>
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerShown: false
            }}
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            name="TabMenuScreen"
            component={TabMenuScreen}
          />
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
