import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailOrPhoneRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;

    // Email or Phone Validation
    if (
      !emailOrPhoneRegex.test(emailOrPhone) &&
      !phoneRegex.test(emailOrPhone)
    ) {
      newErrors.emailOrPhone =
        "Please enter a valid email address or phone number.";
    }

    // Password Validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(true);
      setApiError("");

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailOrPhone, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setApiError(errorData.message || "Login failed. Please try again.");
        } else {
          const data = await response.json();
          console.log("Login successful:", data);
          // Handle successful login (e.g., redirect, store token)
        }
      } catch (error) {
        console.error("Error during login:", error);
        setApiError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(to right, #00b0ff, #f06292)",
      margin: 0,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "50px",
    },
    container: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
      width: "350px",
      maxWidth: "100%",
    },
    h2: {
      textAlign: "center",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ddd",
      borderRadius: "4px",
      boxSizing: "border-box",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#007bff",
      outline: "none",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
    linkHover: {
      textDecoration: "underline",
    },
    error: {
      color: "red",
      marginBottom: "10px",
    },
    apiError: {
      color: "red",
      marginTop: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emailOrPhone">Email or Phone:</label>
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                placeholder="Enter your email or phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                style={styles.input}
                onFocus={(e) =>
                  (e.target.style.borderColor = styles.inputFocus.borderColor)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = styles.input.borderColor)
                }
              />
              {errors.emailOrPhone && (
                <span style={styles.error}>{errors.emailOrPhone}</span>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                onFocus={(e) =>
                  (e.target.style.borderColor = styles.inputFocus.borderColor)
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = styles.input.borderColor)
                }
              />
              {errors.password && (
                <span style={styles.error}>{errors.password}</span>
              )}
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
              disabled={loading}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
            {apiError && <div style={styles.apiError}>{apiError}</div>}
          </form>
          <div>
            <p>
              Not a member?{" "}
              <Link
                to="/Register"
                style={styles.link}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration =
                    styles.linkHover.textDecoration)
                }
                onMouseOut={(e) =>
                  (e.target.style.textDecoration = styles.link.textDecoration)
                }
              >
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
