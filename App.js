import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ahades, Home, Quran, Surah } from './source/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home"/>
      <Stack.Screen component={Ahades} name="Ahades"/>
      <Stack.Screen component={Quran} name="Quran"/>
      <Stack.Screen component={Surah} name="Surah"/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})