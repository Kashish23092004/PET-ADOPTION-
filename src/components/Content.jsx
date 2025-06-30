import React, { useEffect, useState } from 'react';
import { FaPaw, FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Petimages from './Petimages';
import { Link } from 'react-router-dom';

const Content = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const htmlClass = document.documentElement.classList;
      setIsDark(htmlClass.contains('dark'));
    };

    checkTheme(); // check once on load

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const darkImage = "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=774%2Cq=85%2Cw=1999/wp-content/uploads/international-black-cat-awareness-month-e1575287719521.jpg";
  const lightImage = "https://c4.wallpaperflare.com/wallpaper/146/602/418/cat-gaze-warm-scarf-bokeh-wallpaper-preview.jpg";

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300`}>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url('${isDark ? darkImage : lightImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className={`absolute inset-0 bg-black bg-opacity-50 z-0`}></div>

        <div className="hero-content z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">ADOPT US</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  text-white">WE NEED YOUR HELP</h1>
            <p className="mt-6 mb-6 text-base sm:text-lg md:text-xl  text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Link to='list'>
              <button className={`btn btn-outline ${isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'} transition-all duration-300`}>
                FIND A PET TO ADOPT
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Petimages />

      <p className={`text-center text-5xl font-bold m-8 ${isDark ? 'text-white bg-slate-600' : 'text-black bg-gray-200'}`}>SUCCESS STORIES</p>

      <div className='flex flex-wrap justify-center gap-6'>
        {[
          {
            title: "Lily's New Beginning",
            desc: "Lily, a shy golden retriever rescued from the streets, found her forever home with a loving family in Delhi. From trembling in a shelter to running free in her own backyard — her transformation is a reminder that love heals.",
            img: "https://img.freepik.com/premium-photo/happy-family-dog-portrait-park-relax-smile-while-bonding-nature-calm-cheerful-happy-black-family-love-with-girl-pet-parents-enjoying-quality-time-forest_590464-101313.jpg"
          },
          {
            title: "Max Found His Pack",
            desc: "Max, once abandoned and scared, now spends his days cuddling on the couch and going on adventures with his new best friend, Aryan. His playful spirit is back, and his eyes now sparkle with joy.",
            img: "https://media.istockphoto.com/id/1344021882/photo/portrait-of-happy-multiracial-couple-scratching-their-pet-dog-sitting-on-floor-at-home.jpg?s=612x612&w=0&k=20&c=40ickNm5BHz4qE8XPfozZrf3EkIqUjxwu5uUfQNf2Fo="
          },
          {
            title: "Bella’s Happily Ever After",
            desc: "Bella, a sweet labrador mix, waited patiently in our shelter for months. Her dream came true when a kind-hearted couple opened their home to her. Today, she’s more than a pet — she’s family.",
            img: "https://thumbs.dreamstime.com/b/family-children-pet-dog-sit-steps-home-family-children-pet-dog-sit-steps-home-108957222.jpg"
          }
        ].map(({ title, desc, img }, i) => (
          <div key={i} className={`card w-96 shadow-sm ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <figure>
              <img src={img} alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className={`text-center text-5xl font-bold m-8 ${isDark ? 'text-white bg-slate-600' : 'text-black bg-gray-200'}`}>READY TO START</p>
      <p className={`text-center mt-0 relative ${isDark ? 'text-white' : 'text-gray-700'}`}>TAKE THE NEXT STEP IN FINDING YOUR NEW BEST FRIEND</p>

      <div className='flex flex-wrap justify-center mt-10 px-4 py-10 gap-6'>
        {[
          { icon: <FaPaw />, title: "BROWSE PET", desc: "Explore our diverse selection of animals waiting for home", btn: "Browse", link: 'list' },
          { icon: <FaRegHeart />, title: "LEARN ABOUT ADOPTION", desc: "learn about the process of adopting the animals", btn: "learn more" },
          { icon: <IoHomeOutline />, title: "LOGIN/SIGN UP", desc: "create an account or accessing your profile", btn: "login" }
        ].map(({ icon, title, desc, btn, link }, i) => (
          <div key={i} className={`card w-96 shadow-sm ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className="card-body">
              {link ? <Link to={link}><h2 className="card-title">{icon} {title}</h2></Link> : <h2 className="card-title">{icon} {title}</h2>}
              <p>{desc}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">{btn}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
