import React from "react";
import "../css/Login.css";

function Login(props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="HemoHero_logo" id="login_logo"></img>
      <p id="login_title">로그인</p>

      <div className="login_input">
        <img src={process.env.PUBLIC_URL + '/images/id_icon.png'} id="login_idicon"></img>
        <input type="text" id="login_id" placeholder="아이디"></input>
      </div>

      <div className="login_input">
        <img src={process.env.PUBLIC_URL + '/images/pw_icon.png'} id="login_pwicon"></img>
        <input type="password" id="login_pw" placeholder="비밀번호"></input>
      </div>

      <div className="login_save">
        <input type="checkbox" id="login_savecheck"></input>
        <p id="login_idsave">아이디 저장</p>
      </div>

      <input type="button" id="login_click" value="로그인"></input>

      <p id="login_join">회원가입</p>
    </div>
  );
}

export default Login;
