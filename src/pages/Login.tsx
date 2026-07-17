import { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#ECECF7] flex items-center justify-center p-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-7xl h-[720px] bg-white rounded-[35px] overflow-hidden shadow-2xl flex"
      >
        {/* LEFT */}

        <div className="w-full lg:w-[45%] flex flex-col justify-center px-16 z-20">

          {/* Logo */}

          <div className="flex items-center gap-3 mb-20">
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
              S
            </div>

            <span className="font-semibold text-zinc-700">
              System Logo
            </span>
          </div>

          <h1 className="text-5xl font-bold text-zinc-800 leading-tight">
            Welcome to
            <br />
            Login System
          </h1>

          <p className="text-zinc-400 mt-3 mb-12">
            Sign in by entering the information below
          </p>

          {/* Username */}

          <div className="relative mb-5">

            <User
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Username"
              className="w-full h-14 rounded-full bg-zinc-100 border border-transparent focus:border-violet-500 outline-none pl-14 pr-5 transition"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-14 rounded-full bg-zinc-100 border border-transparent focus:border-violet-500 outline-none pl-14 pr-14 transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          {/* Options */}

          <div className="flex justify-between items-center mt-5 text-sm">

            <label className="flex items-center gap-2 text-zinc-500">

              <input type="checkbox" />

              Remember me

            </label>

            <a
              href="#"
              className="text-violet-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          {/* Buttons */}

          <div className="flex items-center gap-8 mt-10">

            <button
              className="
              h-14
              px-12
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500
              text-white
              font-semibold
              shadow-xl
              hover:scale-105
              transition
            "
            >
              Login
            </button>

            <button className="text-zinc-600 hover:text-violet-600 transition font-medium">
              Sign Up
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex relative flex-1 items-center justify-center overflow-hidden">

          {/* Purple Background */}

          <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-full
            bg-gradient-to-br
            from-violet-500
            via-violet-700
            to-purple-900
          "
            style={{
              clipPath:
                "ellipse(82% 100% at 100% 50%)",
            }}
          />

          {/* Glow */}

          <div className="absolute w-[650px] h-[650px] rounded-full bg-white/10 blur-3xl" />

          {/* Laptop */}

          <motion.img
            animate={{
              y: [0, -12, 0],
              rotate: [-10, -8, -10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1200"
            alt=""
            className="
              relative
              w-[70%]
              rounded-3xl
              shadow-[0_40px_80px_rgba(0,0,0,.35)]
              rotate-[-10deg]
              z-20
            "
          />

        </div>
      </motion.div>
    </div>
  );
}
