// import React, { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Register() {
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();
//   const userNameRef = useRef();
//   const emailRef = useRef();
//   const mobileRef = useRef();
//   const dobRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   async function handleSubmit(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const userName = userNameRef.current.value;
//     const email = emailRef.current.value;
//     const mobile = mobileRef.current.value;
//     const dob = dobRef.current.value;
//     const password = passwordRef.current.value;
//     const confirmPassword = confirmPasswordRef.current.value;

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const record = {
//       role,
//       userName,
//       email,
//       mobile,
//       dob,
//       password,
//     };

//     try {
//       const response = await axios.post(
//         `http://localhost:1024/${role}/new/create`,
//         record
//       );
//       console.log(response.data);
//       navigate("/login", { state: { message: response.data } });
//     } catch (error) {
//       console.error("There was an error registering the user!", error);
//     }
//   }

//   function handleRoleChange(event) {
//     setRole(event.target.value);
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           maxWidth: "400px",
//           margin: "0 auto",
//           padding: "20px",
//           backgroundColor: "#f8f9fa",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "1rem",
//             fontWeight: "bold",
//           }}
//         >
//           Register
//         </h2>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//             marginBottom: "1rem",
//           }}
//         >
//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="role"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Role:
//             </label>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <label>
//                 <input
//                   type="radio"
//                   id="User"
//                   name="role"
//                   checked={role === "User"}
//                   onChange={handleRoleChange}
//                   value="User"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>User</span>
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="Coordinator"
//                   name="role"
//                   checked={role === "Coordinator"}
//                   onChange={handleRoleChange}
//                   value="Coordinator"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>Coordinator</span>
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   id="Admin"
//                   name="role"
//                   checked={role === "Admin"}
//                   onChange={handleRoleChange}
//                   value="Admin"
//                   required
//                 />
//                 <span style={{ marginLeft: "5px" }}>Admin</span>
//               </label>
//             </div>
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="username"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               UserName:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               ref={userNameRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="email"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               ref={emailRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="mobile"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Mobile Number:
//             </label>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               ref={mobileRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="dob"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Date of Birth:
//             </label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               ref={dobRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="password"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               ref={passwordRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               marginBottom: "15px",
//             }}
//           >
//             <label
//               htmlFor="confirmPassword"
//               style={{
//                 display: "block",
//                 marginBottom: "5px",
//                 color: "#555",
//               }}
//             >
//               Confirm Password:
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               ref={confirmPasswordRef}
//               required
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             style={{
//               padding: "0.75rem 1.25rem",
//               backgroundColor: "#007BFF",
//               color: "#ffffff",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontSize: "16px",
//               marginBottom: "1rem",
//             }}
//           >
//             Register
//           </button>
//           <section style={{ textAlign: "center", fontWeight: "bold" }}>
//             Already have an account?
//             <Link className="login" to="/login" style={{ paddingLeft: 10 }}>
//               Login
//             </Link>
//           </section>
//         </div>
//       </form>
//     </div>
//   );
// }





import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const userNameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const dobRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobileRef.current.value;
    const dob = dobRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const record = {
      role,
      userName,
      email,
      mobile,
      dob,
      password,
    };

    try {
      const response = await axios.post(
        `http://localhost:1024/User/new/create`, // Correct API endpoint
        record
      );
      console.log(response.data);
      navigate("/login", { state: { message: "Registration successful!" } });
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Registration failed. Please try again.");
    }
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Register
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="role"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Role:
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <label>
                <input
                  type="radio"
                  id="User"
                  name="role"
                  checked={role === "User"}
                  onChange={handleRoleChange}
                  value="User"
                  required
                />
                <span style={{ marginLeft: "5px" }}>User</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="Coordinator"
                  name="role"
                  checked={role === "Coordinator"}
                  onChange={handleRoleChange}
                  value="Coordinator"
                  required
                />
                <span style={{ marginLeft: "5px" }}>Coordinator</span>
              </label>
              <label>
                <input
                  type="radio"
                  id="Admin"
                  name="role"
                  checked={role === "Admin"}
                  onChange={handleRoleChange}
                  value="Admin"
                  required
                />
                <span style={{ marginLeft: "5px" }}>Admin</span>
              </label>
            </div>
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="username"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              UserName:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              ref={userNameRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="mobile"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              ref={mobileRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="dob"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              ref={dobRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "15px",
            }}
          >
            <label
              htmlFor="confirmPassword"
              style={{
                display: "block",
                marginBottom: "5px",
                color: "#555",
              }}
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              ref={confirmPasswordRef}
              required
              style={{
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#555",
          }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#007bff" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
