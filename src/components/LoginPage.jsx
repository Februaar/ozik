import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

import EmailInput from "../components/EmailInput";

const LoginPage = () => {
  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-w-screen-lg w-[400px] pt-[60px] pb-[160px] mx-auto">
      <div className="pb-[50px] text-center font-bold text-[35px]">Ozik</div>
      {/* 이메일 주소 */}
      <div className="relative pt-[10px] pb-[14px]">
        <h3 className="text-[13px] font-bold tracking-tighter leading-4">
          이메일 주소
        </h3>
        <EmailInput />
        {/* <div className="relative">
          <input
            type="email"
            placeholder="예) ozik@ozik.co.kr"
            autoComplete="off"
            className="pr-[30px] h-[38px] p-2 w-full text-base tracking-tighter leading-6 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-600 focus:placeholder-transparent"
            onClick="this.classList.add('border-b-2'); this.nextElementSibling.style.display = 'block';"
          />
          <button
            type="button"
            className="absolute top-1/2 right-0 -mt-3 border border-blue-400 hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        </div>
        <p className="hidden">이메일 주소를 정확히 입력해주세요.</p> */}
      </div>
      {/* 비밀번호 */}
      <div className="relative pt-[10px] pb-[14px]"></div>
      <div className="w-[340px] tracking-tighter mx-auto">
        <form>
          {/* 로그인 form */}
          <div className="mt-[30px]">
            {/* 아이디 */}
            <div className="mb-[5px] pb-[12px]">
              <div className="relative h-[48px]">
                <input
                  name="id"
                  placeholder="아이디를 입력해주세요"
                  type="text"
                  className="w-full h-[54px] px-3 py-1 rounded-md border border-gray-300 font-normal text-base leading-6 text-gray-700 outline-none box-border"
                />
              </div>
            </div>
            {/* 비밀번호 */}
            <div className="pb-[12px]">
              <div className="relative h-[48px]">
                <input
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  autoComplete="off"
                  className="w-full h-[54px] px-3 py-1 rounded-md border border-gray-300 font-normal text-base leading-6 text-gray-700 outline-none box-border"
                />
              </div>
            </div>
          </div>
          {/* 아이디/비밀번호 정보 관리 */}
          <div className="flex justify-end text-[13px] mt-[10px]">
            <a href="">아이디 찾기</a>
            <span className="w-[1px] h-[10px] m-[3px] mx-[6px] mt-[5px] bg-[#333]"></span>
            <a href="">비밀번호 찾기</a>
          </div>
          {/* 버튼 */}
          <div className="mt-[28px]">
            {userData ? (
              <p>로그인이 완료되었습니다.</p>
            ) : (
              <button
                type="submit"
                value="Submit Form"
                onClick={handleGoogleLogin}
                className="block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white bg-blue-600 border-none"
              >
                <span>로그인</span>
              </button>
            )}
            <button
              type="button"
              className="mt-[10px] block px-10 text-center overflow-hidden w-full h-14 rounded-md text-blue-600 bg-white border border-blue-600"
            >
              <span>회원가입</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
