
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline'; // For applying theme to body
import { Button } from '@mui/material';

function MyTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{
          backgroundColor: theme.palette.background.paper, // Dark/Light mode background
          borderBottom: `1px solid ${theme.palette.divider}`, // Dark/Light mode divider
        }}
      >
        <Tab label="Tab 1" sx={{color: theme.palette.text.primary}} />
        <Tab label="Tab 2" sx={{color: theme.palette.text.primary}} />
        <Tab label="Tab 3" sx={{color: theme.palette.text.primary}} />
      </Tabs>
      <Box sx={{ padding: theme.spacing(2), color: theme.palette.text.primary }}>
        {/* Tab content based on value */}
        {value === 0 && <div>Content for Tab 1</div>}
        {value === 1 && <div>Content for Tab 2</div>}
        {value === 2 && <div>Content for Tab 3</div>}
      </Box>
    </Box>
  );
}

function ThemeSwitcherPage() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Light mode
                primary: {
                  main: '#1976d2',
                },
                background: {
                  default: '#fff',
                  paper: '#f5f5f5',
                },
                text: {
                  primary: '#000',
                },
              }
            : {
                // Dark mode
                primary: {
                  main: '#90caf9',
                },
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
                text: {
                  primary: '#fff',
                },
              }),
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Button onClick={colorMode.toggleColorMode}>Toggle Dark Mode</Button>
      <MyTabs />
    </ThemeProvider>
  );
}



export default ThemeSwitcherPage