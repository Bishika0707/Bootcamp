import React from 'react'

function About() {
  return (
   <div>
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">About Us</h2>
        <p className="mt-4 text-gray-600 text-lg">
          We are passionate about delivering exceptional solutions that make a difference. Our team is dedicated to innovation, creativity, and excellence.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        <img src="https://via.placeholder.com/400" alt="About Image" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="text-gray-700 md:w-1/2">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-4">
            Our mission is to empower individuals and businesses by providing cutting-edge solutions tailored to their needs. We believe in fostering growth, collaboration, and trust.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Our Vision</h3>
          <p className="mt-4">
            To be a global leader in our industry, setting benchmarks for quality, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default About;

