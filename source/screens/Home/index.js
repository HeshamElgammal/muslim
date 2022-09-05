import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';
import azkarAm from '../../config/Azkar/azkarAm.json';
import azkarBm from '../../config/Azkar/azkarBm.json';
import azkarAlsalh from '../../config/Azkar/azkarAlsalh.json';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyle.container, {backgroundColor: COLORS.lightGray}]}>
      <Header name="مسلم" />
      <ScrollView style={{flexGrow: 1}}>
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
            <Text style={[globalStyle.title, {color: COLORS.white,textAlign:"center",marginVertical:SPACING.m-5}]}>
              القرآن الكريم
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Item}
            onPress={() => {
              navigation.navigate('Azkar', {
                name: azkarAm.title,
                azkar: azkarAm.content,
              });
            }}>
            <Image
              source={require('../../assets/imgs/hand.png')}
              resizeMode="cover"
              style={[styles.img,{tintColor:COLORS.white,}]}
            />
            <Text style={[globalStyle.title, {color: COLORS.white,textAlign:"center",marginVertical:SPACING.m-5}]}>
              {azkarAm.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Item}
            onPress={() => {
              navigation.navigate('Azkar', {
                name: azkarBm.title,
                azkar: azkarBm.content,
              });
            }}>
            <Image
              source={require('../../assets/imgs/hand.png')}
              resizeMode="cover"
              style={[styles.img,{tintColor:COLORS.white,}]}
            />
            <Text style={[globalStyle.title, {color: COLORS.white,textAlign:"center",marginVertical:SPACING.m-5}]}>
              {azkarBm.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Item}
            onPress={() => {
              navigation.navigate('Azkar', {
                name: azkarAlsalh.title,
                azkar: azkarAlsalh.content,
              });
            }}>
            <Image
              source={require('../../assets/imgs/hand.png')}
              resizeMode="cover"
              style={[styles.img,{tintColor:COLORS.white,}]}
            />
            <Text style={[globalStyle.title, {color: COLORS.white,textAlign:"center",marginVertical:SPACING.m-5}]}>
              {azkarAlsalh.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Item}
            onPress={() => {
              navigation.navigate('Masbaha');
            }}>
            <Image
              source={require('../../assets/imgs/sebha.png')}
              resizeMode="cover"
              style={styles.img}
            />
            <Text style={[globalStyle.title, {color: COLORS.white,textAlign:"center",marginVertical:SPACING.m-5}]}>
              المسبحة
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: SPACING.vS,
    // backgroundColor:COLORS.white
  },
  Item: {
    width: '45%',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.Sradius,
    height: SIZES.height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.m,
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
