import { createMuiTheme } from '@material-ui/core/styles';

const fontSize = 16;

export const theme = createMuiTheme({
  typography: {
    fontSize,
    h6: {
      fontSize: fontSize * 1.5,
    },
    display4: {
      fontSize,
    },
    display3: {
      fontSize,
    },
    display2: {
      fontSize,
    },
    display1: {
      fontSize,
    },
    headline: {
      fontSize,
    },
    title: {
      fontSize,
    },
    subheading: {
      fontSize,
    },
    body2: {
      fontSize,
    },
    body1: {
      fontSize,
    },
    caption: {
      fontSize,
    },
    button: {
      fontSize,
    },
  },
  overrides: {
    MuiTableCell: {
      body: {
        fontSize: 16
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '100%',
      }
    }
  },
  palette: {
    primary: {
      main: "#CB7932",
    },
    secondary: {
      main: "#1B495D",
      light: "#808080",
    },
    success: {
      main: '#4caf50',
    },
    // action: {
    //   disabledBackground: '#4caf50',
    //   disabled: '#FFF'
    // }
  },
  status: {
    danger: 'orange',
  },
});

