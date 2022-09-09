import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalStyle';
import {COLORS, SIZES, SPACING} from '../../config/themes';
import {Header} from '../../components';
const TestSurah = props => {
  const {route} = props;
  return (
    <View style={[globalStyle.container, {backgroundColor: COLORS.lightGray}]}>
      <Header
        name={route.params.surah.name}
        style={{height: SIZES.height * 0.13, marginBottom: 1}}
        resizeMode="stretch"
        back
      />
      <ImageBackground
        imageStyle={{opacity: 0.5}}
        style={{width: '100%', height: SIZES.height * 0.87}}
        source={require('../../assets/imgs/bgq.jpg')}>
        <ScrollView style={{flexGrow: 1, opacity: 10}}>
          <View style={styles.containerVerses}>
            <Text style={styles.title}>
              {route.params.surah.ayahs.map((item, index) => (
                <>
                  <Text style={[styles.title, {textAlignVertical: 'center'}]}>
                    {item.text}
                    
                  </Text>
                  <Text
                      style={{
                        fontSize: SIZES.h4,
                        color: COLORS.primary,
                      }}>
                      {} ({index + 1}) {}
                    </Text>
                </>
              ))}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default TestSurah;

const styles = StyleSheet.create({
  containerVerses: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.title - 5,
    letterSpacing: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.s,
    alignItems: 'center',
  },
  bgNum: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: SPACING.m,
  },
  TitleSurah: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
});
