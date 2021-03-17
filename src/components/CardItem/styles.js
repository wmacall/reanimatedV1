import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  cardExample: {
    width: width * 0.45,
    height: height * 0.18,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: width * 0.03,
    margin: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCard: {
    color: COLORS.TEXT_COLOR,
    marginTop: height * 0.008,
    fontSize: height * 0.02,
    textAlign: 'center',
    paddingHorizontal: width * 0.04,
  },
});
