import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";

export default function BGMI() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-6 flex flex-col items-center gap-6 text-center md:gap-10 md:px-8">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
              XERONE BGMI Tournament
            </h1>
            <p className="mx-auto max-w-[750px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl">
              A team-based BGMI tournament where duos compete in classic matches across Erangel and Miramar. The top 10 teams qualify for an intense TDM Clash in the finals!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {["Event Details", "Competition Rounds", "Judging Criteria"].map((title, index) => (
              <div key={index} className="mx-auto flex w-full items-center justify-center p-6 sm:p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-orange-300">{title}</h3>
                  {index === 0 && (
                    <>
                      <p className="text-sm text-gray-200">Prelims Date: 19th Feb (6pm - 9pm)</p>
                      <p className="text-sm text-gray-200">Final Date: 22nd Feb</p>
                      <p className="text-sm text-gray-200">Venue: Computer Center</p>
                      <p className="text-sm text-gray-200">Team Composition: Two members per team</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <h4 className="font-semibold">Round 1: Online Prelims</h4>
                      <ul className="list-disc pl-6">
                        <li>Duo Classic - Compete in classic matches on Erangel & Miramar.</li>
                        <li>Platform: Mobile only (Android/iOS).</li>
                        <li>No cheating, hacking, or third-party software allowed.</li>
                        <li>Respectful behavior is mandatory.</li>
                      </ul>
                      <h4 className="font-semibold">Round 2: Finals (Offline)</h4>
                      <ul className="list-disc pl-6">
                        <li>TDM Clash (Inventory Mode) with 10 qualified teams.</li>
                        <li>Only M416 is allowed; no pistols, slides off.</li>
                        <li>Fair play and adherence to BGMI’s Terms of Service are required.</li>
                      </ul>
                    </>
                  )}
                  {index === 2 && (
                    <ul className="list-disc pl-6">
                      <li>Points are awarded as per the evaluation table.</li>
                      <li>1 point per kill.</li>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange-300">Rules</h2>
            <ul className="list-disc pl-6">
              <li>All participants must use mobile devices (Android/iOS).</li>
              <li>Cheating, hacking, or any unfair practices will lead to disqualification.</li>
              <li>Players must follow game rules and maintain respectful conduct.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange-300">Contact</h2>
            <p className="text-lg lg:text-xl">For inquiries, contact our organizers:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Organizers</h1>
                <li>Surya S - 99626 23166</li>
                <li>Karthik R - 81226 62347</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
