import React, { Component } from "react";
import user from "./asset/avatar.jpg";

class Header extends Component {
  showStatus = () => {
    this.props.show();
  };

  render() {
    return (
      <div className="header">
        <div className="find">
          <i className="demo-icon icon-search">&#xe806;</i>
          <input type="text" placeholder="Find a user, team, meeeting..." />
        </div>
        <div className="user">
          <span className="tombol" href="#">
            <i className="demo-icon icon-paper-plane">&#xe80b;</i> Invite
          </span>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2019%2F04%2Fmark-zuckerberg-time-100-2019.jpg%3Fquality%3D85%26zoom%3D2&f=1&nofb=1" alt="user" />
          
        </div>
      </div>
    );
  }
}

export default Header;
