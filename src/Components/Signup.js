import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const authcontext= useContext(AuthContext);
      const createUser=authcontext.createUser;
      const login=authcontext.login;
      
      const location=useLocation();
      const navigate=useNavigate();
      const from=location.state?.from?.pathname || "/";

      const onSubmit =(data)=>{
        const email=data.email;
        const password=data.password;
        createUser(email, password)
      .then((result) => {
        const user = result.user;
        //alert("Account creation succesfull");
        document.getElementById("my_modal_4").close();
          navigate(from,{replace:true});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      };
      
  return (
    <div className='max-w-md bg-white shadow w-full mx-auto text-center justify-center my-20 rounded-2xl'>
    <div className="modal-action flex flex-col justify-center">
    <form className="card-body" method='dailog'  onSubmit={handleSubmit(onSubmit)}>
    <h1 className='font-bold text-center text-lg'>Create Account</h1>
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
        <div className="form-control mt-6">
          <input type='submit' value='SignUp' className="btn btn-primary"/>
        </div>
        <p className='text-center my-2'>Already have an account?<button  className='underline ml-2' onClick={()=>document.getElementById('my_modal_4').showModal()}>Login</button></p>
        <Link to='/'
              className="btn btn-sm btn-circle btn-ghost absolute"
            >
              ✕
            </Link>
      </form>
      {/* social sign in*/}
      <div className="text-center">
            <button
              className="btn btn-circle hover:bg-blue hover:text-white  m-4 "
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
    <Modal/>
    </div>
  )
}

export default Signup
