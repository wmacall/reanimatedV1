import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  button: {
    backgroundColor: 'rgb(231, 112, 114)',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonSubmit: {
    backgroundColor: '#00796B',
    marginTop: width * 0.055,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  textButton: {
    color: COLORS.WHITE,
    fontSize: height * 0.02,
  },
  arrow: {
    position: 'absolute',
  },
});
