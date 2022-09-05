import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ToastAndroid} from 'react-native';

const SetAsyncStorage = async (key, data) => {
  await AsyncStorage.setItem(key, JSON.stringify(data), (err, res) => {
    console.log(res);
  });
};
const GetAsyncStorage = async key => {
  let data = await AsyncStorage.getItem(key);
  console.log('data' + data);
  return data;
};
const welcomeMessage = () => {
  return ToastAndroid.show(
    'Welcome DR.Mostafa',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};
export {
  SetAsyncStorage,
  GetAsyncStorage,
  welcomeMessage,
};
