import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Email from "./Email";
import Password from "./Password";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); // 폼의 유효성 상태

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const validateForm = () => {
    // 이메일과 패스워드의 유효성을 검사하여 폼의 유효성 상태를 업데이트
    setIsFormValid(validateEmail(email) && validatePassword(password));
  };

  const validateEmail = (inputValue) => {
    // 이메일 유효성 검사 로직
    if (inputValue) {
      return !(
        !inputValue.includes("@") ||
        !inputValue.includes(".", inputValue.indexOf("@")) ||
        inputValue.endsWith(".")
      );
    }
    return false;
  };

  const validatePassword = (inputValue) => {
    // 패스워드 유효성 검사 로직
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/; // 영문, 숫자 포함 6글자 이상
    return regex.test(inputValue);
  };

  const handleLogin = async () => {
    if (isFormValid) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/main");
      } catch (error) {
        console.log(error);
      }
      y;
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-screen-lg w-[400px] pt-[60px] pb-[160px] mx-auto">
      <div className="pb-[50px] text-center font-bold text-[35px]">
        Ozik
        <p className="text-center font-bold text-base text-gray-600">
          오직 나를 위한 시간
        </p>
      </div>
      <Email
        email={email}
        handleInput={handleEmailChange}
        validateForm={validateForm} // validateForm 함수 전달
      />
      <Password
        password={password}
        handleInput={handlePasswordChange}
        validateForm={validateForm} // validateForm 함수 전달
      />
      <div className="w-[340px] tracking-tighter mx-auto">
        <button
          type="submit"
          value="Submit Form"
          disabled={!isFormValid} // 폼이 유효하지 않을 경우 버튼 비활성화
          onClick={handleGoogleLogin}
          className={`block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white ${
            isFormValid ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span>로그인</span>
        </button>
      </div>
      {/* 아이디/비밀번호 정보 관리 */}
      <ul className="flex justify-evenly text-[13px] mt-[10px]">
        <li>
          <a href="/signup">이메일 가입</a>
        </li>
        <span className="w-[1px] h-[10px] m-[3px] mx-[6px] mt-[5px] bg-[#333]"></span>
        <li>이메일 찾기</li>
        <span className="w-[1px] h-[10px] m-[3px] mx-[6px] mt-[5px] bg-[#333]"></span>
        <li>비밀번호 찾기</li>
      </ul>
      <SocialLogin />
    </div>
  );
};

export default Login;
