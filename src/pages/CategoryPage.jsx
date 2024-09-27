"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Star,
} from "lucide-react";

const CategoryCard = ({ title, items, icon: Icon }) => (
  <motion.div
    className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-4 mb-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-2 flex items-center">
      <Icon className="mr-2" />
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-lg p-3 shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-lg font-semibold text-white">{item.icon}</span>
          <span className="ml-2 text-lg font-semibold text-white">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export function CategoryPage() {
  const [customPrompt, setCustomPrompt] = useState("");

  const moralValues = [
    { name: "Patience", icon: "🧘" },
    { name: "Respect", icon: "🤝" },
    { name: "Honesty", icon: "🤥" },
    { name: "Discipline", icon: "📅" },
  ];

  const skills = [
    { name: "Dance", icon: "💃" },
    { name: "Singing", icon: "🎤" },
    { name: "Drawing", icon: "✏️" },
    { name: "Painting", icon: "🎨" },
  ];

  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br flex justify-center from-blue-400 via-purple-500 to-pink-500 p-8 relative">
      {/* Animated background */}
      <div className="w-[700px]">
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * 768,
                y: Math.random() * 1024,
                scale: 0,
              }}
              animate={{
                x: Math.random() * 768,
                y: Math.random() * 1024,
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Describe your idea
          </motion.h1>

          <CategoryCard title="Moral Values" items={moralValues} icon={Heart} />
          <CategoryCard title="Skills" items={skills} icon={Star} />

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="custom-prompt"
              className="block text-xl font-semibold mb-2 text-white"
            >
              Custom Prompt
            </label>
            <textarea
              id="custom-prompt"
              className="w-full h-32 p-4 rounded-xl bg-gradient-to-r from-yellow-200 to-pink-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Type your custom idea here..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
            />
          </motion.div>

          <motion.button
            className="mt-6 bg-green-400 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full text-xl shadow-lg transition-all duration-300 flex items-center justify-center w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next
            <ChevronRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
