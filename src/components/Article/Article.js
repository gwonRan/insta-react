import React, { Component } from "react";
import Gwon from "../../img/gwon.jpg";
import Heart from "../../img/heart.png";
import Bookmark from "../../img/bookmark.png";
import Share from "../../img/share.png";
import Comment from "../../img/comment.png";
import Pringco from "../../img/pringco.jpg";
import "./Article.scss";
import Litag from "../../components/Litag/Litag";

class Article extends Component {
  constructor(){
    super();

    this.state = {
      inputVal: "", //타입을 정의
      liArr: [],
    }
  }
  
  inputChange = e => {
    this.setState({
      inputVal: e.target.value,
    });
  }

  //함수의 위치 가운데
  inputClick = (e) => {
    if(this.state.inputVal.length>0){
      let Arr = this.state.liArr //왜 중괄호 안써?
      Arr.push(this.state.inputVal);

      this.setState({
        liArr: Arr,
        inputVal: "", //value를 안써지면 input이 가지고 있는 기본값을 정의해줘야한다.
      });


      console.log(this.state.liArr);
    } 
  }

  render() {
    const comment = this.state.liArr.map((m, idx) => {
      return <Litag text={m} key={idx} />
    });

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
              {comment}
            </ul>
          </div>
          <div className="timeContainer">
            <span className="time">18시간 전</span>
          </div>
          <div className="feedAddComment">
            <input
              value= {this.state.inputVal} //연결시키자
              type="text"
              placeholder="댓글 달기..."
              className="inputBox"
              onChange={this.inputChange}
            />
            <button type="submit" className="submitBox" onClick={this.inputClick}>
              게시
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Article;
