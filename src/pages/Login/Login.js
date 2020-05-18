import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";
import Logo from "../../img/logo_text.png";
import DownApple from "../../img/download_apple.png";
import DownPlay from "../../img/download_play.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      buttonChange: "loginBtn",
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

  loginKeyup = () => {
    if (
      this.state.id.length > 5 &&
      this.state.id.includes("@") &&
      this.state.pw.length > 5
    ) {
      this.setState({
        buttonChange: "loginAftBtn",
      });
    } else {
      this.setState({
        buttonChange: "loginBtn",
      });
    }
  };

  pageMain = () => {
    if (this.state.buttonChange === "loginAftBtn") {
      this.props.history.push("/main");
    } else {
      alert("아이디와 비밀번호를 확인해주세요.");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="login_page">
          <div className="login my_border">
            <div className="login_logo_box">
              <img src={Logo} alt="" />
            </div>
            <div className="login_input_box">
              <div className="login_box_input" onKeyUp={this.loginKeyup}>
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  className="login_input_box my_border"
                  id="userId"
                  onChange={this.idChange}
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="login_input_box my_border"
                  id="userPw"
                  onChange={this.pwChange}
                />
              </div>
              <div className="login_box_button">
                <button
                  type="button"
                  className={this.state.buttonChange}
                  onClick={this.pageMain}
                >
                  로그인
                </button>
              </div>
            </div>
            <div className="login_border_box">
              <div className="login_border_box-grayline"></div>
              <span>또는</span>
              <div className="login_border_box-grayline"></div>
            </div>
            <div className="login_forget_box">
              <div className="login_forget_box-facebook">
                <i className="fab fa-facebook-square"></i>
                <span>Facebook으로 로그인</span>
              </div>
              <span>비밀번호를 잊으셨나요?</span>
            </div>
          </div>
          <div className="join my_border">
            <span>계정이 없으신가요?</span>
            <span>가입하기</span>
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

export default withRouter(Login);
