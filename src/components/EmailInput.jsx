import { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInput = (e) => {
    const inputValue = e.target.value.trim();
    setEmail(inputValue);

    if (inputValue) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(true);
    }

    if (!inputValue.includes("@")) {
      setIsValidEmail(false);
    }
  };

  const handleBlur = () => {
    setEmail(email.trim());
  };

  return (
    <div className="relative">
      <input
        type="email"
        placeholder="예) ozik@ozik.co.kr"
        autoComplete="off"
        className={`pr-[30px] h-[38px] p-2 w-full text-base tracking-tighter leading-6 border-b-1 border-gray-300 focus:border-b-2 focus:border-gray-600 ${
          !isValidEmail ? "border-red-500" : ""
        }`}
        value={email}
        onChange={handleInput}
        onBlur={handleBlur}
      />
      {email && (
        <button type="button" className="absolute top-1/2 right-0 -mt-3">
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
      )}
      {!isValidEmail && (
        <h3 className="text-red-500">올바른 이메일 주소를 입력해주세요.</h3>
      )}
      {/* {email && <p>이메일 주소를 정확히 입력해주세요.</p>} */}
    </div>
  );
};

export default EmailInput;
