import { Link } from "react-router-dom";
export function SampleHome() {
  return (
    <div className="flex flex-col min-h-[100dvh]  bg-gradient-text-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10 leading-5 ">
            <div className="space-y-3">
              <h1 className="neon pop text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to the Xerone
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for a series of engaging events conducted by Department
                of CSE, Panimalar Engineering College
              </p>
              <h2>
                <strong className="sm:text-xs md:text-xl space-x-1">
                  Registration Closes :{" "}
                </strong>
                on 5th March,2024 at 5pm
              </h2>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Themes
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the following themes during the symposium.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">1. Techincal Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore innovative solutions and redefine productivity in our
                  technical events.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2. Non-technical Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ignite creativity and inspire breakthroughs in our engaging
                  non-technical activities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 m-0 p-0">
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Schedule
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't miss out on the symposium's sessions and workshops.
                  Check the full schedule.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="/about"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className=" neon text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Register
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Secure your spot at the symposium. Register now to access all
                  sessions and connect with fellow attendees.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-black px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="/register"
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

{
  /* <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Keynote Speakers
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn from the best. Our keynote speakers will inspire you with
                their insights and expertise.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Session 1: The Future of Technology
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Speaker: Dr. Michelle Lee
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Session 2: Innovation and Creativity
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Speaker: John Parker
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">
                  Session 3: Digital Transformation
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Speaker: Emily Chen
                </p>
              </div>
            </div>
          </div>
        </section> */
}

{
  /* <header className="h-14 flex items-center">
        <div className="container px-4 md:px-6 flex items-center gap-4">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Schedule
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Speakers
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Venue
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header> */
}
