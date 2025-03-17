import { useState, useEffect } from "react";

export default function App() {
  // Countdown Logic
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-01").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle email submission
  const handleSubscribe = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      setMessage("✅ You’ve been added to the waitlist!");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-black">
      {/* Background Image */}
      {/* <div className="absolute inset-0 bg-[url('/coming-soon.avif')] bg-no-repeat bg-center bg-cover"></div> */}

      {/* Futuristic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-900/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold  animate-pulse">
          🚀 Coming Soon
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-200">
          The future is almost here. Get ready for something extraordinary.
        </p>

        {/* Countdown Timer */}
        {timeLeft && (
          <div className="mt-6 flex justify-center space-x-4 text-3xl font-bold text-blue-400">
            <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
            <span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
          </div>
        )}

        {/* Email Subscription Form */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full md:w-96 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-center focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Notify Me
          </button>
          {message && <p className="text-sm mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
}
