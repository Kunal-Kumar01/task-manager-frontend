import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const text = "Manage Your Tasks Intelligently";
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-4xl font-bold mb-2 text-center">iTask</h1>
        {/* <div style={{ display: "flex", fontSize: "2rem", fontWeight: "bold" }}> */}
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
      </div>
    </div>
  );
};

export default LandingPage;
