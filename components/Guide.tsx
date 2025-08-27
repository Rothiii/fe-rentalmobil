import { ROUTES } from "@/constants";
import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col pb-10">
      <div className="padding-container max-container w-full pb-16">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Kami disini untuk Anda
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Rute Perjalanan
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] text-justify">
            Nikmati perjalanan yang nyaman dengan estimasi waktu yang akurat.
            Kami melayani berbagai rute populer di Kalimantan Timur dengan
            layanan terpercaya.
          </p>
        </div>
      </div>

      {/* Routes List */}
      <div className="max-container padding-container w-full">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {ROUTES.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="bold-18 text-gray-900">{route.from}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bold-18 text-gray-900">{route.to}</span>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="regular-14 text-gray-500">Estimasi Waktu</p>
                  <p className="bold-16 text-green-600">{route.duration}</p>
                </div>
                <div className="text-center">
                  <p className="regular-14 text-gray-500">Jarak</p>
                  <p className="bold-16 text-blue-600">{route.distance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center bold-16">
          <p>--- Dan Sekitarnya ---</p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
