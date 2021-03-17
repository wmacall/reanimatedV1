import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textNumber: {
    fontSize: 72,
    lineHeight: 90,
    letterSpacing: -0.55,
    textAlign: 'center',
    width: '100%',
    color: COLORS.WHITE,
  },
  containerText: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  percentageChar: {
    right: 50,
    fontSize: 21,
    lineHeight: 26,
    letterSpacing: -0.16,
    color: COLORS.WHITE,
  },
  button: {
    backgroundColor: COLORS.TAB_BAR,
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 200,
    width: 220,
    alignSelf: 'center',
    borderRadius: 20,
  },
});
