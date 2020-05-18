import React, { Component } from "react";
import Gwon from "../../img/gwon.jpg";
import "./AsideOne.scss";

class AsideOne extends Component {
  render() {
    return (
      <aside className="my_border AsideOne">
        <div className="asideRecommand">
          <div className="asideRecommand_title">스토리</div>
          <div className="asideRecommand_viewAll">모두 보기</div>
        </div>
        <div className="asidePersonContainerOne">
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile gradient-border">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="time">졸려주금</span>
              </div>
            </div>
          </div>
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile gradient-border">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="time">졸려주금</span>
              </div>
            </div>
          </div>
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile gradient-border">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="time">졸려주금</span>
              </div>
            </div>
          </div>
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile gradient-border">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="time">졸려주금</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default AsideOne;
