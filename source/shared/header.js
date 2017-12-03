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
          <div className={styles.container}>
            <RaisedButton label="Close" onClick={this.handleToggle} />
            <h3 className={styles.textCenter}>Information</h3>
            <div className={styles.textCenter}>
              <div className={styles.iconSimonStyle}><i className="icon icon ion-ios-basketball"></i></div>
              <div>Developed by</div>
              <div><b>Simon Gonzalez</b></div>
            </div>
            <div className={styles.myNetwork}>
              <div>
                <a href="https://github.com/sysrock18/otto-nba" target="_blank">
                  <i className="icon icon ion-social-github"></i>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/rockersgz" target="_blank">
                  <i className="icon icon ion-social-twitter"></i>
                </a>
              </div>
              <div>
                <a href="https://simongonzalezblog.wordpress.com/" target="_blank">
                  <i className="icon icon ion-planet"></i>
                </a>
              </div>
            </div>

            <h4>Many thanks to:</h4>
              <a href="https://platzi.com/" target="_blank">
                <div className={styles.references}>
                  <div className={styles.iconRef}><i className="icon icon ion-android-happy"></i></div>
                  <div className={styles.nameRef}>Platzi</div>
                </div>
              </a>
              <a href="https://www.mysportsfeeds.com/data-feeds/" target="_blank">
                <div className={styles.references}>  
                  <div className={styles.iconRef}><i className="icon icon ion-ios-gear"></i></div>
                  <div className={styles.nameRef}>My Sports Feed API</div>
                </div>
              </a>
              <a href="https://www.sporcle.com/user/lfrench30/" target="_blank">
                <div className={styles.references}>  
                  <div className={styles.iconRef}><i className="icon icon ion-ios-eye"></i></div>
                  <div className={styles.nameRef}>Logo teams by lfrench30 at sporcle</div>
                </div>
              </a>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
