"use client";

import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const packages = [
    {
      title: "Solusi Portfolio & Landing Page Impresif",
      icon: <i className="ri-rocket-line text-orange-700 pr-2"></i>,
      price: "Mulai dari Rp 1.5 Juta",
      description: "Tampil memukau & konversi tinggi!",
      features: [
        "Desain Profesional (1-3 Hal)",
        "Responsif Sempurna",
        "SEO Dasar",
        "Support 7 Hari",
      ],
    },
    {
      title: "Website Bisnis Profesional yang Siap Berkembang",
      icon: <i className="ri-bar-chart-fill text-cyan-700 pr-2"></i>,
      price: "Investasi Mulai dari Rp 3.5 Juta",
      description: "Kredibilitas & jangkauan bisnis meningkat!",
      features: [
        "Desain Kustom (5-10 Hal)",
        "Integrasi API",
        "SEO Lanjut",
        "Support 30 Hari",
      ],
    },
    {
      title: "Solusi Website Skala Besar & E-commerce Terdepan",
      icon: <i className="ri-shield-check-line text-blue-700 pr-2"></i>,
      price: "Penawaran Terbaik Mulai dari Rp 6 Juta",
      description: "Platform handal untuk sukses digital!",
      features: [
        "Skalabilitas 10+ Halaman",
        "Full Custom Development",
        "Integrasi Pembayaran Aman",
        "Pemeliharaan 3 Bulan",
        "Performa Kilat",
      ],
    },
    {
      title: "Aplikasi Mobile Inovatif untuk Android & iOS",
      icon: <i className="ri-cellphone-line text-purple-700 pr-2"></i>,
      price: "Konsultasikan Ide Aplikasi Anda! (Mulai dari Rp 15 Juta)",
      description: "Ubah ide jadi aplikasi interaktif & bernilai!",
      features: [
        "Native/Cross-Platform",
        "UI/UX Memukau",
        "Fitur Custom Unggulan",
        "Integrasi Sistem",
        "Pengujian Mendalam",
        "Performa & Skalabilitas",
        "Full Support Awal",
        "Potensi Teknologi Terkini",
      ],
    },
  ];

  return (
    <section className="container mx-auto py-20 bg-[#f7f9fc] rounded-4xl">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Paket Jasa</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan bisnismu. Kami siap membantu
          membangun kehadiran digitalmu lebih kuat dan profesional.
        </p>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-[#0d0d09]"></div>
              <h3 className="text-2xl font-semibold mb-4">
                <span>{pkg.icon}</span>
                {pkg.title}
              </h3>
              <p className="text-3xl font-bold text-[#053166] mb-6">
                {pkg.price}
              </p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center gap-2"
                  >
                    <i className="ri-checkbox-circle-line text-teal-500"></i>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-[#21130d] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
