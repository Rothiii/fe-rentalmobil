import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Layanan Kami</h2>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={`/${feature.icon}`}
                    alt={feature.title}
                    width={400}
                    height={600}
                    className="w-full h-72 object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {feature.title}
                  </div>
                </div>
                <div className="p-4 flex flex-row justify-between">
                  <h3 className="reguler-18 text-gray-900 mb-2 w-1/2">
                    {feature.description}
                  </h3>
                  <div className="flex flex-col justify-end items-center">
                    <span className="regular-14 text-gray-500">Mulai dari</span>
                    <span className="bold-18 text-teal-600">{feature.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
