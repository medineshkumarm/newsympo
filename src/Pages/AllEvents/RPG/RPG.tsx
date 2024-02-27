import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";
export default function RPG() {
  return (
    <>
      <Navbar />
      <div className="pt-10"></div>
      <section className="w-full py-8 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl neon font-bold tracking-tight">
              CODE-RPG: Coding Adventure
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Join us in CODE-RPG, an exciting coding adventure where teams of
              two members alternate roles every 5 minutes, solving problems
              using an online compiler within a total time of 30 minutes per
              round.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/** Event Details */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Event Details</h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Prelims Date: 7th March
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Final Date: 9th March
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Venue: Computer Center II
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Team Composition: A team of two members
                </p>
              </div>
            </div>

            {/** Round 1: Online Prelims */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 1: Online Prelims</h3>
                <p>
                  <strong>Final Name & Rules:</strong> FIND THE LANGUAGE+ CLONE
                  THE SITE.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Participants identify programming languages through a series
                    of questions.
                  </li>
                  <li>
                    Successful identification leads to replicating a given
                    website.
                  </li>
                </ul>
                {/* <h4 className="font-bold">Judging Criteria:</h4>
                <ul className="list-disc pl-6">
                  <li>Cumulative points from correctly answered questions.</li>
                  <li>Quality of the replicated website.</li>
                </ul> */}
              </div>
            </div>

            {/** Round 2: Offline Finals */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 2: Offline Finals</h3>
                <p>
                  <strong>Final Name & Rules:</strong> Swap the Coders
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Teams of two members collaborate, alternating roles every 5
                    minutes.
                  </li>
                  <li>
                    Each coding session is limited to 5 minutes within a total
                    round time of 30 minutes.
                  </li>
                  <li>Teams solve problems using an online compiler.</li>
                </ul>
                {/* <h4 className="font-bold">Judging Criteria:</h4>
                <ul className="list-disc pl-6">
                  <li>Scoring based on code completion.</li>
                  <li>
                    Winners selected based on the highest cumulative score or
                    more tasks completed.
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Judging Criteria */}
      <section className="w-full py-8 md:py-8 lg:py-10 bg-eve text-white">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Judging Criteria
            </h2>
            <ul className="list-disc pl-6">
              <h2 className="text-xl font-bold">Round 1</h2>
              <li>Cumulative points from correctly answered questions.</li>
              <li>Quality of the replicated website.</li>
              <h2 className="text-xl font-bold">Round 2</h2>

              <li>Scoring based on code completion in the Finals.</li>
              <li>
                Winners selected based on the highest cumulative score or more
                tasks completed in the Finals.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/** Prizes & Awards, Contact */}
      <section className="w-full py-8 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Prizes & Awards
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              The top 2 teams will be rewarded handsomely:
            </p>
            <ul className="list-disc pl-6">
              <li>1st Prize: ₹3,000</li>
              <li>2nd Prize: ₹2,000</li>
            </ul>

            {/** Contact */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Contact
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              For any inquiries or clarifications, please feel free to reach out
              to our event coordinators:
            </p>
            <div className="flex gap-[4rem]">
              <ul className=" list-disc pl-6">
                <h1>
                  <strong>Student Co-ordinators</strong>
                </h1>
                <li>Saravanapriya T - 93454 61987</li>
                <li>Sumitha k 7604976100</li>
              </ul>
              <ul className="list-disc pl-6">
                <h1>
                  <strong>Staff Co-ordinators</strong>
                </h1>
                <li>Dr.V.Sathya -9488448417</li>
                <li>Mrs. V.Anitha Moses - 9444149629</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
