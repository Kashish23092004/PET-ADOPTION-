import React from 'react';
import Petimages from './Petimages';
const Content = () => {
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url('https://c4.wallpaperflare.com/wallpaper/146/602/418/cat-gaze-warm-scarf-bokeh-wallpaper-preview.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="hero-content text-neutral-content z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
              ADOPT US 
              </h1>
               <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">WE NEED YOUR HELP</h1>

            <p className="mt-6 mb-6 text-base sm:text-lg md:text-xl text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              FIND A PET TO ADOPT
            </button>
          </div>
        </div>
      </div>
       <Petimages/>
    </div>
  );
};

export default Content;
