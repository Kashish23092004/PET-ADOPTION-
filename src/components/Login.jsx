import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='bg-white p-10'>
      <h1 className='text-center text-2xl font-bold mb-5'>LOGIN</h1>
      <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 rounded-md mb-5 bg-[#f1f4f6] text-black placeholder-gray-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 rounded-md mb-5 bg-[#f1f4f6] text-black placeholder-gray-500"
          />

          <div className="flex justify-between mb-3 items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-black ">Remember me</span>
            </label>
            <Link to='/signin'>
            <span className="text-gray-500 hover:underline">don't have an account? sign up</span>
            </Link>
          </div>

           
          <button
            type="submit"
            className="w-full h-12 bg-[#44bdf0] text-black font-semibold rounded-md hover:bg-[#3aa8da] transition duration-200"
          >
            Log In
          </button>
          </div>
  </div>
</dialog>
</>
  )
}

export default Login