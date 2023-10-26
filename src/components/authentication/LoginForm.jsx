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

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

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
    <div className="h-screen flex items-center justify-center font-[Calibri] bg-[#0d1224]">
      <div className=" bg-white  shadow-md p-8 rounded-lg w-full max-w-md">
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
          {/* <div className="mb-4">
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
              {...register('email')}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Password..."
              value={password}
              {...register('Password')}
              onChange={handlePasswordChange}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.Password?.message}
            </p>
            <div className="tick-button-div">
              <button
                type="button"
                className={`show-password-btn ${
                  showPassword ? '' : 'active'
                }`}
                onClick={handlePasswordToggle}
              >
                <FaCheck className="tick-icon" />
              </button>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </div>
          </div> */}

          {/* <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Submit
          </button> */}
          {/* <div>
            <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-blue-600">
              Sign In With Phone Number
            </button>
          </div> */}
          <br />
          <div className="w-full gap-3 flex cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            <div className="mt-3 ml-2">
              <AiOutlineMail />
            </div>
            <button className="   tracking-wide text-white py-2 rounded font-semibold">
              Continue with email Account
            </button>
          </div>

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
