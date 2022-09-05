import {StyleSheet} from 'react-native';
import {COLORS, SIZES, SPACING} from '../config/themes';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal:"1%"
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.h1,
    marginHorizontal: SPACING.l,
    marginVertical: SPACING.xl,
    fontWeight:"bold"
  },
});
