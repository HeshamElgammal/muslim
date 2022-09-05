import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyle.container, {backgroundColor: COLORS.lightGray}]}>
      <Header name="مسلم" />
      <Image
        source={require('../../assets/imgs/moshaf.png')}
        resizeMode="contain"
        style={styles.panner}
      />
      <View style={styles.containerItems}>
        <TouchableOpacity
          style={styles.Item}
          onPress={() => {
            navigation.navigate('Quran');
          }}>
          <Image
            source={require('../../assets/imgs/quran.png')}
            resizeMode="cover"
            style={styles.img}
          />
          <Text style={[globalStyle.title, {color: COLORS.white}]}>
            القرآن الكريم
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Item}
          onPress={() => {
            // navigation.navigate('Ahades');
          }}>
          <Image
            source={require('../../assets/imgs/sebha.png')}
            resizeMode="cover"
            style={styles.img}
          />
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
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.Sradius,
    height: SIZES.height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '54%',
    height: SIZES.height * 0.1,
    alignSelf: 'center',
    borderRadius: SIZES.Sradius,
  },
  panner: {
    width: '100%',
    height: SIZES.height * 0.35,
    alignSelf: 'center',
  },
});
