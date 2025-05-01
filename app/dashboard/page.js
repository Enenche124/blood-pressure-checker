"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to Your Dashboard!</h1>
      <p className="text-lg mb-6 max-w-xl">
        Thank you for signing up. We'll keep you updated.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
