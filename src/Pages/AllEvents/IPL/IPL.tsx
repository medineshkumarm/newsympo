import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";

export default function IPL() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-6 flex flex-col items-center gap-6 text-center md:gap-10 md:px-8">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              Mock IPL Auction
            </h1>
            <p className="mx-auto max-w-[750px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl">
              Experience the thrill of cricket strategy and bidding wars! Compete in the IPL Mock Auction where teams strategize, bid, and build their dream squad. Outsmart your rivals and master budget balancing to emerge victorious!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {["Event Details", "Competition Rounds", "Judging Criteria"].map((title, index) => (
              <div key={index} className="mx-auto flex w-full items-center justify-center p-6 sm:p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-orange-300">{title}</h3>
                  {index === 0 && (
                    <>
                      <p className="text-sm text-gray-200">Prelims Date: 20th Feb (Online)</p>
                      <p className="text-sm text-gray-200">Final Date: 22nd Feb (Offline)</p>
                      <p className="text-sm text-gray-200">Team Composition: Two members per team</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <h4 className="font-semibold">Round 1: Prelims (Online)</h4>
                      <ul className="list-disc pl-6">
                        <li>20-question IPL Quiz with a 30-minute time limit.</li>
                        <li>Top 10 teams qualify for the next round.</li>
                      </ul>
                      <h4 className="font-semibold">Round 2: Team Selection & Auction (Offline)</h4>
                      <ul className="list-disc pl-6">
                        <li>Teams pick an IPL franchise randomly.</li>
                        <li>Each team builds a squad of 12 players (4 foreign, 8 Indian).</li>
                        <li>Budget: ₹70 crores.</li>
                      </ul>
                    </>
                  )}
                  {index === 2 && (
                    <ul className="list-disc pl-6">
                      <li>Round 1: Points awarded for correct answers.</li>
                      <li>Round 2: Players rated on performance metrics.</li>
                      <li>Team with highest accumulated points wins.</li>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange-300">Prizes & Awards</h2>
            <ul className="list-disc pl-6">
              <li>First Prize: ₹2000</li>
              <li>Second Prize: ₹1000</li>
              <li>E-certificates for all participants.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange-300">Contact</h2>
            <p className="text-lg lg:text-xl">For inquiries, contact our organizers:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Student Coordinators</h1>
                <li>Sridhar D - 9345610538</li>
                <li>Emmanuel Prithish S - 9025557013</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
