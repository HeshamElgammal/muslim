import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, SPACING} from '../../config/themes';

import {useNavigation} from '@react-navigation/native';

const Header = ({name, style, resizeMode, back = false}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/imgs/bgheader.jpg')}
      style={[styles.bg, style]}
      resizeMode={resizeMode ? resizeMode : 'cover'}>
      <View style={[styles.container, style]}>
        {back ? (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/imgs/back.png')}
              style={styles.btn}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View
            style={styles.btn}
          />
        )}
        <Text style={styles.title}>{name}</Text>
        <View
          style={styles.btn}
        />
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: SIZES.height * 0.07,
    marginBottom: SPACING.s,
    alignItems: 'center',
  },
  container: {
    // backgroundColor: COLORS.secondary,
    width: '100%',
    height: SIZES.height * 0.065,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomRightRadius: SIZES.Sradius,
    borderBottomLeftRadius: SIZES.Sradius,
    flexDirection: 'row',
    // marginBottom: SPACING.s,
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: SIZES.h1,
    fontWeight: '600',
    // marginTop:"5%"
  },
  btn:{
    width: SIZES.avatar - 25,
    height: SIZES.avatar - 25,
    tintColor: COLORS.white,
  }
});
