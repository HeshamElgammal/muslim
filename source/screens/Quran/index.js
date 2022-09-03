import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {QuranSurahName} from '../../config/quranSurahName';

const Quran = () => {
  return (
    <View style={globalStyle.container}>
      <FlatList data={QuranSurahName} style={{width: '90%'}}
      renderItem={({item,index})=>(
        <Text>{item.name}</Text>
      )}
      />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({});
