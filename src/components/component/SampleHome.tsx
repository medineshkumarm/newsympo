import { Link } from "react-router-dom";
import { Carousel } from "../ui/carousel";
import "../../Pages/pages.css";
import tech from "/img/tech-img.png";
import { CardFooter, Card } from "@/components/ui/card";
import ntech from "/img/non-tech.png";
export function SampleHome() {
  return (
    <div className="flex flex-col min-h-[100dvh]   bg-gradient-text-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 leading-5 ">
            <div className="space-y-3">
              <h1 className="neon pop text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to the Xerone 2k24
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
                Welcome to Xerone 2K24 Symposium, where innovation meets
                inspiration! Join us for a fusion of technical prowess and
                non-technical excitement, presented by the Department of
                Computer Science and Engineering (CSE).
              </p>
              {/* <h2>
                <strong className="sm:text-xs md:text-xl space-x-1">
                  Registration Closes :{" "}
                </strong>
                on 5th March,2024 at 5pm
              </h2> */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Themes
              </h2>

              <Carousel />
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the following themes during the symposium.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <div className="space-y-2">
                <h3 className="text-xl font-bold evnt-text">1. Techincal Events</h3>

                

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore innovative solutions and redefine productivity in our
                  technical events.
                </p>
              </div> */}

              {/* Card-1 */}

              <div className="flex flex-col justify-between space-y-2">
                <Card>
                  <div className="grid gap-4 p-4">
                    <img
                      alt="Image"
                      className="aspect-video rounded-lg object-cover"
                      height="100"
                      src={tech}
                      width="440"
                    />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight">
                        Technical Events
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Unleash innovation, ignite competition - where code meets creativity!
                      </p>
                    </div>
                  </div>
                  <CardFooter>
                    <Link
                      className="font-semibold bg-slate-200 text-black rounded-[4px] p-1 px-2 hover:bg-black hover:text-slate-200 hover:border"
                      to="/events"
                    >
                      Know more 
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Card-2 */}

              <div className="flex flex-col justify-between space-y-2">
                <Card>
                  <div className="grid gap-4 p-4">
                    <img
                      alt="Image"
                      className="aspect-video rounded-lg object-cover"
                      height="100"
                      src={ntech}
                      width="440"
                    />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight">
                        Non-Technical Events
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                      Elevate excitement, ignite camaraderie - where fun meets strategy!
                      </p>
                    </div>
                  </div>
                  <CardFooter>
                    <Link
                      className="font-semibold bg-slate-200 text-black rounded-[4px] p-1 px-2 hover:bg-black hover:text-slate-200 hover:border"
                      to="/events"
                    >
                      Know more
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              {/* <div className="space-y-2">
                <h3 className="text-xl font-bold">2. Non-technical Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ignite creativity and inspire breakthroughs in our engaging
                  non-technical activities.
                </p>
              </div> */}
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1  sm:grid-cols-1 m-0 p-0">
          {/* <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="neon text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl">
                  Event Closes Soon!
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hurry up! Event is closes on March 4th, 2024 at 12pm.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/events"
                >
                  Participate Now
                </Link>
              </div>
            </div>
          </section> */}

          <section className="w-full pb-24">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className=" neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Register
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hurry up! Event is closes on March 4th, 2024 at 12pm. Reserve your spot at the symposium! Register now .
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-[8px] border border-gray-200 bg-white text-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="https://forms.gle/sQGS5WEiKAfYqdyC6"
                  target="_blank"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
