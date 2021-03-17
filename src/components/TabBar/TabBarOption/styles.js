import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  containerOption: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: width * 0.05,
    width: width * 0.05,
    borderRadius: (width * 0.05) / 2,
    backgroundColor: '#B6BEC9',
    marginBottom: height * 0.005,
  },
  textOption: {
    color: '#B6BEC9',
    fontSize: height * 0.018,
  },
});
