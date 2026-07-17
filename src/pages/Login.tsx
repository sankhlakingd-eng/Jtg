import { useEffect, useState } from "react";
import { Eye, EyeOff, Moon, Sun, User, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      dark
        ? "bg-[#09090B]"
        : "bg-[#EEF1F7]"
    }`}>

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600/30 blur-[130px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/30 blur-[180px]" />

      </div>

      <div className="relative flex items-center justify-center min-h-screen p-6">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5 }}
          className={`relative overflow-hidden rounded-[40px] max-w-7xl w-full shadow-2xl flex ${
            dark
              ? "bg-zinc-900 border border-white/10"
              : "bg-white"
          }`}
        >

          {/* LEFT */}

          <div className="w-full lg:w-[45%] p-12 lg:p-20 flex flex-col justify-center">

            {/* Header */}

            <div className="flex justify-between items-center mb-16">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>

                <div>
                  <h3 className={`font-bold ${
                    dark ? "text-white" : "text-zinc-900"
                  }`}>
                    KINGCLOUD
                  </h3>

                  <p className="text-xs text-zinc-400">
                    Hosting Panel
                  </p>
                </div>

              </div>

              <button
                onClick={() => setDark(!dark)}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition ${
                  dark
                    ? "bg-zinc-800 text-yellow-400"
                    : "bg-zinc-100 text-zinc-700"
                }`}
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

            </div>

            <h1 className={`text-5xl font-bold ${
              dark ? "text-white" : "text-zinc-900"
            }`}>
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-zinc-400 mb-10">
              Login to your hosting panel.
            </p>

            {/* Username */}

            <div className={`flex items-center h-14 rounded-2xl px-5 mb-5 border transition ${
              dark
                ? "bg-zinc-800 border-zinc-700"
                : "bg-zinc-50 border-zinc-200"
            }`}>

              <User className="text-zinc-400" size={18} />

              <input
                placeholder="Username"
                className={`ml-4 w-full outline-none bg-transparent ${
                  dark ? "text-white" : "text-zinc-900"
                }`}
              />

            </div>

            {/* Password */}

            <div className={`flex items-center h-14 rounded-2xl px-5 border transition ${
              dark
                ? "bg-zinc-800 border-zinc-700"
                : "bg-zinc-50 border-zinc-200"
            }`}>

              <Lock className="text-zinc-400" size={18} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`ml-4 w-full outline-none bg-transparent ${
                  dark ? "text-white" : "text-zinc-900"
                }`}
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? (
                  <EyeOff className="text-zinc-400" size={18} />
                ) : (
                  <Eye className="text-zinc-400" size={18} />
                )}
              </button>

            </div>

            {/* Remember */}

            <label className="flex items-center gap-3 mt-6 text-sm text-zinc-400">

              <input
                type="checkbox"
                className="accent-violet-600"
              />

              Remember Me

            </label>

            {/* Login */}

            <motion.button
              whileHover={{
                scale: 1.03
              }}
              whileTap={{
                scale: .97
              }}
              className="mt-10 h-14 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-purple-700 text-white font-semibold shadow-xl shadow-violet-600/30"
            >
              Login
            </motion.button>

          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700" />

            <div className="absolute w-[700px] h-[700px] rounded-full bg-white/10 blur-[100px]" />

            <motion.img
              animate={{
                y: [0, -15, 0],
                rotate: [-10, -8, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200"
              alt="Laptop"
              className="relative w-[75%] rounded-3xl shadow-2xl rotate-[-10deg]"
            />

          </div>

        </motion.div>

      </div>

    </div>
  );
}
