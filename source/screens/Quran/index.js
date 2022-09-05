import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {QuranSurahName} from '../../config/quranSurahName';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components';

const Quran = () => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyle.container, {alignItems: 'center'}]}>
      <Header name="القرآن الكريم" back />
      <FlatList
        data={QuranSurahName}
        style={{width: '95%'}}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ImageBackground
            style={styles.bgItem}
            resizeMode="cover"
            source={require('../../assets/imgs/bg.jpg')}>
            <TouchableOpacity
              style={styles.surahContainer}
              onPress={() => {
                navigation.navigate('Surah', {id: index});
              }}>
              <View style={styles.subContainerSurah}>
                <Text style={styles.TitleSurah}>{item.name}</Text>

                <ImageBackground
                  source={require('../../assets/imgs/verses.png')}
                  style={styles.bgNum}
                  resizeMode="contain">
                  <Text
                    style={[
                      styles.TitleSurah,
                      {fontWeight: '400', fontSize: SIZES.h4},
                    ]}>
                    {item.id}
                  </Text>
                </ImageBackground>
              </View>
              <View
                style={[
                  styles.subContainerSurah,
                  {
                    marginHorizontal: SIZES.width * 0.04,
                    marginTop: SPACING.m,
                    alignSelf: 'flex-start',
                  },
                ]}>
                <Text
                  style={[
                    styles.TitleSurah,
                    {fontSize: SIZES.h4, fontWeight: '400'},
                  ]}>
                  {item.ayahs}
                </Text>
                <Text
                  style={[
                    styles.TitleSurah,
                    {fontSize: SIZES.h4, fontWeight: '400'},
                  ]}>
                  عدد الآيات :
                </Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  surahContainer: {
    width: '100%',
    height: SIZES.height * 0.12,
    borderRadius: SIZES.Sradius,
    padding: SPACING.s,
  },
  subContainerSurah: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleSurah: {
    color: COLORS.black,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
  bgItem:{
    width: '100%',
    height: SIZES.height * 0.12,
    backgroundColor: COLORS.gray,
    marginBottom: SPACING.s,
    borderRadius: SIZES.Sradius,
  },
  bgNum:{
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.055,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.vS,

  }
});
