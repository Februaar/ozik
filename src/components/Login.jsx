import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, firebaseAuth } from "../firebase-config";
import Email from "./Email";
import Password from "./Password";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAppropriate, setIsAppropriate] = useState(true);
  const [user, setUser] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const validateForm = () => {
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

  const login = async () => {
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setUser(curUserInfo.user);
      setIsAppropriate(true);
      navigate("/");
    } catch (err) {
      setIsAppropriate(false);
      console.log(err.code);
    }
  };

  useEffect(() => {
    let timer;
    if (!isAppropriate) {
      setShowErrorMessage(true);
      timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAppropriate]);

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
        validateForm={validateForm}
      />
      <Password
        password={password}
        handleInput={handlePasswordChange}
        validateForm={validateForm}
      />
      <div className="w-[340px] tracking-tighter mx-auto">
        <button
          type="submit"
          value="Submit Form"
          disabled={!isFormValid}
          onClick={login}
          className={`block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white ${
            isFormValid ? "bg-black" : "bg-gray-300"
          }`}
        >
          <span>로그인</span>
        </button>
      </div>
      {showErrorMessage && (
        <div className="absolute top-[15px] w-[330px] h-12 rounded-xl bg-black bg-opacity-40 text-white text-center mx-auto flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-lg mr-[15px]"
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
          <p>이메일 또는 비밀번호를 확인해주세요</p>
        </div>
      )}
      <ul className="flex justify-evenly text-[13px] mt-[10px]">
        <li>
          <a onClick={() => navigate("/signup")}>이메일 가입</a>
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
