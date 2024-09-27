import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Video, LogIn, UserPlus } from 'lucide-react'

export function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-full w-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative">
      {/* Background animations */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-yellow-300 rounded-full"
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
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
        <motion.h1
          className="text-6xl font-bold mb-4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          KidVid Creator
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create amazing AI videos for kids!
        </motion.p>

        <motion.button
          className="bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition-all duration-300 transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <span className="flex items-center" onClick={() => navigate('/category-page')}>
            <Sparkles className="mr-2" />
            Generate Video
            <Video className="ml-2" />
          </span>
        </motion.button>

        {isHovered && (
          <motion.div
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Click to start the magic!
          </motion.div>
        )}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
          <motion.button
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn className="mr-2" size={18} />
            Login
          </motion.button>
          <motion.button
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <UserPlus className="mr-2" size={18} />
            Sign Up
          </motion.button>
        </div>
      </div>
    </div>
  )
}