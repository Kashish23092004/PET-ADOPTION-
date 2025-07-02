import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar1 from './Navbar1'

const Adopting = () => {
  const location = useLocation()

  const formFields = [
    { label: 'Full Name', className: 'dark:text-white', placeholder: 'Enter your full name', type: 'input' },
    { label: 'Email Address', className: 'dark:text-white', placeholder: 'Enter your email address', type: 'input' },
    { label: 'Phone Number', className: 'dark:text-white', placeholder: 'Enter your phone number', type: 'input' },
    {
      label: 'Why are you interested in adopting Luna?',
      className: 'dark:text-white',
      placeholder: 'Please share your reasons for wanting to adopt Luna.',
      type: 'textarea'
    },
    {
      label: 'Do you have any experience with pets?',
      className: 'dark:text-white',
      placeholder: 'Describe any previous experience you have with pets.',
      type: 'textarea'
    },
    {
      label: 'Personalized Message',
      className: 'dark:text-white',
      placeholder: 'Write a message to the pet lister expressing your interest.',
      type: 'textarea'
    }
  ]

  return (
    <div>
      {/* Modal */}
      <button className="hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-black">YOUR FORM IS SUBMITTED</h3>
          <p className="py-4 text-black">We will reach out to you soon!</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Navbar */}
      <Navbar1 />

      <div className="layout-container flex h-full grow flex-col dark:bg-black dark:text-white">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* Sidebar Left (optional) */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between dark:bg-black bg-white p-4" />
          </div>

          {/* Main Content */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Top Tabs */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111518] tracking-light text-[32px] dark:text-white font-bold leading-tight min-w-72">Profile</p>
            </div>

            <div className="pb-3 dark:bg-black bg-white p-4">
              <div className="flex border-b border-[#dce2e5] px-4 gap-8">
                <Link to="/profile">
                  <div className={`flex flex-col items-center justify-center pb-[13px] pt-4 ${location.pathname === '/profile'
                    ? 'border-b-[3px] border-b-[#111518] text-[#111518]'
                    : 'border-b-[3px] border-b-transparent text-[#637c88]'
                    }`}>
                    <p className="text-sm font-bold dark:text-white">Listing a Pet</p>
                  </div>
                </Link>

                <Link to="/adopt">
                  <div className={`flex flex-col items-center justify-center pb-[13px] pt-4 ${location.pathname === '/adopt'
                    ? 'border-b-[3px] border-b-[#111518] text-[#111518]'
                    : 'border-b-[3px] border-b-transparent text-[#637c88]'
                    }`}>
                    <p className="text-sm font-bold dark:text-white">Adopting</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Form Section */}
            <div
              className="relative flex min-h-screen flex-col dark:bg-black dark:text-white bg-white overflow-x-hidden"
              style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
            >
              <div className="px-10 flex flex-1 justify-center py-5">
                <div className="flex flex-col w-full max-w-[512px] py-5">
                  <div className="flex flex-wrap justify-between gap-3 p-4">
                    <p className="text-[#111518] tracking-light dark:text-white text-[32px] font-bold leading-tight min-w-72">
                      Express Interest in Luna
                    </p>
                  </div>

                  {/* Form Fields */}
                  {formFields.map((field, index) => (
                    <div key={index} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                      <label className={`flex flex-col min-w-40 flex-1 ${field.className}`}>
                        <p className={`text-base font-medium pb-2 ${field.className}`}>{field.label}</p>
                        {field.type === 'input' ? (
                          <input
                            placeholder={field.placeholder}
                            className="form-input w-full rounded-lg text-[#111518] bg-[#f0f3f4] h-14 p-4 placeholder:text-[#637c88] text-base"
                          />
                        ) : (
                          <textarea
                            placeholder={field.placeholder}
                            className="form-input w-full rounded-lg text-[#111518] bg-[#f0f3f4] min-h-36 p-4 placeholder:text-[#637c88] text-base"
                          ></textarea>
                        )}
                      </label>
                    </div>
                  ))}

                  {/* Submit Button */}
                  <div className="flex px-4 py-3 justify-end">
                    <button
                      type="submit"
                      onClick={() => document.getElementById('my_modal_2')?.showModal()}
                      className="bg-[#111518] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-[#1a1f23] active:scale-95"
                    >
                      <span className="truncate">Submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adopting
