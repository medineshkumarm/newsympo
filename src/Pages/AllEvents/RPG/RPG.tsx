import "../styles.css";

export default function RPG() {
  return (
    <>
    <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-green-500 to-blue-700 text-white">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
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
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-red-500 to-red-700 text-white">
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
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-black to-blue-900 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 1: Online Prelims</h3>
                <p><strong>Final Name & Rules:</strong> FIND THE LANGUAGE+ CLONE THE SITE.</p>
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
                <h4 className="font-bold">Judging Criteria:</h4>
                <ul className="list-disc pl-6">
                  <li>Cumulative points from correctly answered questions.</li>
                  <li>Quality of the replicated website.</li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 2: Offline Finals</h3>
                <p><strong>Final Name & Rules:</strong> Swap the Coders</p>
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
                <h4 className="font-bold">Judging Criteria:</h4>
                <ul className="list-disc pl-6">
                  <li>Scoring based on code completion.</li>
                  <li>
                    Winners selected based on the highest cumulative score or
                    more tasks completed.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-green-500 to-blue-700 text-white">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Contact
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              For any inquiries or clarifications, please feel free to reach out
              to our event coordinators:
            </p>
            <ul className="list-disc pl-6">
              <li>[Coordinator Name 1]: [Coordinator Email/Phone]</li>
              <li>[Coordinator Name 2]: [Coordinator Email/Phone]</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
