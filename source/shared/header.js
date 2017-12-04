import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Otto NBA"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <div style={container}>
            <RaisedButton label="Close" onClick={this.handleToggle} />
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
              <div style={network}>
                <a href="https://twitter.com/rockersgz" target="_blank">
                  <i className="icon icon ion-social-twitter"></i>
                </a>
              </div>
              <div style={network}>
                <a href="https://simongonzalezblog.wordpress.com/" target="_blank">
                  <i className="icon icon ion-planet"></i>
                </a>
              </div>
            </div>

            <h4>Many thanks to:</h4>
              <a href="https://platzi.com/" target="_blank">
                <div style={references}>
                  <div style={iconRef}><i style={icon} className="icon icon ion-android-happy"></i></div>
                  <div style={nameRef}>Platzi</div>
                </div>
              </a>
              <a href="https://www.mysportsfeeds.com/data-feeds/" target="_blank">
                <div style={references}>  
                  <div style={iconRef}><i style={icon} className="icon icon ion-ios-gear"></i></div>
                  <div style={nameRef}>My Sports Feed API</div>
                </div>
              </a>
              <a href="https://www.sporcle.com/user/lfrench30/" target="_blank">
                <div style={references}>  
                  <div style={iconRef}><i style={icon} className="icon icon ion-ios-eye"></i></div>
                  <div style={nameRef}>Logo teams by lfrench30 at sporcle</div>
                </div>
              </a>
          </div>
        </Drawer>
      </div>
    );
  }
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

const references = {
  marginBottom: '10px'
}

const iconRef = {
  width: '23px',
  display: 'inline-block',
  verticalAlign: 'top'
}

const icon = {
  fontSize: '1.5em'
}

const nameRef = {
  display: 'inline-block',
  width: '170px',
  whiteSpace: 'pre-wrap',
  marginleft: '4px',
  lineheight: '25px'
}


export default Header;
