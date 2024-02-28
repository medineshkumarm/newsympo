import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";
export default function IPL() {
  return (
    <>
      <Navbar />
      <div className="pt-12"></div>

      <section className="w-full py-8 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl neon font-bold tracking-tight text-white">
              PEC's IPL AUCTION
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Participate in the IPL AUCTION event, a combination of cricket
              knowledge and strategic bidding. Showcase your cricket expertise
              in an online cricket quiz in the first round, and then move on to
              the thrilling virtual player bidding round to assemble your dream
              team.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/* Event Details */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Event Details</h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Prelims Date: 4th March (6pm - 7pm)
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Finals Date: 9th March (8am - 11:30 am)
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Venue: CSE BLOCK 3 AV Hall
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Team Composition: A team of two members
                </p>
              </div>
            </div>

            {/* Round 1: Online Prelims */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 1:CRIC - QUIZ(Online)</h3>
                <p>
                  <strong>Rules:</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Engage in a dynamic online cricket quiz featuring 20
                    questions, testing your cricket knowledge.
                  </li>
                  <li>
                    Each team has a 30-minute time limit to answer questions
                    accurately and swiftly.
                  </li>
                </ul>
              </div>
            </div>

            {/* Round 2: Offline Finals */}
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">
                  Round 2: PEC's IPL AUCTION(Offline)
                </h3>
                <p>
                  <strong>Rules:</strong>{" "}
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Each team is given a budget of 50 crore rupees for the final
                    round.
                  </li>
                  <li>
                    Teams are required to select 11 players, with a composition
                    of 4 foreign players and 7 Indian players.
                  </li>
                  <li>Each player is assigned a certain number of points.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-2xl  md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-tight">
              Judging Criteria
            </h2>
            <ol className="list-decimal pl-6">
              <h3>
                <strong>Round 1</strong>
              </h3>
              <li>Cumulative points from correctly answered questions.</li>
              <li>
                In the event of a tie, priority is given to the team that
                completed the quiz first..
              </li>
            </ol>
            <ol className="list-decimal pl-6">
              <h3>
                <strong>Round 2</strong>
              </h3>
              <li>
                The total points for all players in each team are calculated,
                and the team with the highest points is declared the winner of
                the event.
              </li>
            </ol>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Prizes & Awards
            </h2>
            <ul className="list-disc pl-6">
              <li>1st Prize: Rs.2000/-</li>
              <li>2nd Prize: Rs.1000/-</li>
            </ul>
            <p className="text-lg lg:text-xl xl:text-2xl">
              E-certificates will be provided to all the participants.
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Contact
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              For any inquiries or clarifications, please feel free to reach out
              to our event coordinators:
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-[4rem]">
              <ul className="text-xl pl-6">
                <h1>
                  <strong>Student Co-ordinators</strong>
                </h1>
                <li>Lingeshwaran B - 73387 19242</li>
                <li>Ramkumar M - 6369292113</li>
              </ul>
              <ul className="text-xl pl-6">
                <h1>
                  <strong>Staff Co-ordinators</strong>
                </h1>
                <li>Dr. N. Pugazhendi - 9962969429</li>
                <li>Mrs. C.Jackulin - 8939229230</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
