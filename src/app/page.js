import Link from "next/link";
import Image from "next/image";
import ServicesSection from "@/components/Service";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      {/* Title */}
      <div className="py-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bangun Bisnis Anda dengan Solusi Digital Profesional
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Seorang Software Engineer berpengalaman dengan rekam jejak solid
          selama 7 tahun di berbagai industri terkemuka. Saat ini, saya
          berkontribusi aktif di{" "}
          <span className="font-semibold text-blue-700">Bank Mandiri</span>,
          membawa keahlian mendalam yang terasah melalui pengalaman berharga di{" "}
          <span className="font-semibold text-blue-700">Bank BNI</span>,{" "}
          <span className="font-semibold text-blue-700">Tiket.com</span>,{" "}
          <span className="font-semibold text-blue-700">Jakarta Property</span>,{" "}
          <span className="font-semibold text-blue-700">SeaBank</span>, dan{" "}
          <span className="font-semibold text-blue-700">Garena</span> (sebagai
          IT Engineer). Jejak karir internasional saya mencakup kolaborasi
          dengan berbagai startup inovatif di{" "}
          <span className="font-semibold text-green-700">Jepang</span> dan{" "}
          <span className="font-semibold text-green-700">Singapura</span>,
          memperkaya perspektif global saya dalam pengembangan perangkat lunak.
          Dengan pemahaman yang luas tentang siklus pengembangan perangkat
          lunak, arsitektur sistem, dan kemampuan adaptasi lintas sektor yang
          terbukti, saya siap menghadirkan solusi teknologi yang tidak hanya
          efektif dan inovatif, tetapi juga selaras dengan kebutuhan spesifik
          Anda.
        </p>
        <div className="mt-5">
          <a
            href="#"
            className="bg-blue-600 rounded-4xl p-3 shadow-2xl text-white font-semibold hover:bg-blue-900"
          >
            <i className="ri-contacts-line pr-2"></i>
            Contact
          </a>
        </div>
      </div>
      {/* Title */}

      {/* Background */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/bg.jpg"
          alt="background"
          fill
          className="object-cover rounded-4xl"
          priority
        />
      </div>
      {/* Background */}

      <div className="py-4"></div>
      <ServicesSection />

      <div className="py-4"></div>
      <Pricing />

      <div className="py-4"></div>
      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200 rounded-t-4xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex justify-start items-center gap-3 sm:gap-4">
                <Image
                  src="/icon.jpg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <p className="text-xl font-semibold text-gray-800">
                  Mohammad Reza
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-500">Kab. Bogor</p>
              <p className="mt-1 text-sm text-gray-500">Email: reza@dev.com</p>
              <p className="mt-1 text-sm text-gray-500">
                Telepon: +62 813 8841 0749
              </p>
            </div>

            <div className="md:flex md:items-start md:space-x-8">
              <div className="mb-8 md:mb-0">
                <h6 className="text-sm font-semibold text-gray-700 uppercase mb-4">
                  Navigasi
                </h6>
                <ul className="list-none space-y-2">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-8 md:mb-0">
                <h6 className="text-sm font-semibold text-gray-700 uppercase mb-4">
                  Ikuti Kami
                </h6>
                <ul className="list-none space-y-2">
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="ri-facebook-fill text-blue-600 mr-2 align-middle"></i>{" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="ri-twitter-x-line text-black mr-2 align-middle"></i>{" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="ri-instagram-fill text-pink-500 mr-2 align-middle"></i>{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500 hover:text-gray-900">
                      <i className="ri-linkedin-fill text-blue-800 mr-2 align-middle"></i>{" "}
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            &copy; 2025 Mohammad Reza. Hak cipta dilindungi.
          </div>
        </div>
      </footer>
      {/* Footer */}
    </>
  );
}
