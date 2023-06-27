import { useState } from "react";

const Email = ({ email, handleInput, validateForm }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    handleInput({ target: { value: email.trim() } });
    validateForm();
  };

  const handleClear = () => {
    handleInput({ target: { value: "" } });
    validateForm();
  };

  const validateEmail = (inputValue) => {
    if (inputValue) {
      return !(
        !inputValue.includes("@") ||
        !inputValue.includes(".", inputValue.indexOf("@")) ||
        inputValue.endsWith(".")
      );
    }
    return false;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    handleInput(e);

    setIsValidEmail(validateEmail(inputValue));
    validateForm();
  };

  return (
    <div className="relative pt-[10px] pb-[20px]">
      <h3
        className={`text-[13px] font-bold tracking-tighter leading-4 ${
          !isValidEmail ? "text-red-500" : ""
        }`}
      >
        이메일 주소
      </h3>
      <div className="relative">
        <input
          type="email"
          placeholder="예) ozik@ozik.co.kr"
          autoComplete="off"
          className={`pr-[30px] h-[38px] p-2 w-full text-base tracking-tighter leading-6 border-gray-300 ${
            !isFocused ? "border-b" : "border-b-2 border-black"
          }`}
          value={email}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {email && (
          <button
            type="button"
            className="absolute top-1/2 right-0 -mt-3"
            onClick={handleClear}
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
        )}
        {!isValidEmail && (
          <p className="text-sm text-red-500">
            이메일 주소를 정확히 입력해주세요.
          </p>
        )}
      </div>
    </div>
  );
};

export default Email;
