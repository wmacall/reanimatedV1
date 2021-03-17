import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  contentContainerStyle: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: COLORS.SECONDARY,
    width: width * 0.5,
    height: height * 0.2,
    borderRadius: width * 0.02,
    marginBottom: height * 0.02,
  },
});
