export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-950 via-gray-900 to-black">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Register
        </h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              className="w-full p-3 mt-1 bg-black/20 text-white border border-gray-600 rounded-lg outline-none focus:border-blue-500 transition-all"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 bg-black/20 text-white border border-gray-600 rounded-lg outline-none focus:border-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-300">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 bg-black/20 text-white border border-gray-600 rounded-lg outline-none focus:border-blue-500 transition-all"
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg hover:scale-105 transition-all font-semibold shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
