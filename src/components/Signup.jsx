import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  firebaseAuth,
} from "../firebase-config";
import Email from "./Email";
import Password from "./Password";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [householdType, setHouseholdType] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isAgeChecked, setIsAgeChecked] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handlePasswordChange = (value) => {
    setRegisterPassword(value);
  };

  const handleHouseholdTypeChange = (event) => {
    setHouseholdType(event.target.value);
  };

  const handleAgeCheckboxChange = (event) => {
    setIsAgeChecked(event.target.checked);
  };

  useEffect(() => {
    setIsButtonDisabled(
      !registerEmail || !registerPassword || !householdType || !isAgeChecked
    );
  }, [registerEmail, registerPassword, householdType, isAgeChecked]);

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

  const validateForm = () => {
    // 폼의 유효성 검사
    const isEmailValid = validateEmail(registerEmail);
    const isPasswordValid = validatePassword(registerPassword);
    setIsButtonDisabled(
      !isEmailValid || !isPasswordValid || !householdType || !isAgeChecked
    );
  };

  const register = async () => {
    try {
      setErrorMsg("");
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        registerEmail,
        registerPassword
      );
      console.log(createdUser);
      setRegisterEmail("");
      setRegisterPassword("");
      navigate("/"); // 회원가입 성공 시, 로그인 페이지로 이동
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다");
          break;
        default:
          setErrorMsg("회원가입에 실패했습니다");
          break;
      }
    }
  };

  return (
    <div className="min-w-screen-lg w-[400px] pt-[60px] pb-[160px] mx-auto">
      <div className="pb-[50px] text-center font-bold text-[32px]">
        회원가입
      </div>
      <Email
        email={registerEmail}
        handleInput={handleEmailChange}
        validateForm={validateForm}
      />
      <Password
        password={registerPassword}
        handleInput={handlePasswordChange}
        validateForm={validateForm}
      />
      <div className="relative pt-[10px] pb-[30px]">
        <h3 className="text-[13px] font-bold tracking-tighter leading-4">
          가구 형태
        </h3>
        <div className="relative">
          <input
            list="family"
            autoComplete="off"
            className="pr-[30px] h-[38px] p-2 w-full text-base tracking-tighter leading-6 border-b border-gray-300 focus:border-b-2"
            value={householdType}
            onChange={handleHouseholdTypeChange}
          />
          <datalist id="family">
            <option value="1인 가구" />
            <option value="2인 가구" />
            <option value="다가구" />
            <option value="대가족" />
          </datalist>
        </div>
      </div>

      {/* 필수 */}
      <div className="pb-[40px] w-[340px] tracking-tighter mx-auto text-base border-1 border-black">
        <div className="pb-[15px]">
          <input
            type="checkbox"
            id="ageCheckbox"
            name="ageCheckbox"
            checked={isAgeChecked}
            onChange={handleAgeCheckboxChange}
          />
          <label htmlFor="ageCheckbox">
            [필수] 만 14세 이상이며 모두 동의합니다.
          </label>
        </div>
        <div className="pb-[10px]">
          <input type="checkbox" id="adCheckbox" name="adCheckbox" />
          <label htmlFor="adCheckbox">
            [선택] 광고성 정보 수신에 모두 동의합니다.
          </label>
        </div>
      </div>
      <div className="text-red-500">{errorMsg}</div>
      <button
        type="submit"
        value="Submit Form"
        className={`block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white ${
          isButtonDisabled ? "bg-gray-300" : "bg-black"
        }`}
        disabled={isButtonDisabled}
        onClick={register}
      >
        <span>가입하기</span>
      </button>
    </div>
  );
};

export default Signup;
