import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Signup image
import signupImg from "../assets/signup_img.png";

export default function Signup() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    password: ""
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      navigate("/login");

    } catch (error) {
      setError("Cannot reach server");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 w-full flex justify-center">
        <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16">

          {/* FORM SECTION */}
          <div className="max-w-[450px]">

            <h2 className="text-[32px] font-bold mb-8">Let’s get you started</h2>

            {error && (
              <p className="text-red-600 text-sm mb-3">{error}</p>
            )}

            <form onSubmit={handleSignup}>

              {/* Full Name */}
              <label className="text-sm font-medium">Full name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full p-3 border rounded mb-5 mt-1"
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              {/* Email */}
              <label className="text-sm font-medium">Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded mb-5 mt-1"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              {/* Role */}
              <label className="text-sm font-medium">Role</label>
                <select
                  className="w-full p-3 border rounded mb-6 mt-1 bg-white"
                  required
                  value={form.role}   // <-- YOU WERE MISSING THIS
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="">Select your role</option>
                  <option value="player">Player</option>
                  <option value="coach">Coach</option>
                  <option value="parent">Parent</option>
                </select>

              {/* Phone */}
              <label className="text-sm font-medium">Phone number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded mb-5 mt-1"
                required
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              {/* Password */}
              <label className="text-sm font-medium">Create password</label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full p-3 border rounded mb-2 mt-1"
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <p className="text-xs text-gray-500 mb-5">
                Password must contain at least 8 characters, including 1 number and 1 special character.
              </p>

              {/* Location */}
              <label className="text-sm font-medium">Location</label>
              <select
                className="w-full p-3 border rounded mb-6 mt-1 bg-white"
                required
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              >
                <option value="">Select location</option>
                <option value="denistone">Denistone</option>
                <option value="north-sydney">North Sydney</option>
                <option value="hills">The Hills</option>
              </select>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-[#FFD23F] text-black font-semibold rounded-lg"
              >
                Sign Up
              </button>

            </form>

            {/* Login Redirect */}
            <p className="mt-4 text-sm text-center">
              Already a user?
              <Link to="/login" className="text-blue-600 ml-1 font-medium">
                Login
              </Link>
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center items-start mt-10">
            <img
              src={signupImg}
              className="max-w-[480px] rounded-md shadow"
              alt="signup visual"
            />
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
