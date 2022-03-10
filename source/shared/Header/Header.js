import React, { useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import { common, orange } from '@mui/material/colors'
import styles from './Header.css'
import { Box } from '@mui/system'
import useEventListener from '../../hooks/useEventListener'

function Header({ tab, setTab }) {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const tabsRef = useRef(null)
  const closeButtonMenuRef = useRef(null)

  useEventListener(menuButtonRef, 'click', () => handleToggle())
  useEventListener(tabsRef, 'click', e => handleChange(e.target.dataset.value))
  useEventListener(closeButtonMenuRef, 'click', () => handleToggle())

  const handleToggle = () => setOpen(!open)
  
  const handleChange = value => setTab(parseInt(value))

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    }
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            ref={menuButtonRef}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OTTO NBA
          </Typography>
        </Toolbar>
        <Tabs
          value={tab}
          ref={tabsRef}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label="Scoreboards" data-value="0" {...a11yProps(0)} />
          <Tab label="Standings" data-value="1" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Drawer open={open} onClose={handleToggle}>
        <div className={styles.container}>
          <Box sx={{ textAlign: 'right' }}>
            <IconButton onClick={handleToggle} ref={closeButtonMenuRef}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant='h5' sx={{ mb: 5 }}>Information</Typography>
          <div className={styles.textCenter}>
            <SportsBasketballIcon sx={{ fontSize: 40, color: orange[500] }} />
            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>Developed by</Typography>
            <Typography>Simon Gonzalez</Typography>
          </div>
          <div className={styles.myNetwork}>
            <div className={styles.network}>
              <a href="https://github.com/sysrock18/otto-nba" target="_blank">
                <GitHubIcon sx={{ color: common.black }} />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
