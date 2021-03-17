import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.PRIMARY,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    backgroundColor: COLORS.PRIMARY,
    width: '100%',
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 14,
    marginLeft: 24,
  },
  image: {
    width: width * 0.09,
    height: height * 0.09,
    marginLeft: 20,
  },
});
