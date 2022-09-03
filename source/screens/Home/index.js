import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>مسلم</Text>
      <View style={styles.containerItems}>
        <TouchableOpacity
          style={styles.Item}
          onPress={() => {
            navigation.navigate('Quran');
          }}>
          <Text style={[globalStyle.title, {color: COLORS.white}]}>
            القرآن الكريم
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Item}
          onPress={() => {
            navigation.navigate('Ahades');
          }}>
          <Text style={[globalStyle.title, {color: COLORS.white}]}>
            الأحاديث
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerItems: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: SPACING.xl,
  },
  Item: {
    width: '45%',
    backgroundColor: COLORS.brown,
    borderRadius: SIZES.Sradius,
    height: SIZES.height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
