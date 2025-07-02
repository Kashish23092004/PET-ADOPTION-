import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const succes =()=>{
    alert('signup succesful');
  }
  const [agree, setAgree] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium  text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-smfont-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bordertext-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
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
              onClick={succes}
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
  )
}

export default Signin
