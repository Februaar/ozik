import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import SocialLogin from "../components/SocialLogin";

const LoginPage = () => {
  return (
    <div className="min-w-screen-lg w-[400px] pt-[60px] pb-[160px] mx-auto">
      <div className="pb-[50px] text-center font-bold text-[35px]">
        Ozik
        <p className="text-center font-bold text-base text-gray-600">
          오직 나를 위한 시간
        </p>
      </div>
      <EmailInput />
      <PasswordInput />
      <div className="w-[340px] tracking-tighter mx-auto">
        <button
          type="submit"
          value="Submit Form"
          className="block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white bg-gray-300"
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

export default LoginPage;
