import React from 'react'
import "../styles/Footer.css"


const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1-1.2 1.8-2.9 1.8-4.7 0-4.3-3.6-7.8-8-7.8 3 0 5.4 1.7 7.7 3.4 1-1.3 2-2.3 3.4-3.4C17 2.5 19 2 19 2h1z"/>
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


export default function Footer() {
  
  const socialLinks = {
    instagram: "https://www.instagram.com/tua_instaratio/",
    twitter: "https://twitter.com/tua_twitter/",
    facebook: "https://www.facebook.com/tua_facebook/",
    linkedin: "https://www.linkedin.com/in/robel-alemayehu-978951329?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLPH37bMAT5yehvA35EW8DQ%3D%3D",
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="socialMedia">
          <a href={socialLinks.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <InstagramIcon />
          </a>
          <a href={socialLinks.twitter} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
            <TwitterIcon />
          </a>
          <a href={socialLinks.facebook} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
            <FacebookIcon />
          </a>
          <a href={socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedInIcon />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2025 robelalex.com | All Rights Reserved</p>
          <p className="footer-subtext">Crafted with passion and code</p>
        </div>
      </div>
    </div>
  )
}