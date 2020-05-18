import React, { Component } from "react";
import "./Main.scss";
import Header from "../../components/Header/Header";
import Article from "../../components/Article/Article";
import AsideOne from "../../components/Asideone/AsideOne";
import AsideTwo from "../../components/Asidetwo/AsideTwo";
import Gwon from "../../img/gwon.jpg";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="mainfeed">
          <Article />
          <div className="feedRight">
            <div className="profileRight">
              <div className="myProfileRightImg">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="etcInfo">졸려주금</span>
              </div>
            </div>
            <AsideOne />
            <AsideTwo />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
