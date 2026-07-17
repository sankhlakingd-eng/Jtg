import "./Login.css";
import {
  FaLayerGroup,
  FaUser,
  FaLock,
  FaEye,
} from "react-icons/fa";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Side */}
        <div className="login-left">

          <div className="logo">
            <FaLayerGroup />
            <span>System logo</span>
          </div>

          <h1>Welcome to login system</h1>

          <p>
            Sign in by entering the information below
          </p>

          <form>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Designer"
              />
            </div>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="********"
              />
              <FaEye className="eye" />
            </div>

            <div className="options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <div className="buttons">

              <button>
                Login
              </button>

              <a href="/">
                Sign up
              </a>

            </div>

          </form>

        </div>

        {/* Right Side */}

        <div className="login-right">

          <div className="circle"></div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
            alt="Laptop"
          />

        </div>

      </div>
    </div>
  );
}
