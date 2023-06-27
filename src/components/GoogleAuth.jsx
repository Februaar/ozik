import { GoogleLogin } from "react-google-login";

const GoogleAuth = () => {
  const handleGoogleLoginSuccess = (response) => {
    // 구글 인증 성공 시 처리할 로직
    console.log("구글 로그인 성공:", response);
  };

  const handleGoogleLoginFailure = (error) => {
    // 구글 인증 실패 시 처리할 로직
    console.log("구글 로그인 실패:", error);
  };

  return (
    <div>
      <h3>구글 로그인</h3>
      <GoogleLogin
        clientId="18510298939-f2g9h28h1rqcv6neui2222l8p8c8nq10.apps.googleusercontent.com" // 구글 개발자 콘솔에서 발급받은 클라이언트 ID 입력
        buttonText="Google로 로그인"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleAuth;
