import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Loading, Notify } from './view/components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import AppRoutes from './Routes';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    }
  },
  props: {
    MuiTextField: {
      variant: 'filled',
      fullWidth: true
    },
    MuiSelect: {
      variant: 'filled',
      fullWidth: true
    }
  }
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Loading />
      <Notify />
      <AppRoutes />
    </ThemeProvider>
  </Provider>
)

export default App;
