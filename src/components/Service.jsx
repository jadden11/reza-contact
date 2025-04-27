"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Membangun website profesional dan responsif untuk kebutuhan bisnis atau personal Anda.",
      icon: <i className="ri-macbook-line" size={40}></i>,
    },
    {
      title: "Mobile Apps",
      description:
        "Membuat aplikasi Android dan iOS yang cepat, ringan, dan modern.",
      icon: <i className="ri-smartphone-line" size={40}></i>,
    },
    {
      title: "UI/UX Design",
      description:
        "Mendesain tampilan yang menarik dan pengalaman pengguna yang optimal untuk aplikasi Anda.",
      icon: <i className="ri-paint-line" size={40}></i>,
    },
    {
      title: "API & Backend Development",
      description:
        "Membangun API yang aman, cepat, dan scalable untuk mendukung aplikasi Anda.",
      icon: <i className="ri-server-line" size={40}></i>,
    },
  ];

  return (
    <section
      id="services"
      className="container mx-auto py-20 bg-[#f5f7fa] rounded-4xl"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Layanan Saya
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Saya menawarkan layanan digital terbaik untuk membantu bisnis Anda
            tumbuh dan berinovasi.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              // viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-100 flex flex-col items-center text-center group"
            >
              <div className="bg-blue-500 text-white p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
