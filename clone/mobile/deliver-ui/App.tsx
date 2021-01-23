import React from 'react';
import { useFonts } from 'expo-font';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import SplashScreen from './src/pages/SplashScreen';
import CategoriesScreen from './src/pages/CategoriesScreen';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProText-Regular': require('./assets/fonts/SFProText-Regular.ttf'),
    'SFProText-Semibold': require('./assets/fonts/SFProText-Semibold.ttf'),
    Roboto_700Bold
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
          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}