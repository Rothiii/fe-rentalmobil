"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { useRef, useState } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined?: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        {/* <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden ">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="person"
                width={32}
                height={32}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div> */}
      </div>
    </div>
  );
};

function Camp() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the scroll speed here
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] cursor-pointer"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <CampSite
          backgroundImage="bg-bg-img-1" //Todo
          title="Balikpapan" //Todo
          subtitle="Kalimantan Timur" //Todo
          // peopleJoined="+50 Joined" //Todo
        />
        <CampSite
          backgroundImage="bg-bg-img-1" //Todo
          title="Tanah Grogot" //Todo
          subtitle="Kalimantan Timur" //Todo
          // peopleJoined="+50 Joined" //Todo
        />
        <CampSite
          backgroundImage="bg-bg-img-1" //Todo
          title="IKN" //Todo
          subtitle="Ibu Kota Nusantara" //Todo
          // peopleJoined="+50 Joined" //Todo
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong> Bingung </strong> dan Tidak Tahu Arah?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Mulai dari kekhawatiran para penumpang ketika pertama kali bepergian
            ke kota yang baru, kemungkinan tersesat sangat besar. Itulah mengapa
            kami hadir untuk Anda yang ingin memulai perjalanan antar kota
            dengan nyaman dan aman.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}

export default Camp;
