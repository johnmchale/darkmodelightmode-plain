import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Switch from '@mui/material/Switch';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {darkMode ? <h3> Dark Mode</h3> : <h3>Light Mode</h3>}
      <Switch checked={darkMode} onChange={handleDarkModeChange} />
    </ThemeProvider>
  );
};

export default App;
