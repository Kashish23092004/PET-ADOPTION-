import React from 'react';
import Navbar1 from './Navbar1';
import About from './About';
import { Link } from 'react-router-dom';

const Petprofile = () => {

    return (
        <div
            className="relative flex min-h-screen flex-col dark:bg-black dark:text-white bg-white  text-black group/design-root overflow-x-hidden"
            style={{
                '--select-button-svg': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(99,124,136)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'/%3e%3c/svg%3e")`,
                fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'
            }}
        >

            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">YOUR FORM IS SUBMIITED</h3>
                    <p className="py-4">we will reach out to you soon!</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <Navbar1 />
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-80">
                        <div className="flex h-full min-h-[700px] flex-col justify-between dark:bg-black bg-white p-4">
                            {/* Sidebar Left: Keep empty or add more sections here if needed */}
                        </div>
                    </div>

                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#111518]  dark:text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Profile</p>
                        </div>

                        <div className="pb-3">
                            <div className="flex border-b border-[#dce2e5] px-4 gap-8">
                                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111518] text-[#111518] pb-[13px] pt-4" href="#">
                                    <p className="text-sm font-bold dark:text-white">Listing a Pet</p>
                                </a>
                                <Link
                                    to='/adopt'
                                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637c88] pb-[13px] pt-4 hover:text-black dark:text-white"
                                >
                                    <p className="text-sm font-bold">Adopting</p>
                                </Link>

                            </div>
                        </div>

                        <h2 className="text-[22px] font-bold px-4 pb-3 pt-5">Pet Details</h2>

                        {['Pet Name', 'type', 'Breed', 'Age', 'Gender'].map((label, i) => (
                            <div key={i} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-base font-medium pb-2">{label}</p>
                                    {label === 'Pet Name' ? (
                                        <input
                                            className="form-input h-14 rounded-lg border border-[#dce2e5] p-[15px]"
                                            placeholder="Enter pet name"
                                        />
                                    ) : (
                                        <select
                                            className="form-input h-14 rounded-lg border border-[#dce2e5] p-[15px]"
                                        >
                                            <option value=""></option>
                                            <option value="two text-black dark:text-black">CAT</option>
                                            <option value="three text-black dark:text-black ">DOG</option>
                                            <option value="three text-black dark:text-black ">HAMSTER</option>
                                            <option value="three text-black dark:text-black ">RABBIT</option>
                                            <option value="three text-black dark:text-black ">BIRD</option>
                                        </select>
                                    )}
                                </label>
                            </div>
                        ))}

                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-base font-medium pb-2">Description</p>
                                <textarea
                                    className="form-input min-h-36 rounded-lg border border-[#dce2e5] p-[15px]"
                                ></textarea>
                            </label>
                        </div>
                        <div className="px-4 py-4">
                            <button
                                type="submit"
                                onClick={() => document.getElementById('my_modal_2')?.showModal()}
                                className="bg-[#111518] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-[#1a1f23] active:scale-95"
                            >
                                Submit
                            </button>

                        </div>

                        <h2 className="text-[22px] font-bold px-4 pb-3 pt-5">Photos</h2>
                        <div className="flex w-full grow bg-white @container p-4">
                            <img src='data:image/jpeg;base64,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'></img>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5wkc0OMXsy3CMnmKoKiAlPGZYKVI-IYUqQ&s'></img>
                            <img src='data:image/jpeg;base64,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'></img>
                        </div>

                        <h2 className="text-[22px] font-bold px-4 pb-3 pt-5">Adoption Inquiries</h2>

                        {['Emily Carter', 'David Lee'].map((name, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between  dark:bg-black dark:text-white"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit  dark:bg-black dark:text-white"
                                        style={{ backgroundImage: `url('https://picsum.photos/seed/${idx + 10}/100/100')` }}
                                    ></div>
                                    <div className="flex flex-col justify-center  dark:bg-black dark:text-white">
                                        <p className="text-base font-medium line-clamp-1  dark:bg-black dark:text-white">{name}</p>
                                        <p className="text-sm font-normal line-clamp-2  dark:bg-black dark:text-white">
                                            {idx === 0 ? 'Interested in adopting Buddy' : "Inquiry about Buddy's adoption"}
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <button className="flex h-8 px-4 dark:bg-black dark:text-white bg-[#f0f3f4] text-sm font-medium rounded-lg">
                                        <span className="truncate">View</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Petprofile;
