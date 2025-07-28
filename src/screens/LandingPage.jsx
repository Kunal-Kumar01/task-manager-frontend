import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const text = "Manage Your Tasks Intelligently";
  return (
    <div className="min-h-screen fixed inset-0 flex flex-col justify-center items-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full text-center flex flex-col mx-auto gap-8">
        <h1 className="text-4xl font-bold mb-2 text-center">iTask</h1>
        <div className="flex justify-center font-bold text-2xl">
          {[...text].map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: i * 0.005, stiffness: 100 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        <div className="flex justify-center gap-8 align-items">
          <button
            className="
    w-[120px]  px-4 py-2 bg-#213547-500 text-white rounded-lg
  transition-transform duration-75
  active:scale-95 active:bg-#213547-600
  hover:scale-105 hover:bg-#213547-400 hover:border-blue-600
  border-2 border-white
  shadow-md
"
          onClick={()=>navigate("login")}>
            Login
          </button>
          <button
            className="
    w-[120px]  px-4 py-2 bg-#213547-500 text-white rounded-lg
  transition-transform duration-75
  active:scale-95 active:bg-#213547-600
  hover:scale-105 hover:bg-#213547-400 hover:border-blue-600
  border-2 border-white
  shadow-md
"
          onClick={()=>navigate("signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
