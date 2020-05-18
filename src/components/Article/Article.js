import React, { Component } from "react";
import Gwon from "../../img/gwon.jpg";
import Heart from "../../img/heart.png";
import Bookmark from "../../img/bookmark.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";
import Pringco from "../../img/pringco.jpg";
import "./Article.scss";

class Article extends Component {
  render() {
    return (
      <div className="Article">
        <article className="my_border">
          <div className="feedProfile">
            <div className="feedProfile_mine">
              <div className="myProfile">
                <img src={Gwon} alt="" className="" />
              </div>
              <div className="myprofileName">
                <span className="font-bold nameFontSize">gwonRan</span>
              </div>
            </div>
            <div className="feedProfile_other">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="yourfeed_img">
            <img src={Pringco} alt="" />
          </div>
          <div className="feedAction">
            <div className="feedActionLeft">
              <div className="feedActionLeftImg">
                <button className="heartBtn bigHeart">
                  <img src={Heart} alt="" className="heartImg" />
                </button>
              </div>
              <div className="feedActionLeftImg">
                <button className="heartBtn">
                  <img src={Comment} alt="" />
                </button>
              </div>
              <div className="feedActionLeftImg">
                <button className="heartBtn">
                  <img src={Share} alt="" />
                </button>
              </div>
            </div>
            <div className="feedActionLeft">
              <div className="feedActionLeftImg">
                <button className="bookmarkBtn">
                  <img src={Bookmark} alt="" className="bookmarkImg" />
                </button>
              </div>
            </div>
          </div>
          <div className="feedLike">
            <div className="feedLikeImg">
              <img src={Gwon} alt="" />
            </div>
            <span className="font-bold">gwonRan</span>님 외{" "}
            <span className="font-bold">20명</span>이 좋아합니다
          </div>
          <div className="feedComment">
            <div className="feedCommentMore">
              <span className="font-bold">pringco</span>
              <span>오늘의 신상</span>
            </div>
            <ul className="feedCommentOther">
              <li className="feedList">
                <div className="feedCommentOther_column">
                  <span className="font-bold">pringco</span>
                  <span className="inputVal">오늘의 신상</span>
                </div>
                <div className="feedCommentOther_icon">
                  <button className="heartButton ">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </li>
              <li className="feedList">
                <div className="feedCommentOther_column">
                  <span className="font-bold">pringco</span>
                  <span className="inputVal">오늘의 신상</span>
                </div>
                <div className="feedCommentOther_icon">
                  <button className="heartButton">
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="timeContainer">
            <span className="time">18시간 전</span>
          </div>
          <div className="feedAddComment">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="inputBox"
            />
            <button type="submit" className="submitBox">
              게시
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Article;
