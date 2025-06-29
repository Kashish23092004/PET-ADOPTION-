import React from 'react'



const About = () => {
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYW5kJTIwb3duZXJ8ZW58MHx8MHx8fDA%3D"
      className="max-w-lg rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl px-20 font-bold">Giving Every Pet a Place to Call Home!</h1>
      <p className="py-6 px-20">
        At Pawsitivity, we believe every pet deserves a second chance at life — one filled with love, care, and companionship. Our mission is to connect abandoned and rescued animals with compassionate families ready to open their hearts and homes.

With every adoption, we don’t just give pets a shelter — we give them a family. From street rescues to happy tails, we’re creating a world where no paw is left behind. Join us in spreading kindness, one adoption at a time.
      </p>
      <button className="btn btn-primary mx-80">Get Started</button>
    </div>
  </div>
</div>
<div className='bg-white'>
<div className="card w-auto bg-orange-200 card-xl shadow-sm">
  <div className="card-body">
    <h2 className=" text-gray-700 text-5xl font-extrabold mb-7 text-center">OUR STORY</h2>
    <h2 className='font-bold text-3xl  text-slate-800 text-center'> It All Began with Bruno</h2>
    <p>It all began when our founder rescued a stray puppy named Bruno from a busy roadside. Cold, scared, and hungry, Bruno needed help — and that single act of compassion sparked a movement.

From that moment, we realized that there are thousands of Brunos out there, waiting for someone to notice, rescue, and give them a chance. That’s how Pawsitivity was born — a platform built not just to adopt pets, but to connect rescuers and adopters across the country.

Today, anyone who finds a stray, injured, or abandoned dog can log in, upload their image and story, and give them a voice. People looking to adopt can browse these rescue stories and bring home not just a pet — but a life that needed saving.

Together, we’re building a kinder world, one rescue at a time. 🐾</p>
  </div>
</div>
</div>

<div className='bg-orange-200 mt-24'>
<div className="card w-auto bg-orange-200 card-xl shadow-sm">
  <div className="card-body">
    <h2 className="text-center text-gray-700 text-5xl font-extrabold mb-7"> Meet the Team — The Hearts Behind the Mission</h2>
    <div className='flex'>
        <div className='bg-white'>
    <p className='  text-slate-700 mb-5  font-extrabold  text-center pt-3'>Ananya Verma – Founder </p>
    <div>
        <div className="avatar pl-48">
  <div className="w-24 rounded-full">
        <img src="https://media.istockphoto.com/id/1915382108/photo/smiling-friendly-confident-millennial-caucasian-lady-manager-teacher-in-formal-wear-with.jpg?s=612x612&w=0&k=20&c=TkrRP273eXURjstyDZHFH4lkrE6OFmVJ9ZCrgLoPfIw=" />
  </div>
</div>

    <p className='px-4'>Ananya's journey began with rescuing a frightened puppy named Bruno — a moment that inspired her to build a platform where every stray has a chance at life. With a background in animal welfare and a heart full of compassion, she leads the mission to connect everyday heroes with loving adopters.
</p>
</div>
</div>
<div className='bg-white mx-4'>
      <h3 className='text text-slate-700 mb-5 mt-1 font-extrabold text-center pt-3'>Rohan Mehta – Lead Developer</h3>
      <div>
        <div className="avatar pl-44">
  <div className="w-24 rounded-full">
    <img src='data:image/jpeg;base64,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'></img>
  </div>
</div>

    <p className='px-4'>Rohan turned the vision into reality. Passionate about using tech for social good, he built the platform that enables people to easily upload rescued pet details and find loving families for them. He believes every line of code can help save a life.
</p>
</div>
</div>
<div className='bg-white'>
  <h3 className='font-extrabold  text-slate-700 mb-5 mt-2 text-center pt-3'> Priya Sharma – Adoption Coordinator</h3>
  <div><div className="avatar pl-44">
  <div className="w-24 rounded-full">
    <img src="https://media.istockphoto.com/id/1327765791/photo/smiling-young-asian-businesswoman-standing.jpg?s=612x612&w=0&k=20&c=ewcogScjnutv6ehMGhWfBOOhbtvbNn3dWoNNywpduTU=" />
  </div>
</div>

    <p className='px-4'>Priya is the bridge between the street and a safe home. She works closely with rescuers, vets, and adopters to ensure that every pet gets the care and placement they deserve. Her empathy and energy keep the team grounded in its mission.

</p>
</div>
</div>
</div>
  </div>
</div>
</div>
    </div>
  )
}

export default About