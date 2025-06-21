"use client";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function page() {
  // State to toggle between login, register, and forgot password forms
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  // State for form inputs
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });
  const [otpData, setOtpData] = useState({ otp: "" });

  // State for validation errors (separate for each form)
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({});
  const [otpErrors, setOtpErrors] = useState({});

  // State for OTP timer
  const [timer, setTimer] = useState(30); // 50 seconds countdown
  const [showResend, setShowResend] = useState(false);

  // Effect for countdown timer
  useEffect(() => {
    let countdown;
    if (showOTPModal && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setShowResend(true);
    }
    return () => clearInterval(countdown);
  }, [showOTPModal, timer]);

  // Handle resend OTP
  const handleResendOtp = () => {
    setTimer(30);
    setShowResend(false);
    console.log("Resending OTP to:", forgotPasswordData.email);
    // Add your resend OTP API call here
  };

  // Handle input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate forms
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(loginData.email))
      newErrors.email = "Invalid email format";
    if (!loginData.password) newErrors.password = "Password is required";
    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.name) newErrors.name = "Name is required";
    if (!registerData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(registerData.email))
      newErrors.email = "Invalid email format";
    if (!registerData.password) newErrors.password = "Password is required";
    if (registerData.password !== registerData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForgotPassword = () => {
    const newErrors = {};
    if (!forgotPasswordData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(forgotPasswordData.email))
      newErrors.email = "Invalid email format";
    setForgotPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};
    if (!otpData.otp) newErrors.otp = "OTP is required";
    else if (!/^\d{5}$/.test(otpData.otp))
      newErrors.otp = "OTP must be a 6-digit number";
    setOtpErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submissions
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log("Login Data:", loginData);
      // Add your login API call here
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      console.log("Register Data:", registerData);
      // Add your register API call here
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (validateForgotPassword()) {
      console.log("Forgot Password Data:", forgotPasswordData);
      // Add your forgot password API call here
      setShowOTPModal(true);
      setTimer(30); // Reset timer when opening OTP modal
      setShowResend(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (validateOtp()) {
      console.log("OTP Data:", otpData);
      // Add your OTP verification API call here
      setShowOTPModal(false);
      setIsForgotPassword(false);
      setIsLogin(true);
    }
  };

  // Determine if Confirm Password should be enabled
  const isConfirmPasswordEnabled = registerData.password.length > 0;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary relative">
        {/* Form Card */}
        <div className="relative my-10 md:my-20 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 md:p-10 max-w-md w-full mx-4 shadow-2xl">
          {isForgotPassword ? (
            <>
              {/* Forgot Password Form */}
              <button
                onClick={() => {
                  setIsForgotPassword(false);
                  setIsLogin(true);
                }}
                className="mb-4 text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-3xl font-bold text-white mb-2">
                Reset Password
              </h2>
              <p className="text-white/80 mt-2 mb-4">
                Enter your email to receive a reset link
              </p>
              <div className="space-y-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={forgotPasswordData.email}
                        onChange={handleForgotPasswordChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white !placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {forgotPasswordErrors.email && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {forgotPasswordErrors.email}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleForgotPasswordSubmit}
                  className="w-full btn-primary"
                >
                  Send Reset Link
                </button>
              </div>
            </>
          ) : isLogin ? (
            <>
              {/* Login Form */}
              <h2 className="text-3xl font-bold text-white">Admin Portal</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {loginErrors.email && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {loginErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Password"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {loginErrors.password && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {loginErrors.password}
                    </p>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setIsForgotPassword(true)}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    Forgot Password?
                  </button>
                  <button onClick={handleLoginSubmit} className="btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-white/70 text-center">
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-white font-semibold hover:underline"
                    >
                      Create Account
                    </button>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Register Form */}
              <button
                onClick={() => setIsLogin(true)}
                className="mb-4 text-white/80 cursor-pointer hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-3xl font-bold text-white">Create Account</h2>
              <p className="text-white/80 my-3">
                Get started with your admin account
              </p>
              <div className="space-y-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <User className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="text"
                        name="name"
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        placeholder="Full name"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {registerErrors.name && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {registerErrors.email && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="password"
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        placeholder="Password"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none"
                      />
                    </div>
                  </div>
                  {registerErrors.password && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.password}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-white/60 ml-4" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        placeholder="Confirm Password"
                        className={`w-full pl-4 pr-4 py-3 bg-transparent border-none text-white placeholder-white/10 focus:outline-none ${
                          !isConfirmPasswordEnabled
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={!isConfirmPasswordEnabled}
                      />
                    </div>
                  </div>
                  {registerErrors.confirmPassword && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.confirmPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleRegisterSubmit}
                  className="w-full btn-primary"
                >
                  Create Account
                </button>
              </div>
            </>
          )}
        </div>

        {/* OTP Verification Modal */}
        {showOTPModal && (
          <div className="fixed inset-0 flex p-4 items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-gradient-to-br from-secondary/50 to-grey-800 rounded-xl md:rounded-2xl p-6 md:p-8 w-full max-w-xs sm:max-w-sm shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Verify OTP
              </h2>
              <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">
                We've sent a 5-digit code to your email
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-center gap-2 flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-white/10 border border-white/20 text-white text-center text-lg md:text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      onChange={(e) => {
                        const newOtp = [...otpData.otp];
                        newOtp[i] = e.target.value;
                        setOtpData({ otp: newOtp.join("") });
                        if (e.target.value && i < 4) {
                          e.target.nextElementSibling?.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && e.target.value === "") {
                          if (i > 0) {
                            e.target.previousElementSibling?.focus();
                          }
                        }
                      }}
                    />
                  ))}
                </div>
                {otpErrors.otp && (
                  <p className="text-primary text-sm md:text-sm text-center">
                    {otpErrors.otp}
                  </p>
                )}
                {/* Timer/Resend Section */}
                <div className="text-center space-y-2">
                  {showResend ? (
                    <button
                      onClick={handleResendOtp}
                      className="text-white/70 cursor-pointer hover:text-white text-xs md:text-sm bg-white/5 px-3 md:px-4 py-2 rounded-md transition-colors"
                    >
                      Resend Code
                    </button>
                  ) : (
                    <p className="text-white/70 text-xs md:text-sm">
                      Resend code in{" "}
                      <span className="text-purple-300">{timer}s</span>
                    </p>
                  )}
                </div>
                <button
                  onClick={handleOtpSubmit}
                  className="w-full cursor-pointer !btn-primary"
                >
                  Verify & Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
