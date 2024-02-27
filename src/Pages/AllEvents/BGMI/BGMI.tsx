import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";
export default function BGMI() {
  return (
    <>
      <Navbar />
      <div className="pt-12"></div>

      <section className="w-full py-8 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl neon md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              E-SPORTS : BGMI-CLASH
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Join the battleground in BGMI - a Battle Royale gaming event. Form
              a team of two players and compete in classic duo matches on two
              different maps (Erangal & Miramar). The top 10 qualified teams
              will battle it out in a duo TDM clash during the finals with a
              duration of 1 hour and 30 minutes.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Event Details</h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Prelims Date: 6th March 
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Finals Date: 9th March
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Venue: CSE Block-I AV Hall
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  Team Composition: A team of two members
                </p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 1: DUO CLASSIC(Online)</h3>
                <p>
                  <strong>Rules:</strong> 
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    A team of two will battle with other teams to participate in
                    the final round.
                  </li>
                </ul>
               
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 bg-gradient-to-r from-green-800 to-teal-800 text-white">
              <div className="space-y-4 text-left">
                <h3 className="font-bold">Round 2:TDM Clash(Offline)</h3>
                <p>
                  <strong>Rules:</strong> 
                </p>
                <ul className="list-disc pl-6">
                  <li>TDM between 10 teams (Duo).</li>
                  <li>Only M416 allowed.</li>
                  <li>No pistol.</li>
                  <li>Slide off.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <li>1st Prize: ₹2,000</li>
              <li>2nd Prize: ₹1,000</li>
            </ul>
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
                <li>Rogan - 8015639911</li>
                <li>Ajay S - 9360364123</li>
              </ul>
              <ul className="text-xl pl-6">
                <h1>
                  <strong>Staff Co-ordinators</strong>
                </h1>
                <li>Mr.Thiyagarajan -9003175205 </li>
                <li>Mrs.Cinthuja - 8610686509</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
