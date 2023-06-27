import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

const SignIn = () => {
  // const history = useHistory();

  // const handleLoginClick = () => {
  //   history.push("/login"); // 로그인 페이지로 이동
  // };

  // return (
  //   <div>
  //     <button type="button" onClick={handleLoginClick}>
  //       로그인
  //     </button>
  //   </div>
  // );

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {userData ? (
        <p>로그인이 완료되었습니다.</p>
      ) : (
        <button type="submit" value="Submit Form" onClick={handleGoogleLogin}>
          로그인
        </button>
      )}
    </div>
  );
};

export default SignIn;
