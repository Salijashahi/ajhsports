import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Import your global header & footer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Clean icons from react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

//import image
import loginimg from "../assets/login_img.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">

      {/* ---------------- NAVBAR ---------------- */}
      <Navbar />

      {/* ---------------- LOGIN CONTENT ---------------- */}
      <div className="flex-1 w-full flex justify-center">
        <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16">

          {/* LEFT SIDE — LOGIN FORM */}
          <div className="max-w-[430px]">

            <h2 className="text-[32px] font-bold mb-2">Sign in</h2>

            <p className="text-sm text-gray-700 mb-6">
              Don’t have an account?
              <Link to="/signup" className="text-blue-600 ml-1 font-medium">
                Create now
              </Link>
            </p>

            <form onSubmit={handleLogin}>

              {error && (
                <p className="text-red-600 mb-3 text-sm">{error}</p>
              )}

              {/* EMAIL */}
              <label className="text-sm font-medium">E-mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded mb-5 mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 border rounded mb-2 mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex justify-between items-center mt-2 mb-6">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Remember me
                </label>
                <span className="text-blue-600 text-sm cursor-pointer">Forgot Password?</span>
              </div>

              <button className="w-full py-3 bg-[#FFD23F] text-black font-semibold rounded-lg">
                Sign in
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-gray-300 w-full" />
              <span className="text-gray-500 text-sm">OR</span>
              <div className="h-px bg-gray-300 w-full" />
            </div>

            {/* Google Login */}
            <button className="border w-full py-3 rounded-full flex items-center justify-center gap-3 mb-4">
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>

            {/* Facebook Login */}
            <button className="border w-full py-3 rounded-full flex items-center justify-center gap-3">
              <FaFacebookF className="text-blue-600 text-xl" />
              Continue with Facebook
            </button>

          </div>

          {/* RIGHT SIDE — LOGO */}
          <div className="flex justify-center items-start mt-6">
            <img
              src={loginimg}
              className="max-w-[380px] rounded shadow"
            />
          </div>

        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />

    </div>
  );
}
