
//


'use client';
import Footer from '@/components/common/Footer';
import MenuNavbar from '@/components/common/MenuNavbar';
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';

export default function SiteAuth() {
  const router = useRouter();
  const { register, login } = useContext(AuthContext);

  // State to toggle between login, register, and forgot password forms
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);

  // State for form inputs
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: '' });
  const [otpData, setOtpData] = useState({ otp: '' });

  // State for validation errors (separate for each form)
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({});
  const [otpErrors, setOtpErrors] = useState({});

  // State for OTP timer and generated OTP
  const [timer, setTimer] = useState(30); // 30 seconds countdown
  const [showResend, setShowResend] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');

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

  // Effect to start MSW in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@/mocks/browser').then(({ worker }) => {
        worker.start();
      });
    }
  }, []);

  // Handle resend OTP
  const handleResendOtp = () => {
    const newOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOTP(newOtp);
    setOtpData({ otp: '' });
    setTimer(30);
    setShowResend(false);
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

  const handleOtpChange = (e, i) => {
    const { value } = e.target;
    if (value.length > 1) return;
    const newOtp = otpData.otp.split('');
    newOtp[i] = value;
    setOtpData({ otp: newOtp.join('') });
    if (value && i < 4) {
      e.target.nextElementSibling?.focus();
    }
  };

  // Validate forms
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(loginData.email)) newErrors.email = 'Invalid email format';
    if (!loginData.password) newErrors.password = 'Password is required';
    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.username) newErrors.username = 'Username is required';
    if (!registerData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(registerData.email)) newErrors.email = 'Invalid email format';
    if (!registerData.password) newErrors.password = 'Password is required';
    if (registerData.password !== registerData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForgotPassword = () => {
    const newErrors = {};
    if (!forgotPasswordData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(forgotPasswordData.email)) newErrors.email = 'Invalid email format';
    setForgotPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};
    if (!otpData.otp) newErrors.otp = 'OTP is required';
    else if (otpData.otp.length !== 5) newErrors.otp = 'OTP must be 5 digits';
    setOtpErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submissions
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      try {
        await login(loginData.email, loginData.password);
        router.push('/site');
      } catch (error) {
        setLoginErrors({ general: 'Invalid credentials' });
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (validateRegister()) {
      const { username, email, password } = registerData;
      const date = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0];
      try {
        await register(username, email, password, date, time);
        router.push('/site');
      } catch (error) {
        setRegisterErrors({ general: 'Registration failed' });
      }
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (validateForgotPassword()) {
      const otp = Math.floor(10000 + Math.random() * 90000).toString();
      setGeneratedOTP(otp);
      setShowOTPModal(true);
      setTimer(30);
      setShowResend(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (validateOtp()) {
      if (otpData.otp === generatedOTP) {
        router.push('/site');
      } else {
        alert('Please enter the correct code.');
      }
    }
  };

  // Determine if Confirm Password should be enabled
  const isConfirmPasswordEnabled = registerData.password.length > 0;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-hero relative">
        {/* Form Card */}
        <div className="relative my-10 md:my-20 backdrop-blur-lg bg-white/10 border border-black/20 rounded-2xl p-4 md:p-10 max-w-md w-full mx-4 shadow-2xl">
          {isForgotPassword ? (
            <>
              {/* Forgot Password Form */}
              <button
                onClick={() => {
                  setIsForgotPassword(false);
                  setIsLogin(true);
                }}
                className="mb-4 text-black/80 cursor-pointer hover:text-secondary transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-3xl font-bold !text-secondary mb-2">
                Reset Password
              </h2>
              <p className="text-secondary/80 mb-4 mt-2">
                Enter your email to receive a reset link
              </p>
              <div className="space-y-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/4 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-secondary/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={forgotPasswordData.email}
                        onChange={handleForgotPasswordChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-secondary !placeholder-black/20 focus:outline-none"
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
              <h2 className="text-3xl font-bold !text-secondary"> Welcome User ! </h2>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-secondary/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-secondary placeholder-black/20 focus:outline-none"
                      />
                    </div>
                  </div>
                  {loginErrors.email && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {loginErrors.email}
                    </p>
                  )}
                  {loginErrors.general && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {loginErrors.general}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-secondary/60 ml-4" />
                      <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Password"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-secondary placeholder-black/20 focus:outline-none"
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
                    className="text-primary hover:underline text-sm transition-colors"
                  >
                    Forgot Password?
                  </button>
                  <button onClick={handleLoginSubmit} className="btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="border-t border-black/20 pt-6">
                  <p className="text-secondary/70 text-center">
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-primary cursor-pointer font-semibold hover:underline"
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
                className="mb-4 cursor-pointer text-black/80 hover:text-black transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-3xl font-bold !text-secondary">Create Account</h2>
              <p className="text-black/80 my-3">
                Get started with your admin account
              </p>
              <div className="space-y-4">
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <User className="h-5 w-5 text-black/60 ml-4" />
                      <input
                        type="text"
                        name="username"
                        value={registerData.username}
                        onChange={handleRegisterChange}
                        placeholder="Username"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-black placeholder-black/20 focus:outline-none"
                      />
                    </div>
                  </div>
                  {registerErrors.username && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.username}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Mail className="h-5 w-5 text-black/60 ml-4" />
                      <input
                        type="email"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        placeholder="Email address"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-black placeholder-black/20 focus:outline-none"
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
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-black/60 ml-4" />
                      <input
                        type="password"
                        name="password"
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        placeholder="Password"
                        className="w-full pl-4 pr-4 py-3 bg-transparent border-none text-black placeholder-black/20 focus:outline-none"
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
                    <div className="absolute inset-0 bg-black/3 rounded-lg transform transition-all"></div>
                    <div className="relative flex items-center">
                      <Lock className="h-5 w-5 text-black/60 ml-4" />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        placeholder="Confirm Password"
                        className={`w-full pl-4 pr-4 py-3 bg-transparent border-none text-black placeholder-black/20 focus:outline-none ${
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
                  {registerErrors.general && (
                    <p className="text-primary text-sm mt-2 ml-4">
                      {registerErrors.general}
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
            <div className="bg-gradient-to-br from-secondary/100 to-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 w-full max-w-xs sm:max-w-sm shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Enter OTP
              </h2>
              <p className="text-white/80 mb-4 md:mb-6 text-sm md:text-base">
                We've sent a 5-digit code to your email
              </p>
              <div className="text-center mb-4">
                <p className="text-white/80">
                  Your OTP is: <span className="font-bold">{generatedOTP}</span>
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex justify-center gap-2 flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      value={otpData.otp[i] || ''}
                      onChange={(e) => handleOtpChange(e, i)}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !e.target.value) {
                          if (i > 0) {
                            e.target.previousElementSibling?.focus();
                          }
                        }
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-white/3 border border-white/20 text-white text-center text-lg md:text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full cursor-pointer btn-primary"
                >
                  Verify & Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}