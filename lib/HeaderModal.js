import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import SearchGlass from '../lib/assets/images/search-glass.svg';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: hp(7.39),
    borderColor: 'rgb(203, 207, 218)',
    marginHorizontal: wp(6.4),
    borderRadius: hp(0.74),
    marginBottom: hp(1),
  },
});
export const HeaderModal = props => {
  const {
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    onClose,
    renderFilter,
    heading,
    headingText
  } = props;
  return React.createElement(
    View,
    {},
    withCloseButton &&
      React.createElement(closeButtonImage, {
        style: closeButtonStyle,
        imageStyle: closeButtonImageStyle,
        onPress: onClose,
        width: hp(3.45),
        height: hp(3.45),
      }),
    <Text style={heading}>{headingText}</Text>,
    React.createElement(
      View,
      {style: styles.container},

      withFilter && renderFilter(props),
      <SearchGlass width={hp(4.19)} height={hp(4.19)}/>,
    ),
  );
};
HeaderModal.defaultProps = {
  withCloseButton: true,
};
//# sourceMappingURL=HeaderModal.js.map
