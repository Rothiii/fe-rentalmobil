"use client";

import Image from "next/image";
import Button from "./Button";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>
      {/* LEFT */}

      <div className="relative z-30 flex flex-1 flex-col xl:w-2/3">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px]  w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88"> Travel Kalimantan Timur</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Dapatkan layanan antar jemput yang cepat, nyaman, dan aman. Dan
          pengiriman barang dengan satu layanan terpercaya. Kecepatan, keamanan,
          dan kenyamanan dalam satu solusi. Kami hadir untuk memenuhi kebutuhan
          transportasi Anda.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            5000+
            <span className="regular-16 lg:regular-20 ml-1">Pelanggan</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Hubungi Sekarang"
            variant="btn_green"
            onClick={() => {
              const phoneNumber = "6287841222233"; // Replace with your WhatsApp number
              const message =
                "Halo, saya tertarik dengan layanan Travel Kalimantan Timur. Bisa tolong berikan jadwal Travel/Jastip hari ini?";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              window.open(whatsappUrl, "_blank");
            }}
          />
        </div>
      </div>

      {/* RIGHT */}
      {/* <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="bold-20 text-gray-20"> Melayani Daerah </p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <ul className="flex flex-col gap-2 mt-6">
              <li className="regular-16 text-white">Balikpapan</li>
              <li className="regular-16 text-white">Samarinda</li>
              <li className="regular-16 text-white">Bontang</li>
              <li className="regular-16 text-white">Tanah Grogot</li>
              <li className="regular-16 text-white">Banjarmasin</li>
              <li className="regular-16 text-white">Dan Sekitarnya.</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
