import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [agree, setAgree] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      FULLNAME: data.FULLNAME,
      Email: data.Email,
      Password: data.Password,
    };
      await axios.post("http://localhost:3000/api/users/signup", userInfo)

      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('signup successful');
        }
        localStorage.setItem('users',JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error('Error: ' + err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("FULLNAME", { required: "Full Name is required" })}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.FULLNAME && <p className="text-red-500 text-sm">{errors.FULLNAME.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium  text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("Email", { required: "Email is required" })}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                {...register("Password", { required: "Password is required" })}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.Password && <p className="text-red-500 text-sm">{errors.Password.message}</p>}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the Terms and Conditions
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={!agree}
              className={`w-full h-12 ${
                agree ? 'bg-[#44bdf0] hover:bg-[#3aa8da]' : 'bg-[#a6d9ee] cursor-not-allowed'
              } text-black font-semibold rounded-md transition duration-200`}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-sm text-center text-gray-600 pt-4">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

