import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';
import { useTheme } from './CountryTheme';
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '86%',
        paddingHorizontal:10,
        ...Platform.select({
            web: {
                outlineWidth: 0,
                outlineColor: 'transparent',
                outlineOffset: 0
            }
        })
    }
});
export const CountryFilter = (props) => {
    const { filterPlaceholderTextColor, fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    return (React.createElement(TextInput, Object.assign({ testID: "text-input-country-filter", autoCorrect: false, placeholderTextColor: filterPlaceholderTextColor, style: [
            styles.input,
            { fontFamily, fontSize, color: onBackgroundTextColor }
        ] }, props)));
};
CountryFilter.defaultProps = {
    autoFocus: false,
    placeholder: 'Search by country name'
};
//# sourceMappingURL=CountryFilter.js.map