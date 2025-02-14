"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-8"
          >
            Welcome to Our Amazing Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-center mb-12"
          >
            Discover the power of modern web design and animation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center"
          >
            <Link
              href="/about"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-100 transition duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Responsive Design", description: "Our websites look great on any device", icon: "📱" },
              {
                title: "Modern Animations",
                description: "Engage users with smooth, interactive animations",
                icon: "🎭",
              },
              {
                title: "Fast Performance",
                description: "Lightning-fast load times for better user experience",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers and take your online presence to the next level.
          </p>
          <Link
            href="/contact"
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

