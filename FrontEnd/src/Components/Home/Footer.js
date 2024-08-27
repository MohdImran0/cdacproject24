import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
<div>
        {/* Footer */}
    <footer className="bg-dark text-white text-center py-3" style={{position: 'relative',bottom: '0',width: '100%',}} >
                <p>&copy; 2024 Events Central. All Rights Reserved.</p>
                <p><Link to="mailto:info@eventscentral.com" className="text-white">info@eventscentral.com</Link></p>
              <div>
                    <Link to="/ContactForm" className="text-white mx-2">Contact</Link>
                    <Link to="/FAQs" className="text-white mx-2">FAQs</Link>
                    <Link to="/About" className="text-white mx-2">About</Link>
              </div>
        <div className="social-icons mt-3">
                    <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-facebook-f" style={{ fontSize: '1.1rem' }}></i>
                    </Link>
                    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-twitter" style={{ fontSize: '1.1rem' }}></i>
                    </Link>
                    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-instagram" style={{ fontSize: '1.1rem' }}></i>
                    </Link>
                    <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <i className="fab fa-linkedin-in" style={{ fontSize: '1.1rem' }}></i>
                    </Link>
        </div>
    </footer>
</div>
    </>
  )
}
