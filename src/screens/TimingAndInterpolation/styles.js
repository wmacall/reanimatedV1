import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  squareToCircle: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  textButton: {
    color: COLORS.WHITE,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
