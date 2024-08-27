// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   // Assume isLoggedIn is a state that determines if the user is logged in or not
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {/* Navbar start */}
//       <nav
//         className="navbar navbar-expand-lg"
//         style={{ backgroundColor: "#e3f2fd" }}
//       >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="#">
//             Club Hub
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="">
//                   Home
//                 </Link>
//               </li>

//               {isLoggedIn ? (
//                 <>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="Gallery">
//                       Gallery
//                     </Link>
//                   </li>
//                   <li className="nav-item dropdown">
//                     <Link
//                       className="nav-link dropdown-toggle"
//                       to="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Functions
//                     </Link>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <Link className="dropdown-item" to="Sports">
//                           Sports
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="Events">
//                           Events
//                         </Link>
//                       </li>
//                       <li>
//                         <Link className="dropdown-item" to="Services">
//                           Services
//                         </Link>
//                         F
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="Tournament">
//                       Tournament
//                     </Link>
//                   </li>
//                 </>
//               ) : null}
//             </ul>

//             {isLoggedIn ? (
//               <form className="d-flex">
//                 <Link className="btn btn-outline-danger" to="Logout">
//                   Logout
//                 </Link>
//               </form>
//             ) : (
//               <>
//                 <form className="d-flex">
//                   <Link className="btn btn-outline-success" to="Register">
//                     Register
//                   </Link>
//                 </form>
//                 &nbsp;
//                 <form className="d-flex">
//                   <Link className="btn btn-outline-success" to="Login">
//                     Login
//                   </Link>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//       {/* Navbar End */}
//     </div>
//   );
// }


import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="#">Club Hub</Link> */} 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Gallery">Gallery</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Functions
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="Events">Events</Link></li>
                <li><Link className='dropdown-item' to="Tournament">Tournaments</Link> </li>
                <li><Link className="dropdown-item" to="Services">Services</Link></li>
                <li><Link className="dropdown-item" to="meeting">Meeting</Link></li>
                <li><Link className='dropdown-item' to="Award">Award</Link></li> 
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="FAQs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ContactForm">Contact</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-success me-2" to="Register">Register</Link>
            <Link className="btn btn-outline-success" to="Login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;