"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      console.log("User email: ", email);
      router.push("/dashboard");
    }
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          High Pressure Checker
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Real-time monitoring and alerts for industrial pressure systems. Stay safe, informed, and in control.
        </p>
        <form
  onSubmit={handleSubmit}
  className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4 transition-all"
>
  <input
    type="email"
    placeholder="Enter your email address"
    className="flex-1 px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400 text-gray-800 transition"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button
    type="submit"
    className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-700 shadow-md transition-all"
  >
    Sign Up
  </button>
</form>

      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose High Pressure Checker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Accurate Readings</h3>
            <p>Get reliable and precise pressure data from your systems 24/7.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
            <p>Be notified instantly when pressure exceeds safe limits.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p>Connect seamlessly with your existing industrial systems and dashboards.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>© 2025 APST J.A. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
        <div className="mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>      
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            Instagram
          </a>  
        </div>
      </footer>
    </div>  
  );
}
