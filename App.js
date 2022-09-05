import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Ahades, Home, Quran, Surah, Masbaha, Azkar} from './source/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from './source/config/themes';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.secondary}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Ahades} name="Ahades" />
          <Stack.Screen component={Quran} name="Quran" />
          <Stack.Screen component={Surah} name="Surah" />
          <Stack.Screen component={Azkar} name="Azkar" />
          <Stack.Screen component={Masbaha} name="Masbaha" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
