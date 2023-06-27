import { useState } from "react";

const Password = ({ password, handleInput, validateForm }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateForm();
  };

  const validatePassword = (inputValue) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/; // 영문, 숫자 포함 6글자 이상
    return regex.test(inputValue);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    handleInput(inputValue);

    setIsValidPassword(validatePassword(inputValue));
    validateForm();
  };

  return (
    <div className="relative pt-[10px] pb-[20px]">
      <h3
        className={`text-[13px] font-bold tracking-tighter leading-4 ${
          !isValidPassword ? "text-red-500" : ""
        }`}
      >
        비밀번호
      </h3>
      <div className="relative">
        <input
          type="password"
          autoComplete="off"
          className={`pr-[30px] h-[38px] p-2 w-full text-base tracking-tighter leading-6 border-gray-300 ${
            !isFocused ? "border-b" : "border-b-2 border-black"
          }`}
          value={password}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {!isValidPassword && (
          <h3 className="text-sm text-red-500">
            영문, 숫자를 포함한 6글자 이상으로 입력해주세요.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Password;
