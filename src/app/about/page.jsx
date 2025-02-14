"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-center mb-12"
          >
            We are a team of passionate developers and designers creating amazing web experiences
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, our company has quickly grown from a small startup to a leading web development agency.
                We're driven by our passion for creating beautiful, functional websites that help businesses succeed
                online.
              </p>
              <p className="text-gray-600">
                Our team of experts combines creativity with technical skills to deliver cutting-edge solutions for our
                clients. We believe in the power of the web to transform businesses and are committed to staying at the
                forefront of web technologies.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src="/placeholder.svg" alt="Our Team" width={600} height={400} className="rounded-lg shadow-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", description: "We constantly push the boundaries of what's possible on the web" },
              {
                title: "Quality",
                description: "We're committed to delivering the highest quality work for our clients",
              },
              { title: "Collaboration", description: "We believe in the power of teamwork and open communication" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

