import React from 'react';
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      //const [signUpWithGmail] = useContext(AuthContext);
      const authcontext= useContext(AuthContext);
      const signUpWithGmail=authcontext.signUpWithGmail;
      const login=authcontext.login;
      const [errorMessage,setErrorMessage]=useState("");

      const location=useLocation();
      const navigate=useNavigate();
      const from=location.state?.from?.pathname || "/";

      const onSubmit =(data)=>{
        const email=data.email;
        const password=data.password;
        login(email,password).then((result)=>{
          const user=result.user;
          //alert("Login Succesful");
          document.getElementById("my_modal_4").close();
          navigate(from,{replace:true});
        }).catch((error)=>{
          const errorMessage=error.message;
          setErrorMessage("Provide correct email and password");
        });
      };
      const handleLogin=()=>{
        signUpWithGmail().then((result)=>{
          const user=result.user;
          alert("Login Successful")
        }).catch((error)=> console.log(error));
      };

      

  return (
    <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    
    <div className="modal-action flex flex-col justify-center -mt-4">
    <form className="card-body" method='dailog'  onSubmit={handleSubmit(onSubmit)}>
    <h1 className='font-bold text-center text-lg'>Please login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required {...register("email")}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required {...register("password")}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* login btn */}
        {
          errorMessage? <p className='text-red text-xs'>{errorMessage}</p>:"" 
        }
        <div className="form-control mt-6">
          <input type='submit' value='login' className="btn btn-primary"/>
        </div>
        <p className='text-center my-2'>Don't have an account?{" "} <Link to="/signup"  className='underline ml-2' onClick={()=>document.getElementById('my_modal_4').close()}>SignUp!</Link>{" "}</p>
        <button
              htmlFor="my_modal_4"
              onClick={()=>document.getElementById('my_modal_4').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
      </form>
      {/* social sign in*/}
      <div className="text-center">
            <button
              className="btn btn-circle hover:bg-blue hover:text-white  m-4 "  onClick={handleLogin}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-blue hover:text-white  m-4">
              <FaMicrosoft />
            </button>
            <button className="btn btn-circle hover:bg-blue hover:text-white  m-4">
              <FaFacebook />
            </button>
          </div>
    </div>
  </div>
</dialog>
  )
}

export default Modal
