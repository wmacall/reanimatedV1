import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height * 0.1,
    backgroundColor: COLORS.SECONDARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderTopStartRadius: width * 0.05,
    // borderTopEndRadius: width * 0.05,
  },
  containerOption: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOption: {
    color: COLORS.WHITE,
    fontSize: height * 0.018,
  },
  indicator: {
    alignSelf: 'center',
    width: width * 0.15,
    height: height * 0.005,
    backgroundColor: COLORS.WHITE,
    top: 0,
    position: 'absolute',
    borderRadius: width * 0.005,
  },
});
