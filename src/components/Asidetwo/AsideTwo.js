import React, { Component } from "react";
import Gwon from "../../img/gwon.jpg";
import "./AsideTwo.scss";

class AsideTwo extends Component {
  render() {
    return (
      <aside className="my_border AsideTwo">
        <div className="asideRecommand">
          <div className="asideRecommand_title">회원님을 위한 추천</div>
          <div className="asideRecommand_viewAll">모두 보기</div>
        </div>
        <div className="asidePersonContainer">
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="etcInfo">졸려주금</span>
              </div>
            </div>
            <div className="asidePersonFollow">팔로우</div>
          </div>
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile gradient-border">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="etcInfo">졸려주금</span>
              </div>
            </div>
            <div className="asidePersonFollow">팔로우</div>
          </div>
          <div className="asidePerson">
            <div className="asidePersonProfile">
              <div className="myProfile">
                <img src={Gwon} alt="" />
              </div>
              <div className="myprofileName">
                <span className="nameFontSize">gwonRan</span>
                <span className="etcInfo">졸려주금</span>
              </div>
            </div>
            <div className="asidePersonFollow">팔로우</div>
          </div>
        </div>
      </aside>
    );
  }
}

export default AsideTwo;
