("use client");
import Footer from "../../UI/Footer";
import vid from "/video/introd.mp4";
import vid1 from "/video/introd.mp4";

// import vid from "/mini/introd.av1.mp4";
// import vid1 from "/mini/about.av1.mp4";

import Navbar from "../..//UI/NavBar";
import "./Home.css";

import { SampleHome } from "@/components/component/SampleHome";
function Home() {
  return (
    <>
      <div className="bg-color text-white">
        <BG2 />
        <SampleHome />
        <Footer />
      </div>
    </>
  );
}

export default Home;
function BG2() {
  return (
    <div className="relative flex flex-col h-screen">
      {/* Video Background (Desktop) */}
      <video
        className="w-full h-5/6 object-cover hidden sm:block" // Hidden on mobile
        autoPlay
        muted
        loop
      >
        <source src={vid} type="video/mp4" />
      </video>

      {/* Mobile Video Background */}
      <video
        className="w-full h-4/6 object-fit block sm:hidden" // Visible only on mobile
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={vid1} type="video/mp4" />
      </video>

      {/* Countdown Below Video */}
      <div className="w-full flex justify-center py-5 my-4">
        <CountDown />
      </div>

      {/* Navbar (Fixed) */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
    </div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2025-02-22T12:00:00"; // ISO format (YYYY-MM-DDTHH:mm:ss)


const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);
  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM); // Ensure a valid format
    const now = new Date();
    const distance = end.getTime() - now.getTime();

    if (distance < 0) {
      setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setRemaining({
      days: Math.floor(distance / DAY),
      hours: Math.floor((distance % DAY) / HOUR),
      minutes: Math.floor((distance % HOUR) / MINUTE),
      seconds: Math.floor((distance % MINUTE) / SECOND),
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex items-center text-white ">
      <CountdownItem num={remaining.days} text="days" />
      <CountdownItem num={remaining.hours} text="hours" />
      <CountdownItem num={remaining.minutes} text="minutes" />
      <CountdownItem num={remaining.seconds} text="seconds" />
    </div>
  );
};
interface CountdownItemProps {
  num: number;
  text: string;
}
const CountdownItem: React.FC<CountdownItemProps> = ({ num, text }) => {
  return (
    <div className="font-mono w-1/4 h-20 md:h-20 flex flex-col gap-1 bor md:gap-2 items-center justify-center border-r-[1px]">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="block text-xl md:text-2xl lg:text-xl xl:text-2xl text-white  font-extrabold"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs md:text-sm lg:text-base font-light">{text}</span>
    </div>
  );
};

