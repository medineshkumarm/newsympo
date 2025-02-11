import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";

export default function RPG() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-6 flex flex-col items-center gap-6 text-center md:gap-10 md:px-8">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
              Code RPG - Coding Competition
            </h1>
            <p className="mx-auto max-w-[750px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl">
              Welcome to Code RPG, a thrilling coding competition that will test your programming skills, critical thinking, and problem-solving abilities. Compete in two challenging rounds and win exciting prizes!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {["Event Details", "Competition Rounds", "Judging Criteria"].map((title, index) => (
              <div key={index} className="mx-auto flex w-full items-center justify-center p-6 sm:p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-teal-300">{title}</h3>
                  {index === 0 && (
                    <>
                      <p className="text-sm text-gray-200">Prelims Date: 18th Feb (6pm - 7pm)</p>
                      <p className="text-sm text-gray-200">Final Date: 22nd Feb (8am - 11:30pm)</p>
                      <p className="text-sm text-gray-200">Venue: Computer Center II</p>
                      <p className="text-sm text-gray-200">Team Composition: Two members per team</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <h4 className="font-semibold">Round 1: Prelims (Online)</h4>
                      <ul className="list-disc pl-6">
                        <li>Conducted on HackerRank.</li>
                        <li>Includes MCQs and coding puzzles.</li>
                        <li>Focuses on debugging, output prediction, and problem-solving.</li>
                        <li>Date: 18th February.</li>
                      </ul>
                      <h4 className="font-semibold">Round 2: Code RPG - Main Event</h4>
                      <ul className="list-disc pl-6">
                        <li>Live coding battle with team-based switching.</li>
                        <li>Red band participant starts coding, green band takes over after 5 mins.</li>
                        <li>Teams solve problems within a given time.</li>
                        <li>Winners are determined by problem-solving efficiency.</li>
                        <li>Date: 22nd February.</li>
                      </ul>
                    </>
                  )}
                  {index === 2 && (
                    <ul className="list-disc pl-6">
                      <li>Test Cases Passed: More successful test cases earn higher points.</li>
                      <li>Code Efficiency: Optimized and well-structured code scores better.</li>
                      <li>Logical Approach: Clear and correct logic is evaluated.</li>
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-6">
          <div className="space-y-8 prose prose-gray prose-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Rules</h2>
            <ul className="list-disc pl-6">
              <li>Participants must have a HackerRank account.</li>
              <li>Tab switching is strictly prohibited.</li>
              <li>Copy-pasting is not allowed.</li>
              <li>The prelims round is time-bound.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Prizes & Awards</h2>
            <ul className="list-disc pl-6">
              <li>1st Prize: Rs. 3000/-</li>
              <li>2nd Prize: Rs. 2000/-</li>
              <li>Winners receive certificates of achievement.</li>
              <li>All participants receive e-certificates.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Contact</h2>
            <p className="text-lg lg:text-xl">For inquiries, contact our coordinators:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Coordinators</h1>
                <li>Yogeswari S - 8668042023</li>
                <li>Prathiksha J - 8825795376</li>
              </ul>
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Sub-Coordinators</h1>
                <li>Arshitha Yasmin S</li>
                <li>Nasiya S</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
