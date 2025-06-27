import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
   <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Adoption Services</a>
    <a className="link link-hover">Pet Matching</a>
    <a className="link link-hover">Foster Program</a>
    <a className="link link-hover">Pet Transport</a>
  </nav>

  <nav>
    <h6 className="footer-title">Organization</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Team</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Media & Press</a>
  </nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Adoption Policy</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
  </nav>

  <nav>
    <h6 className="footer-title">Follow Us</h6>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">YouTube</a>
    <a className="link link-hover">Twitter</a>
  </nav>

  <nav>
    <h6 className="footer-title">Explore</h6>
    <a className="link link-hover">Available Cats</a>
    <a className="link link-hover">Success Stories</a>
    <a className="link link-hover">Volunteer</a>
    <a className="link link-hover">Donate</a>
  </nav>

  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Pet Care Tips</a>
    <a className="link link-hover">Vaccination Info</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Emergency Contacts</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer