import { images } from "assets";
import { useEffect, useState } from "react";
import axios from "axios";
import "./login.scss";
import { API } from "api";
import Cookie from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

interface IAuthLogin {
  accessToken: string;
  refreshToken: string;
}
export function LoginForm() {
  const token = Cookie.get("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const hanleLogin = async () => {
    axios
      .post(API.Login, { email, password })
      .then((data: any) => {
        if (data?.data?.accessToken) {
          Cookie.set("token", data?.data.accessToken, {
            expires: 10000,
          });
          navigate("/chat");
        }
      })
      .catch((err) => alert("Email hoặc mật khẩu không chính xác"));
  };
  useEffect(() => {
    console.log('login')
    axios
      .get(API.MyProfile, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        localStorage.setItem("profile", JSON.stringify(result?.data));
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <section>
      <div className="leaves">
        <div className="set">
          <div>
            <img src={images.leaf_01} alt="" />
          </div>
          <div>
            <img src={images.leaf_02} alt="" />
          </div>
          <div>
            <img src={images.leaf_03} alt="" />
          </div>
          <div>
            <img src={images.leaf_04} alt="" />
          </div>
        </div>
      </div>
      <img src={images.bg} className="bg" />
      <img src={images.girl} className="girl" />
      <img src={images.trees} className="trees" />
      <div className="login">
        <h2>Sign In</h2>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="inputBox">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" id="btn" onClick={hanleLogin} />
        </div>
      </div>
      <div className="group">
        <a href="#">Forgot Password</a>
        <a href="#">Sign up</a>
      </div>
    </section>
  );
}
