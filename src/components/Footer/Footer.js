import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul>
          <li>소개•</li>
          <li>도움말•</li>
          <li>홍보센터•</li>
          <li>API•</li>
          <li>채용 정보•</li>
          <li>개인정보처리방침•</li>
          <li>약관•</li>
          <li>위치•</li>
          <li>인기 계정•</li>
          <li>해시태그•</li>
          <li>언어•</li>
        </ul>
        <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
      </div>
    );
  }
}

export default Footer;
