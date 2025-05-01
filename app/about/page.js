"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>APST J.A's High Pressure Checker</strong> helps industries monitor and manage
          pressure systems safely and efficiently. With real-time alerts and easy integration,
          we make safety and reliability our top priority.
        </p>
      </div>
    </div>
  );
}
