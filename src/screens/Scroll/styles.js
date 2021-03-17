import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  containerHeader: {
    zIndex: 1,
  },
  containerCover: {
    height: height * 0.51,
    backgroundColor: COLORS.PRIMARY,
    position: 'absolute',
    width,
  },
  coverImage: {
    height: height * 0.51,
    width,
  },
  spacer: {
    paddingTop: height * 0.42,
  },
  containerContent: {
    width: '100%',
    height: height * 1.8,
    backgroundColor: COLORS.PRIMARY,
  },
  textTitle: {
    color: '#FFA000',
    textAlign: 'center',
    marginTop: height * 0.04,
    fontSize: height * 0.024,
  },
  body: {
    color: COLORS.WHITE,
    fontSize: height * 0.02,
    marginTop: height * 0.03,
    marginHorizontal: height * 0.04,
    textAlign: 'justify',
  },
  imageZoom: {
    marginVertical: height * 0.03,
    height: height * 0.4,
    width: width * 0.8,
    alignSelf: 'center',
    borderRadius: width * 0.03,
  },
});
