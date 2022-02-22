import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <>
      <AppBar position="static">
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
