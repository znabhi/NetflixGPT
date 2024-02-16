export const Validate = (email, password) => {
  // console.log(email);
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isDateValidate = /^d{1,2}\/\d{1,2}\/\d{2,4}$/.test(date);

  //   emailValidate == true ? return  :null
  if (!emailValidate) return "! Please Check Email Address";
  if (!passwordValidate) return "! Please Check Password";
  // if (!isDateValidate) return "! Enter Correct Date";
  return null;
};

