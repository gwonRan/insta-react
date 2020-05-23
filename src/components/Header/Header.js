import React, { Component } from "react";
import "./Header.scss";
import Logo from "../../img/logo_text.png";
import SerachIcon from "../../img/search-solid.svg";
import Explore from "../../img/explore.png";
import Heart from "../../img/heart.png";
import Gwon from "../../img/gwon.jpg";

class Header extends Component {
  render() {
    return (
      <div className="navContainer my_border_bottom">
        <nav className="nav">
          <div className="navLogo">
            <div className="navLogoText">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="navSearch">
            <img src={SerachIcon} alt="" className="navSearchIcon" />
            <input type="text" placeholder="검색" className="navInput" />
          </div>
          <div className="navCate">
            <ul>
              <li>
                <div className="profileImg">
                  <img src={Explore} alt="" />
                </div>
              </li>
              <li>
                <div className="profileImg">
                  <img src={Heart} alt="" />
                </div>
              </li>
              <li>
                <div className="profileImg">
                  <img src={Gwon} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
