"use client";
import vid from "/video/introd.mp4";
import CountDown from "./UI/CountDown";
import Navbar from "./UI/NavBar";
export default function BG2() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="w-full h-5/6 object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute p-3 inset-0 flex flex-col items-center text-white">
        <div className="mt-auto my-16  w-full  ">
          {/* Move Countdown to the bottom */}
          <CountDown />
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
    </div>
  );
}


