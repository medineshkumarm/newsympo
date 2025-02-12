import "../styles.css";
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";

export default function Botathon() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-16 lg:py-20 bg-eve text-white">
        <div className="container px-6 flex flex-col items-center gap-6 text-center md:gap-10 md:px-8">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent">
              Envision - Paper Presentation Competition
            </h1>
            <p className="mx-auto max-w-[750px] text-gray-300 md:text-lg lg:text-xl xl:text-2xl">
              Welcome to the Envision Paper Presentation Competition as part of
              our symposium! This event encourages innovation, research, and
              effective communication of ideas.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {["Event Details", "Competition Rounds", "Domains"].map((title, index) => (
              <div key={index} className="mx-auto flex w-full items-center justify-center p-6 sm:p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-teal-300">{title}</h3>
                  {index === 0 && (
                    <>
                      <p className="text-sm text-gray-200">Team Members: Maximum 4 members per team (Individual participation allowed).</p>
                      <p className="text-sm text-gray-200">Event Date: 22nd February (Thursday).</p>
                      <p className="text-sm text-gray-200">Event Mode:</p>
                      <ul className="list-disc pl-6">
                        <li>Round 1: Online selection of best papers.</li>
                        <li>Round 2 (Final Round): Offline presentation on 22nd February.</li>
                      </ul>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <h4 className="font-semibold">Round 1: Online Selection</h4>
                      <ul className="list-disc pl-6">
                        <li>Participants submit papers online.</li>
                        <li>Top 10 best papers are selected.</li>
                        <li>Selected teams proceed to the final round.</li>
                      </ul>
                      <h4 className="font-semibold">Round 2: Final Round (Offline Presentation)</h4>
                      <ul className="list-disc pl-6">
                        <li>Selected teams present papers offline on 22nd February.</li>
                        <li>10-minute presentation followed by a 5-minute Q&A session.</li>
                        <li>Final evaluation based on judging criteria.</li>
                      </ul>
                    </>
                  )}
                  {index === 2 && (
                    <ul className="list-disc pl-6">
                      {/* <li>Artificial Intelligence & Machine Learning (AI/ML)</li>
                      <li>Cybersecurity & Ethical Hacking</li>
                      <li>Blockchain & Cryptography</li>
                      <li>Cloud Computing & Edge Computing</li>
                      <li>Data Science & Big Data Analytics</li>
                      <li>Internet of Things (IoT)</li> */}

                      <li>Network security</li>
                      <li>Ethical hacking and Penetration</li>
                      <li>Cyber threat Intelligence</li>
                      <li>Darkweb and cybercrime investigation</li>
                      <li>Cryptography and steganography</li>
                      <li>AI & ML in Cybersecurity</li>
                      <li>Cloud Security</li>
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

            {/* basic rules */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Basic Rules for the Event </h2>
            <h6>✅ The paper must be original and relevant to the chosen domain and problem statement.</h6>
            <h6>✅ The paper should follow this format.</h6>
            {/* sub-points */}
            <ul className="list-decimal pl-10 indent-5">
              <li>Title of the Paper</li>
              <li>Abstract</li>
              <li>Existing Idea</li>
              <li>Proposed Idea</li>
              <li>Conclusion Idea</li>
            </ul>
            <h6>✅A plagiarism report must be attached along with the submission.</h6>

            {/* <div>
              <h6 className="font-semibold text-red-500">Note:</h6>
              <p className="indent-5">A plagiarism report must be attached along with the submission.</p>

            </div> */}
            {/* JC */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Judging Criteria</h2>
            <h4 className="font-semibold">Round 1:</h4>
            <ul className="list-disc pl-6">
              <li>Relevance to domain & problem statement.</li>
              <li>Originality & research depth.</li>
              <li>Clarity & structure of the paper.</li>
            </ul>
            <h4 className="font-semibold">Round 2:</h4>
            <ul className="list-disc pl-6">
              <li>Presentation Skills – Clarity, confidence, engagement.</li>
              <li>Technical Accuracy – Correct methodologies & findings.</li>
              <li>Q&A Handling – Effective response to questions.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Prizes & Awards</h2>
            <ul className="list-disc pl-6">
              <li>1st Prize: Rs. 3000/-</li>
              <li>2nd Prize: Rs. 2000/-</li>
              {/* <li>Exciting prizes for top teams.</li> */}
              <li>Certificates for participants will be provided.</li>
            </ul>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-teal-300">Contact</h2>
            <p className="text-lg lg:text-xl">For inquiries, contact our coordinators:</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Coordinators</h1>
                <li>Malathi B - 6382729546</li>
                <li>Aparna V - 6380255945</li>
              </ul>
              <ul className="text-lg pl-6">
                <h1 className="text-xl font-bold">Sub-Coordinators</h1>
                <li>Prathiba D</li>
                <li>Srividhya P</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
