import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './shared/Header/Header'
import Home from './pages/Home/Home'
import { createTheme, ThemeProvider } from '@mui/material'
import { blue, red } from '@mui/material/colors'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const theme = createTheme({
    palette: {
      primary: {
        main: blue[700],
      },
      secondary: {
        main: red[600],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header tab={selectedTab} setTab={tab => setSelectedTab(tab)} />
      <Home tab={selectedTab} />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
