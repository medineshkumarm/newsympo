("use client");
import Footer from "../../UI/Footer";
import vid from "/video/introd.mp4";
import Navbar from "../..//UI/NavBar";
import "./Home.css";
// import { Carousels } from "@/UI/Carousels";
// import General from "@/UI/General";

// import BG2 from "@/BG2";
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
      <div className="absolute p-3 inset-0 flex flex-col items-center text-white blurit">
        <div className="mt-auto -mb-8  sm:-mb-4 w-full  ">
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
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { Carousel } from "@/components/ui/carousel";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "03/09/2024";

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
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex items-center  text-white">
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
    <div className="font-mono w-1/4 h-20 md:h-20 flex flex-col gap-1 md:gap-2 items-center justify-center border-r-[1px]">
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

// export default CountDown;
