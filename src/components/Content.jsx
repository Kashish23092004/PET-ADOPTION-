import React from 'react';
import { FaPaw } from "react-icons/fa";
import Petimages from './Petimages';
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import About from './About';
import Petlistings from './Petlistings';
import { Link } from 'react-router-dom';
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
              <Link to='list'>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              FIND A PET TO ADOPT
            </button>
            </Link>
          </div>
        </div>
      </div>
       <Petimages/>
    
  <p className='text-center text-5xl font-bold m-8 text-white bg-slate-600'>SUCCESS STORIES</p>
  {/* Flex Row Container */}
  <div className='flex flex-wrap justify-center gap-6'>
    
    {/* Card 1 */}
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="https://img.freepik.com/premium-photo/happy-family-dog-portrait-park-relax-smile-while-bonding-nature-calm-cheerful-happy-black-family-love-with-girl-pet-parents-enjoying-quality-time-forest_590464-101313.jpg" alt="family" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Lily's New Beginning</h2>
        <p>Lily, a shy golden retriever rescued from the streets, found her forever home with a loving family in Delhi. From trembling in a shelter to running free in her own backyard — her transformation is a reminder that love heals.</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="https://media.istockphoto.com/id/1344021882/photo/portrait-of-happy-multiracial-couple-scratching-their-pet-dog-sitting-on-floor-at-home.jpg?s=612x612&w=0&k=20&c=40ickNm5BHz4qE8XPfozZrf3EkIqUjxwu5uUfQNf2Fo="  />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Max Found His Pack</h2>
        <p>Max, once abandoned and scared, now spends his days cuddling on the couch and going on adventures with his new best friend, Aryan. His playful spirit is back, and his eyes now sparkle with joy.</p>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src="https://thumbs.dreamstime.com/b/family-children-pet-dog-sit-steps-home-family-children-pet-dog-sit-steps-home-108957222.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Bella’s Happily Ever After</h2>
        <p>Bella, a sweet labrador mix, waited patiently in our shelter for months. Her dream came true when a kind-hearted couple opened their home to her. Today, she’s more than a pet — she’s family.

</p>
        <div className="card-actions justify-end">
        
        </div>
      </div>
    </div>


  </div>
<p className='text-center text-5xl font-bold m-8 text-white bg-slate-600'>READY TO START</p>
  <p className='text-center mt-0 text-gray-700 relative'>TAKE THE NEXT STEP IN FINDING YOUR NEW BEST FRIEND</p>

<div className='flex mt-10 px-10 py-10'>
<div className="card w-96 bg-base-100  mx-20 text-slate-600 card-sm shadow-sm">
  <div className="card-body">
     <Link to='list'>
    <h2 className="card-title"><FaPaw />BROWSE PET</h2>
    </Link>
    <p>Explore our diverse selection of animals waiting for home</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Browse</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100  mx-20 text-slate-600 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title"><FaRegHeart />LEARN ABOUT ADOPTION</h2>
    <p>learn about the process of adopting the animals</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">learn more</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 mx-20 text-slate-600 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title"><IoHomeOutline />
LOGIN/SIGN UP</h2>
    <p>create an account or accesing your profile</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">login</button>
    </div>
  </div>
</div>

</div>
</div>

    
  );
};

export default Content;
