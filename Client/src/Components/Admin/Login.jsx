import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(null);
  
    const validateEmail = (e) => {
      const inputValue = e.target.value;
  
      setEmail(inputValue);
  
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
  
      if (isValidEmail == false) {
        if (inputValue === "") {
          setEmailValid(null);
        } else {
          setEmailValid(false);
        }
      }
      setEmailValid(isValidEmail);
  
    };
  
    const validatePassword = (e) => {
  
      const inputValue=e.target.value
  
      setPassword(inputValue)
  
      let state=passwordValidation(password)
      if(state===false){
          if(inputValue==''){
              setPasswordValid(null)
          }else{
              setPasswordValid(false)
          }
      }
  
      setPasswordValid(state)
  
    };
  
    const passwordValidation=(password)=>{
      const minLength = 6;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;
  
      const passwordCheck=passwordRegex.test(password)
      const isMinLength = password.length >= minLength;
  
  
      return passwordCheck && isMinLength;
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
          if (
            !emailValid.trim() ||
            !passwordValid
          
          ) {
            toast.error("Enter all fields");
            return;
          }
    
          const result = await adminAxios.post("/login", {
            emailValid,
            passwordValid
          });
    
          if (result.data.status) {
            toast.success("Product Successfully added");
          }
        } catch (error) {
          console.log("error");
        }
      };


  return (
    <form onSubmit={submitLogin} className="h-screen flex justify-center items-center bg-[#1a1a1a]">
    <div className="bg-black sm:h-5/6  h-screen flex flex-col items-center w-full  sm:w-[38%] rounded-md">
      <h1 className="text-white  text-center mt-28 sm:mt-12  text-2xl font-bold mb-6 ">
        LOGIN
      </h1>
      <div className="bg-white w-96 h-[.1rem] mb-6"></div>
      <div className="flex flex-col sm:my-2">
        <label className="text-white my-1" htmlFor="">
          Email
        </label>
        <input
          className="p-2 rounded-sm w-80 text-white outline-none bg-[#1a1a1a] border"
          type="email"
          onChange={validateEmail}
          placeholder="Email"
          style={{
            borderColor: emailValid ? "green" : email ? "red" : "white",
          }}
        />
        {emailValid ? (
          ""
        ) : email ? (
          <p className="text-red-600">Email is not valid</p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col ">
        <div className="relative flex flex-col">
          <label className="text-white my-1" htmlFor="">
            Password
          </label>
          <input
            onChange={validatePassword}
            className="p-2 text-white rounded-sm w-80 bg-[#1a1a1a] outline-none border"
            type= "password"
            placeholder="Password"
            style={{
              borderColor: passwordValid ? "green" : password? "red" : "white",
            }}
          />  
      {passwordValid ? (
          ""
        ) : password ? (
          <small className="text-red-600 ">Password must have a capital letter, a <br/> number, a special character, and be at least<br/> 6 characters long.</small>
        ) : (
          ""
        )}
        </div>
      </div>
      <button className="bg-[#1ed760] transform hover:scale-105 mt-7 duration-200 w-80 font-bold rounded-3xl  h-[2.9rem] ">
        Log In
      </button>
    </div>
  </form>
  )
}

export default Login