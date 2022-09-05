import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {Header} from '../../components';
const Azkar = props => {
  const {route} = props;
  return (
    <View style={[globalStyle.container, {alignItems: 'center'}]}>
      <Header
        name={route.params.name}
        style={{height: SIZES.height * 0.2}}
        resizeMode="stretch"
        back
      />

      <FlatList
        data={route.params.azkar}
        style={styles.FlatListStyle}  
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <ImageBackground
            style={styles.bgContainer}
            resizeMode="cover"
            source={require('../../assets/imgs/bg.jpg')}>
            <View style={styles.subContainerSurah}>
              <View
                style={{
                  width: '100%',

                  alignItems: 'flex-start',
                }}>
                <Text
                  style={[
                    styles.TitleSurah,
                    {textAlign: 'right', letterSpacing: 3},
                  ]}
                  selectable>
                  {item.zekr}
                </Text>
              </View>
              <Text
                style={[
                  styles.TitleSurah,
                  {textAlign: 'right', fontWeight: '400', fontSize: SIZES.h3},
                ]}>
                - {item.bless}
              </Text>
              <Text
                style={[
                  styles.TitleSurah,
                  {fontWeight: '400', fontSize: SIZES.h4 + 3},
                ]}>
                عدد مرات التكرار : {item.repeat}
              </Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Azkar;

const styles = StyleSheet.create({
  surahContainer: {
    width: '100%',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.Sradius,
    padding: SPACING.s,
  },
  subContainerSurah: {
    // flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
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
    width: '95%',
    height: '100%',
    direction: 'rtl',
    alignSelf: 'center',
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
