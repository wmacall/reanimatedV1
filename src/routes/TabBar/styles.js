import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textScreen: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
});
