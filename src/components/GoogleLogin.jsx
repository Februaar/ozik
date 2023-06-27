import { useState } from "react";

const GoogleLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 이메일과 비밀번호를 사용하여 구글 인증 처리
    // 구글 인증에 필요한 로직을 구현해야 합니다.
    console.log(
      "구글 인증을 처리합니다. 이메일:",
      email,
      "비밀번호:",
      password
    );
  };

  return (
    <div>
      <h3>구글 로그인</h3>
      <input
        type="email"
        placeholder="이메일 주소"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default GoogleLogin;
