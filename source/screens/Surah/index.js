import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import QuranJson from '../../config/quranSurahName/quran.json';
import {Header} from '../../components';
const Surah = props => {
  const {route} = props;
  return (
    <View style={[globalStyle.container, {alignItems: 'center'}]}>
      <Header
        name={QuranJson.data.surahs[route.params.id].name}
        style={{height: SIZES.height * 0.2}}
        resizeMode="stretch"
        back
      />

      <FlatList
        data={QuranJson.data.surahs[route.params.id].ayahs}
        style={styles.FlatListStyle}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        keyExtractor={item => item.number.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ImageBackground
            style={styles.bgContainer}
            resizeMode="cover"
            source={require('../../assets/imgs/bg.jpg')}>
            <View style={styles.subContainerSurah}>
              <ImageBackground
                source={require('../../assets/imgs/verses.png')}
                style={styles.bgNum}
                resizeMode="contain">
                <Text
                  style={[
                    styles.TitleSurah,
                    {fontWeight: '400', fontSize: SIZES.h4},
                  ]}>
                  {item.numberInSurah}
                </Text>
              </ImageBackground>
              <View
                style={{
                  width: '82%',
                  overflow: 'scroll',
                }}>
                <Text
                  style={[styles.TitleSurah, {textAlign: 'auto',letterSpacing:3}]}
                  selectable>
                  {item.text}
                </Text>
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Surah;

const styles = StyleSheet.create({
  surahContainer: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.Sradius,
    padding: SPACING.s,
  },
  subContainerSurah: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: SIZES.Sradius - 5,
    padding: SPACING.vS,
  },
  TitleSurah: {
    color: COLORS.black,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
  FlatListStyle: {
    width: '98%',
    height: '100%',
    direction: 'rtl',
  },
  bgNum: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.055,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.s,
  },
  bgContainer: {
    width: '100%',
    marginBottom: SPACING.s,
    borderRadius: SIZES.Sradius,
  },
});
