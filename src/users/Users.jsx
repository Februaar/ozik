import Login from "./Login.jsx";
import Signup from "./SignUp.jsx";

export default function Users() {
  const handleLogin = (user) => {
    // 로그인 처리 로직
    console.log("Logged in as", user);
  };

  const handleSignup = (user) => {
    // 회원가입 처리 로직
    console.log("Signed up as", user);
  };

  return (
    <div>
      <h1>Users Page</h1>
      <Login onLogin={handleLogin} />
      <Signup onSignup={handleSignup} />
    </div>
  );
}
