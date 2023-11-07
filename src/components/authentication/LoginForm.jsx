import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import "./Form.css";
import backgroundImage from "./backgroundImage.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { auth, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loginWithEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  const login = async () => {};

  const logOut = async () => {};

  // const signInWithEmailAndPassword = () => {
  //   const answer = await signInWithEmailAndPassword(email, password);

  // }

  const schema = yup.object().shape({
    email: yup.string().email().required("Email field is required"),
    Password: yup
      .string()
      .min(8)
      .max(20)
      .required("Passwords can contain symbols, letters, or numbers"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    if (Object.keys(data).length === 0) {
      setFormSubmitted(!formSubmitted);
    } else {
      console.log(data);
      setFormSubmitted(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-screen flex items-center justify-center font-[Calibri] bg-[#DAA520]">
      <div className=" bg-white  shadow-md p-6 rounded-lg w-full max-w-lg">
        <div className="imageStyle text-center">
          <img
            alt="ddd"
            src={backgroundImage}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-extrabold font-serif">CARSONS</h2>
          <p className="carsons-login-p">
            Please sign in to continue... We've got you covered.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Email address
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Email..."
              {...register("email")}
              onChange={(event) => setLoginEmail(event.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Password..."
              value={password}
              {...register("Password")}
              onChange={(event) => setLoginPassword(event.target.value)}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.Password?.message}
            </p>
            <div className="tick-button-div flex gap-1">
              <button
                type="button"
                className={`show-password-btn ${showPassword ? "" : "active"}`}
                onClick={handlePasswordToggle}
              >
                <FaCheck className="tick-icon" />
              </button>
              <p className="mt-1 ">
                {showPassword ? "Hide Password" : "Show Password"}
              </p>
            </div>
          </div>

          <button className="w-full font-[Calibri] text-lg font-extrabold bg-blue-500 text-white py-4 rounded hover:bg-blue-600">
            Submit
          </button>

          <div className="or-line my-4">
            <span className="or-line-text">Or</span>
          </div>

          <div className="w-full gap-3 flex cursor-pointer bg-gray-400  text-white py-2 rounded hover:bg-red-600 hover:">
            <div className="mt-3 ml-2">
              <FcGoogle />
            </div>
            <button
              className=" text-white py-2 rounded tracking-wide font-semibold"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
