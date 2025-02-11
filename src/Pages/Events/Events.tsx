import React from "react";
import Navbar from "../../UI/NavBar";
import "./events.css";
import "../pages.css";
import img1 from "/newImg/1.png";
import img2 from "/newImg/2.png";
import img3 from "/newImg/3.png";
import img4 from "/newImg/4.png";
import "../pages.css";
import Footer from "@/UI/Footer";
interface SingleCardProps {
  image: string;
  Button: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  btnHref,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-dark shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <h3 className="text-2xl font-semibold mb-4 p-8 text-center text-white bg-primary dark:bg-dark-2">
        {CardTitle}
      </h3>
      <img src={image} alt="" className="w-3/4 mx-auto rounded-[18px]" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <p className="mb-7 sm:text-xs md:text-xl  text-body-color dark:text-dark-6">
          {CardDescription}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="text-black bg-slate-200 hover:bg-slate-950 inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};

const TechnicalEvents: React.FC = () => {
  const technicalEventsData = [
    {
      image: img1,
      CardTitle: "ENVISION",
      CardDescription:
        "Present groundbreaking research, showcase innovation, and captivate judges with your ideas!",
      btnHref: "/bot",
      Button: "Know more",
    },
    {
      image: img2,
      CardTitle: "Code-RPG",
      CardDescription:
        "Test your coding skills in this unique challenge! Solve logic puzzles, crack codes, and compete to be the ultimate Code Master.",
      btnHref: "/rpg",
      Button: "Know more",
    },
    // Add more technical events as needed
  ];

  return (
    <section className=" text-gray-200 bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {technicalEventsData.map((event, index) => (
            <SingleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NonTechnicalEvents: React.FC = () => {
  const nonTechnicalEventsData = [
    {
      image: img3,
      CardTitle: "BGMI-TOURNAMENT",
      CardDescription:
        "Battle it out in DUO CLASSIC and the intense TDM finale. The ultimate gaming showdown where only the best rise to victory!",
      btnHref: "/bgmi",
      Button: "Know more",
    },
    {
      image: img4,
      CardTitle: "PEC's IPL AUCTION",
      CardDescription:
        "Experience the thrill of IPL AUCTION! From CLASSIC QUIZ to strategic player selections with a budget of 50 crore, it's a cricketing journey where only the champions prevail.",
      btnHref: "/ipl",
      Button: "Know more",
    },
  ];

  return (
    <section className="text-gray-200 bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-1  lg:grid-cols-2">
          {nonTechnicalEventsData.map((event, index) => (
            <SingleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Events: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* <div className="pb-[120px] bg-black"></div> */}
      <div className="bg-eve text-white bg-cover pt-[100px]">
        <div className="tech-cards text-center">
          <h1 className="text-4xl sm:text-3xl font-bold neon pop">
            Technical Events
          </h1>
          <TechnicalEvents />
        </div>
        <div className="nontech-cards text-center">
          <h1 className="text-4xl sm:text-3xl font-bold neon pop">
            Non-Technical Events
          </h1>
          <NonTechnicalEvents />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
