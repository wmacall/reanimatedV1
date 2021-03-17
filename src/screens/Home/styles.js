import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerExamples: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.05,
  },
  icon: {
    width: width * 0.12,
    height: height * 0.09,
    alignSelf: 'center',
  },
});
