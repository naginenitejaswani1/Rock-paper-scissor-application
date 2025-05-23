import React from 'react'
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { User, MessageSquare, Mail, Lock, EyeOff, Eye, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthImagePattern from '../components/AuthImagePattern';
import toast from 'react-hot-toast';

const SignUpPage = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () =>{
    if(!formData.fullName.trim()) return toast.error("Full name is required");
    if(!formData.email.trim()) return toast.error("Email is required");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return toast.error("Email is invalid");
    if(!formData.password.trim()) return toast.error("Password is required");
    if(formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const success = validateForm();
    if(success === true) signup(formData);
    
  };
  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create an account</h1>
              <p className='text-base-content/60'>Join us and start your journey!</p>
            </div>
          </div>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="fullName" className='label'>
                  <span className='label-text font-medium'>Full Name</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <User className='w-5 h-5 text-base-content/40' />
                  </div>
                  <input
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    placeholder='John Doe'
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                    required 
                    className={`input input-bordered w-full pl-10`}
                  />
              
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor="email" className='label'>
                  <span className='label-text font-medium'>Email</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <Mail className='w-5 h-5 text-base-content/40' />
                  </div>
                  <input
                    type="text" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    placeholder='you@gmail.com'
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                    className={`input input-bordered w-full pl-10`}
                  />
                </div>
               
            </div>
            <div className='form-control'>
                <label htmlFor="password" className='label'>
                  <span className='label-text font-medium'>Password</span>
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <Lock className='w-5 h-5 text-base-content/40' />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    placeholder='********'
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                    required 
                    className={`input input-bordered w-full pl-10`}
                  />
                  <button
                    type="button" 
                    className='absolute inset-y-0 right-0 flex items-center pr-3'
                    onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (

                        <EyeOff className='size-5 text-base-content/40' />
                      ) : (
                        <Eye className='size-5 text-base-content/40' />
                      )}
                    </button>
                </div>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary w-full"
              disabled= {isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-1.5 animate-spin" />
                  Loading
                </>
                ): (
                  "Create Account"
                )}
              </button>
              
          </form>
          <div className='text-center'>
            <p className='text-base-content/60'>
            Already have an account ? {" "}
              <Link to="/login" className='link link-primary'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*right side */}
      <AuthImagePattern title = "Join Our Community" subtitle = "Connect with friends, share moments, and stay in touch with your loved one's" />
      
    </div>
    
  )
}

export default SignUpPage
