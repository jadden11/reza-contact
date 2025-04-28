"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const RequestFormPage = () => {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const paket = searchParams.get("paket");
    if (paket) {
      setSelectedPackage(paket);
    }
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, termasuk nilai selectedPackage
    console.log("Form submitted!", { selectedPackage });
    router.push("/thank-you");
  };

  return (
    <section className="container mx-auto py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Formulir Permintaan Paket
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-lg mx-auto">
          Terima kasih telah memilih paket kami! Silakan isi formulir di bawah
          ini agar kami dapat memahami kebutuhan Anda lebih lanjut dan segera
          menghubungi Anda.
        </p>
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="package"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Paket yang Dipilih:
              </label>
              <input
                type="text"
                id="package"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedPackage}
                readOnly
              />
            </div>
            {/* ... (form input lainnya) ... */}
            <button
              type="submit"
              className="bg-[#21130d] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition w-full"
            >
              Kirim Permintaan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestFormPage;
