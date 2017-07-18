import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Checkbox as MaterialUiCheckbox } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class Checkbox extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiCheckbox {...this.props} /></ThemeProvider>;
  }
}
