export const checkValidData = ({
  email,
  password,
  mobile,
  name,
  isSignInForm,
}) => {
  const isEmailValid =
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);

  const isPasswordValid = /^[@#](?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{7,13}$/.test(
    password,
  );

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

  if (!isSignInForm) {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return "Mobile Number is not valid";
    }

    if (!/^[A-Za-z]+(?: [A-Za-z]+){1,3}$/.test(name)) {
      return "Full Name is not valid";
    }
  }

  //   const isMobileValid = /^(?:\+91|91)?[6-9]\d{9}$/.test(mobile);

  //   const isFullNameValid = /^[A-Za-z]+(?: [A-Za-z]+){1,3}$/.test(name);

  //   if (!isMobileValid) return "Mobile Number is not valid";

  //   if (!isFullNameValid) return "Full Name is not valid";

  return null;
};
