const PINK = '#FF7575';
const DARK_PINK = '#CC5D5D';
const LIGHT_PINK = '#FFC0C0';

const theme = {
  palette: {
    primaryColor: PINK,
    accentColor: PINK,
    secondaryColor: DARK_PINK,
    lightColor: LIGHT_PINK,
    primaryTextColor: 'black',
    alternateTextColor: 'white'
  },
  typography: {
    fontSize: {
      display: 25
    },
    subheading: {
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: 24
    }
  },
  spacing: {
    miniActionButtonSize: 42
  },
  toolbar: {
    container: {
      height: 50
    },
  }
};

export default theme;
