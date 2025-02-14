"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-center mb-12"
          >
            Get in touch with us for any inquiries or feedback
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold mb-6 text-black">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Contact Information</h2>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Web Dev Street, Digital City, 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Us</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            {/* Replace with an actual map component or embed a Google Maps iframe */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

