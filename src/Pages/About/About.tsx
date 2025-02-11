// Reusable Table Component
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";
import { Link } from "react-router-dom";
// Define the type for an event
type Event = {
  name: string;
  prelims: string;
  mains: string;
  venue: string;
};

// Define the prop type for ScheduleTable
type ScheduleTableProps = {
  events: Event[];
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({ events }) => (
  <>
    <div className="overflow-hidden rounded-lg border border-gray-300">
      <div className="grid w-full grid-cols-4 divide-y divide-gray-300 text-xs md:grid-cols-4">
        {/* Table Headers */}
        <div className="flex w-full items-center justify-center p-4 sm:p-8 border-r-[.1px]">
          <span className="font-bold text-xl">Event</span>
        </div>
        <div className="flex w-full items-center justify-center p-4 sm:p-8 border-r-[.1px]">
          <span className="font-bold text-xl">Prelims (Online)</span>
        </div>
        <div className="flex w-full items-center justify-center p-4 sm:p-8 border-r-[.1px]">
          <span className="font-bold text-xl">Finals</span>
        </div>
        <div className="flex w-full items-center justify-center p-4 sm:p-8 border-r-[.1px]">
          <span className="font-bold text-xl">Venue</span>
        </div>
      </div>
      {/* Table Body */}
      {events.map((event, index) => (
        <div
          key={index}
          className="grid w-full grid-cols-4 divide-y divide-gray-300 text-xs md:grid-cols-4"
        >
          <div className="flex w-full items-center justify-center p-4 sm:p-8 border-[.1px]">
            <span>{event.name}</span>
          </div>
          <div className="flex w-full items-center justify-center p-4 sm:p-8 border-[.1px]">
            <span>{event.prelims}</span>
          </div>
          <div className="flex w-full items-center justify-center p-4 sm:p-8 border-[.1px]">
            <span>{event.mains}</span>
          </div>
          <div className="flex w-full items-center justify-center p-4 sm:p-8 border-[.1px]">
            <span>{event.venue}</span>
          </div>
        </div>
      ))}
    </div>
  </>
);

// Main Component
const Schedule: React.FC = () => {
  // Data for events
  const events: Event[] = [
    {
      name: "ENVISION",
      prelims: "17th Feb 2025 (6pm - 7pm)",
      mains: "22th Feb 2025 (8am - 11:30am)",
      venue: "CSE BLOCK- I AV HALL",
    },
    {
      name: "CODE-RPG",
      prelims: "18th FEB 2025 (6pm - 7pm)",
      mains: "22th Feb 2025  (8am - 11:30am)",
      venue: "COMPUTER CENTER - II",
    },
    {
      name: "BGMI-TOURNAMENT",
      prelims: "19th Feb 2025 (5pm - 8pm)",
      mains: "22th Feb 2025  (8am - 11:30am)",
      venue: "COMPUTER CENTER - III",
    },
    {
      name: "PEC's IPL AUCTION",
      prelims: "20th Feb 2025 (5pm - 7pm)",
      mains: "22th Feb 2025 (8am - 11:30am)",
      venue: "CSE BLOCK- III AV HALL",
    },
  ];

  return <ScheduleTable events={events} />;
};

export default function About() {
  return (
    <>
      <Navbar />
      {/* <div className="pt-10"></div> */}
      <div className="w-full text-white py-12 bg-color lg:py-24 xl:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              XERONE 2K25
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to Xerone 2K25 Symposium, where innovation and excitement
              collide! Explore a mix of technical brilliance and non-technical
              fun as we present a variety of engaging events designed to
              challenge and entertain.
            </p>
          </div>
        </div>
        <div className="container grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-2 md:py-12 lg:gap-10  md:flex-row-reverse">
          <div className="space-y-4">
            <p className="text-gray-400 md:text-base/relaxed lg:text-xl/relaxed dark:text-gray-400">
              Embark on a journey through cutting-edge technology and
              exhilarating competition as we present a diverse set of events
              designed to challenge and entertain.
            </p>
            <ul className=" text-gray-400 grid gap-2 text-sm list-disc list-outside md:grid-cols-2 md:gap-3 lg:text-base mx-auto">
              <li>Unleash innovation in the realm of automation!</li>
              <li>Level up your coding skills in an epic quest!</li>
              <li>Gear up for gaming glory in the ultimate clash!</li>
              <li>Bid, strategize, and conquer the virtual cricket arena!</li>
            </ul>
          </div>
          <div className="flex text-white items-center justify-center">
            <video
              className="rounded-lg object-cover"
              height="300"
              width="400"
              autoPlay
              muted
              loop
            >
              <source src="/video/introd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="container grid max-w-5xl gap-6 px-4 py-8  md:py-12 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Schedule</h2>
            <div className="overflow-hidden rounded-lg border">
              <Schedule />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-1 m-0 p-0">
          <section className="w-full pb-24">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className=" neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Register
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hurry up! Event closes on Feb 16th, 2025 at 12pm. Reserve your
                  spot at the symposium! Register now.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-[8px] border border-gray-200 bg-white text-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="https://docs.google.com/forms/d/1AbraNRR2x8-QYULluq9lxsc4mNMOOMPdd94Q9GEsPZE/viewform?edit_requested=true"
                  target="_blank"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
