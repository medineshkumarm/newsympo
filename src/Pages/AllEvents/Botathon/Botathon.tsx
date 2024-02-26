import "../styles.css";
export default function Botathon() {
  return (
    <>
       <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              BOT-A-THON: Automation Challenge
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Join us in BOT-A-THON, an automation challenge where teams of two
              participants will compete to solve real-world problems through
              innovative automation solutions.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-red-800 to-pink-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Event Details</h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Prelims Date: [Sample Date]
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Finals Date: 09-03-2024
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Venue: [Venue]
                </p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-orange-800 to-yellow-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 1: Idea Summit</h3>
                <ol className="list-decimal pl-6">
                  <li>
                    Each team must submit a real-world scenario-based problem
                    statement in a domain of their own choice.
                  </li>
                  <li>
                    Propose an automation solution for the submitted problem
                    statement.
                  </li>
                  <li>
                    Discuss the potential impact through a PPT Presentation and
                    submit it via the provided submission link.
                  </li>
                </ol>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 2: Bot Expo</h3>
                <ol className="list-decimal pl-6">
                  <li>Selected teams will showcase their bots.</li>
                  <li>
                    Demonstrate the implementation of their proposed automation
                    solution.
                  </li>
                  <li>
                    Participants will deploy their automation solutions and
                    present them during the finals.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Selection Criteria
            </h2>
            <ol className="list-decimal pl-6">
              <li>Uniqueness of the problem statement.</li>
              <li>Scalability of the solution provided.</li>
              <li>Feasibility.</li>
            </ol>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Prizes & Awards
            </h2>
            <ul className="list-disc pl-6">
              <li>1st Prize: Rs.3000/-</li>
              <li>2nd Prize: Rs.1000/-</li>
            </ul>
            <p className="text-lg lg:text-xl xl:text-2xl">
              E-certificates will be provided to all the participants.
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              General Guidelines
            </h2>
            <ol className="list-decimal pl-6">
              <li>
                All participants must adhere to the college's code of conduct
                and maintain professional behavior throughout the event.
              </li>
              <li>
                Any changes in the rules or schedule will be communicated to the
                participants in advance.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
