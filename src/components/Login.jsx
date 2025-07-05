import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [agree, setAgree] = useState(false);

  const onSubmit = async (data) => {
    const userInfo = {
      Email: data.Email,
      Password: data.Password,
    };

    try {
      const res = await axios.post("http://localhost:3000/api/users/login", userInfo);
      if (res.data && res.data.user) {
        toast.success("Login successful");
        localStorage.setItem("users", JSON.stringify(res.data.user));
          window.location.reload();

        const modal = document.getElementById('my_modal_3');
        if (modal) {
          modal.close();
        }
      }
    } catch (err) {
      toast.error('Error: ' + (err.response?.data?.message || "Network Error"));
    }
  };

  useEffect(() => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      modal.showModal();
    }
  }, []);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>

            <div className='bg-white p-10'>
              <h1 className='text-center text-2xl font-bold mb-5'>LOGIN</h1>

              <input
                type="email"
                placeholder="Email"
                {...register("Email", { required: "Email is required" })}
                className="w-full h-12 px-4 rounded-md mb-2 bg-[#f1f4f6] text-black placeholder-gray-500"
              />
              {errors.Email && <p className="text-red-500 text-sm">{errors.Email.message}</p>}

              <input
                type="password"
                placeholder="Password"
                {...register("Password", { required: "Password is required" })}
                className="w-full h-12 px-4 rounded-md mb-2 bg-[#f1f4f6] text-black placeholder-gray-500"
              />
              {errors.Password && <p className="text-red-500 text-sm">{errors.Password.message}</p>}

              <div className="flex justify-between mb-3 items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-black">Remember me</span>
                </label>
                <Link to='/signin'>
                  <span className="text-gray-500 hover:underline">Don't have an account? Sign up</span>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#44bdf0] text-black font-semibold rounded-md hover:bg-[#3aa8da] transition duration-200"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
