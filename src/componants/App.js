import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme';
import MainPanel from './MainPanel';

// Theme provided to main panel as part of material ui design kit
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPanel/>
    </ThemeProvider>
  );
}

export default App;
