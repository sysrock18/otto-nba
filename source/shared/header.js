import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Header({ tab, setTab }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  const handleChange = (_e, newValue) => {
    setTab(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Otto NBA
          </Typography>
        </Toolbar>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Scoreboards" {...a11yProps(0)} />
          <Tab label="Standings" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Drawer open={open} onClose={handleToggle}>
        <div style={container}>
          <button>Close</button>
          <h3 style={textCenter}>Information</h3>
          <div style={textCenter}>
            <div style={iconSimonStyle}><i className="icon icon ion-ios-basketball"></i></div>
            <div>Developed by</div>
            <div><b>Simon Gonzalez</b></div>
          </div>
          <div style={myNetwork}>
            <div style={network}>
              <a href="https://github.com/sysrock18/otto-nba" target="_blank">
                <i className="icon icon ion-social-github"></i>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

const container =  {
  padding: '15px'
}

const iconSimonStyle = {
  fontSize: '4.5em',
  color: '#FA8320'
}

 const textCenter = {
  textAlign: 'center',
}

const myNetwork = {
  textAlign: 'center',
  marginTop: '10px'
}

const network =  {
  display: 'inline-block',
  margin: '0px 4px',
  fontSize: '1.5em'
}

export default Header;
