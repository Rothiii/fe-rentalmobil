import Image from "next/image";

function Why() {
  return (
    <section className="max-container padding-container">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Right side - Why Choose Us */}
        <div className="flex-1">
          <h2 className="bold-32 lg:bold-40 text-black-100 mb-8">
            Mengapa Memilih Kami?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-16 text-white">1</span>
              </div>
              <p className="regular-16 text-gray-600">
                Layanan kami terbuka 24 jam. Kami siap membantu anda kapan saja.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-16 text-white">2</span>
              </div>
              <p className="regular-16 text-gray-600">
                Kami memastikan pengiriman cepat dan tepat waktu untuk kebutuhan
                bisnis Anda.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-16 text-white">3</span>
              </div>
              <p className="regular-16 text-gray-600">
                Tarif Bersaing. Kami menawarkan harga terbaik tanpa mengorbankan
                kualitas layanan yang diberikan.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                <span className="bold-16 text-white">4</span>
              </div>
              <p className="regular-16 text-gray-600">
                Kepuasan Pelanggan. Pelayanan ramah dan responsif untuk menjamin
                pengalaman pengiriman yang memuaskan.
              </p>
            </div>
          </div>
        </div>

        {/* Left side - Image with price card */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-[500px] mx-auto">
            {/* House Image */}
            <Image
              src="/salesman.jpg"
              alt="Modern House"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl"
            />

            {/* Price Card */}
            <div className="absolute top-4 left-4 bg-white rounded-xl p-4 shadow-lg min-w-[200px]">
              <h3 className="bold-18 text-gray-900 mb-1">Harga</h3>
              <p className="regular-14 text-gray-500 mb-2">Dimulai Dari</p>
              <p className="bold-20 text-green-600">Rp.100.000,00</p>
            </div>

            {/* 100% Terpercaya Badge */}
            <div className="absolute bottom-4 left-4 bg-yellow-400 px-4 py-2 rounded-lg">
              <p className="bold-16 text-gray-900">100% Terpercaya</p>
            </div>
          </div>
        </div>

      </div>

      {/* Statistics Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="bold-40 lg:bold-64 text-black-100">20+</h3>
          <p className="regular-16 text-gray-500 mt-2">
            Perjalanan Setiap Hari
          </p>
        </div>
        <div>
          <h3 className="bold-40 lg:bold-64 text-black-100">10</h3>
          <p className="regular-16 text-gray-500 mt-2">Mobil Tersedia</p>
        </div>
        <div>
          <h3 className="bold-40 lg:bold-64 text-black-100">10000+</h3>
          <p className="regular-16 text-gray-500 mt-2">
            Penumpang Telah Sampai Tujuan
          </p>
        </div>
      </div>
    </section>
  );
}

export default Why;
