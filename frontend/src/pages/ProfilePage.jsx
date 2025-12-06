import { useState } from "react";
// Import your global header & footer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ProfilePage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
    
          {/* ---------------- NAVBAR ---------------- */}
          <Navbar />

      

      {/* Page Content */}
      <div className="max-w-6xl mx-auto w-full py-10 px-4">

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 h-16 w-16 rounded-lg flex items-center justify-center text-xl font-bold">
              JS
            </div>
            <div>
              <h2 className="text-xl font-semibold">John Smith <span className="text-gray-500 text-sm">Player</span></h2>
              <p className="text-sm text-gray-500">Central Coast, NSW</p>
              <p className="text-xs text-gray-400">Passionate tennis player with 5+ years of experience.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-sm">
              Settings
            </button>
            <button className="px-5 py-2 rounded-md bg-[#ffcb05] hover:bg-[#f5bf00] text-sm">
              Connect
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-10 border-b">
          {["overview", "personal", "stats", "preferences", "account"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-6 py-3 capitalize text-sm ${
                tab === item
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item === "personal" ? "Personal Info" :
               item === "stats" ? "Stats & Activity" :
               item}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {tab === "overview" && (
          <div className="mt-8">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-gray-500 text-xs">Bookings</p>
                <h2 className="text-3xl font-semibold mt-2">47</h2>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-gray-500 text-xs">Hours Played</p>
                <h2 className="text-3xl font-semibold mt-2">156</h2>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border">
                <p className="text-gray-500 text-xs">Win Rate</p>
                <h2 className="text-3xl font-semibold mt-2">68%</h2>
              </div>
            </div>

            {/* Monthly Goal Progress */}
            <div className="bg-white p-6 rounded-lg shadow-md border mt-8">
              <p className="text-gray-600 font-medium">Monthly Goal Progress</p>
              <p className="text-sm text-gray-500 mb-3">14 of 20 hours this month</p>
              <input type="range" min="0" max="20" value="14" className="w-full" />
            </div>

            {/* Achievements */}
            <div className="bg-white p-6 rounded-lg shadow-md border mt-6">
              <h3 className="font-semibold mb-3">Achievements</h3>
              <ul className="text-sm text-gray-600">
                <li>🏆 First Win</li>
                <li>⏱️ 10 Hours Played</li>
                <li>⭐ Perfect Week</li>
              </ul>
            </div>

          </div>
        )}
      </div>

      {/* ---------------- FOOTER ---------------- */}
            <Footer />
    </div>
    
  );
}
