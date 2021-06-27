import React from 'react';
import { Text } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = (props) => {
    const { onBackgroundTextColor } = useTheme();
    Object.assign({}, { style: { color: onBackgroundTextColor } }, props.style)
    return (React.createElement(Text, Object.assign({}, props)));
};
//# sourceMappingURL=CountryText.js.map