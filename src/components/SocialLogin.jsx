import { firebaseAuth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(firebaseAuth, provider);
      navigateToMainPage();
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToMainPage = () => {
    navigate("/"); // 메인 페이지의 원하는 URL로 대체하세요
  };

  return (
    <div className="w-[340px] mt-[30px] mx-auto">
      <button
        type="submit"
        value="Submit Form"
        onClick={handleGoogleLogin}
        className="block px-10 text-center overflow-hidden w-full h-14 rounded-md text-white bg-blue-600 border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-google absolute"
          viewBox="0 0 16 16"
        >
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
        </svg>
        구글로 로그인
      </button>
    </div>
  );
};

export default SocialLogin;
