import React, { Component } from "react";
import "./Join.scss";
import { withRouter } from "react-router-dom";
import Logo from "../../img/logo_text.png";
import DownApple from "../../img/download_apple.png";
import DownPlay from "../../img/download_play.png";

class Join extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      mail: "",
      buttonChange: "JoinBtn",
    };
  }

  idChange = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  pwChange = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  mailIuput = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  goLogin = () => {
    this.props.history.push("/")
  }

  roadMain = () => {
    fetch('http://localhost:8000/login/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name': this.state.id,
        'password': this.state.pw,
        'email': ''
      }) 
    })
    .then(response => response.json())
    .then(response => {
      if (response.token) {
        localStorage.setItem('wtw-token', response.token);
      }
    })
  }

  render() {
    return (
      <div className="Join">
        <div className="login_page">
          <div className="login my_border">
            <div className="login_logo_box">
              <img src={Logo} alt="" />
            </div>
            <div className="snsLogin">
                <span className="joinText">친구들의 사진과 동영상을 보려면 가입하세요.</span>
                <button className="login_forget_box-facebook">
                    <i className="fab fa-facebook-square"></i>
                    <span>Facebook으로 로그인</span>
                </button>
            </div>
            <div className="login_border_box">
              <div className="login_border_box-grayline"></div>
              <span>또는</span>
              <div className="login_border_box-grayline"></div>
            </div>
            <div className="login_input_box">
              <div className="login_box_input" onKeyUp={this.loginKeyup}>
                <input
                  type="text"
                  placeholder="당신의 아이디"
                  className="login_input_box my_border"
                  id="userId"
                  onChange={this.idChange}
                />
                <input
                  type="password"
                  placeholder="사용자 이름"
                  className="login_input_box my_border"
                  id="userPw"
                  onChange={this.pwChange}
                />
                <input
                  type="text"
                  placeholder="휴대폰 번호 또는 이메일 주소"
                  className="login_input_box my_border"
                  id="email"
                  onChange={this.mailIuput}
                />
              </div>
              <div className="Join_box_button">
                <button
                  type="button"
                  className={this.state.buttonChange}
                  onClick={this.roadMain}
                >
                  가입
                </button>
              </div>
            </div>
            
            <div className="policy_box">
              <span>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</span>
            </div>
          </div>
          <div className="join my_border">
            <span>계정이 있으신가요?</span>
            <span onClick={this.goLogin}>로그인</span>
          </div>
          <div className="download">
            <span>앱을 다운로드 하세요.</span>
            <div className="download_store">
              <div className="download_store_img">
                <img src={DownApple} alt="" />
              </div>
              <div className="download_store_img">
                <img src={DownPlay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Join);
