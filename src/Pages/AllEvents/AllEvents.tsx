import Navbar from "@/UI/NavBar";

function AllEvents() {
  return (
    <>
      <Navbar />
      {/* <StickyScrollRevealDemo />
      <StickyScrollRevealDemo /> */}
      <SymposiumEvents />
    </>
  );
}

export default AllEvents;

import React from "react";

interface EventCardProps {
  eventName: string;
  eventType: string;
  details: string[];
  rounds: { name: string; details: string[] }[];
}

const EventCard: React.FC<EventCardProps> = ({ eventName, eventType, details, rounds }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white p-6 rounded-md shadow-md">
        <header>
          <h1 className="text-4xl font-bold mb-2">{eventName}</h1>
          <p className="text-gray-500">{eventType}</p>
        </header>

        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Details</h2>
          <ul className="list-disc pl-6">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Rounds</h2>
          {rounds.map((round, index) => (
            <article key={index} className={index > 0 ? "mt-4" : ""}>
              <h3 className="text-xl font-bold mb-2">{round.name}</h3>
              <ul className="list-disc pl-6">
                {round.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-primary text-black rounded-md">
            Know More
          </button>
          <button className="px-4 py-2 bg-secondary text-black rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};


const SymposiumEvents = () => {
  const events = [
    {
      eventName: "BOTATHON",
      eventType: "Technical Event",
      details: [
        "No of Teams: 10 (3 per team)",
        "No of Rounds: 2 (Online prelims + finals)",
        "1st Prize: $3,000",
        "2nd Prize: $2,000",
      ],
      rounds: [
        {
          name: "Round 1 (Prelims): IDEA SUMMIT",
          details: [
            "Each team must submit a real-world scenario-based problem statement.",
            "Propose an automation solution for the same.",
            "Discuss its potential impact in the form of a PPT Presentation.",
          ],
        },
        {
          name: "Round 2 (Finals): BOT EXPO",
          details: [
            "The selected teams will have to showcase their bots.",
            "Demonstrate the implementation of their proposed automation solution.",
            "Participants will be required to deploy their automation solutions and present them during the event.",
          ],
        },
      ],
    },
    {
      eventName: "RED BREAK GREEN",
      eventType: "Technical Event",
      details: [
        "No of Teams: 10 (2 per team)",
        "No of Rounds: 2 (Online prelims + finals)",
        "1st Prize: $2,000",
        "2nd Prize: $1,000",
      ],
      rounds: [
        {
          name: "Round 1 (Prelims): FIND THE LANGUAGE+ CLONE THE SITE",
          details: [
            "First, a set of questions with different programming languages is given.",
            "After this, a picture of a site is given.",
            "Students are asked to clone it.",
          ],
        },
        {
          name: "Round 2 (Finals): RED BREAK GREEN",
          details: [
            "A team of 2 will be given a red and green ribbon to tie on their band.",
            "A coding question will be given.",
            "If the red light is on, it means a person with a red ribbon will start working, and vice versa.",
          ],
        },
      ],
    },
    {
      eventName: "E-SPORT",
      eventType: "Non-Technical Event",
      details: [
        "No of Teams: 10 (2 per team)",
        "No of Rounds: 2 (Online prelims + finals)",
        "1st Prize: $2,000",
        "2nd Prize: $1,000",
      ],
      rounds: [
        {
          name: "Round 1 (Prelims Online): DUO CLASSIC",
          details: [
            "A team of two will battle with each other to participate in the final round.",
          ],
        },
        {
          name: "Round 2 (Finals): TDM Clash",
          details: [
            "TDM between 10 teams (duo).",
            "Only m416.",
            "No pistol.",
            "Slide off.",
          ],
        },
      ],
    },
    {
      eventName: "IPL AUCTION",
      eventType: "Non-Technical Event",
      details: [
        "No of Teams: 10 (2 per team)",
        "No of Rounds: 2 (Online prelims + finals)",
        "1st Prize: $2,000",
        "2nd Prize: $1,000",
      ],
      rounds: [
        {
          name: "Round 1 (Prelims): CLASSIC QUIZ",
          details: [
            "A general quiz. In the first round, teams participate in a quiz, and based on their performance, the top 10 teams proceed to the final round.",
          ],
        },
        {
          name: "Round 2 (Finals): IPL AUCTION",
          details: [
            "Each team is given a budget of 100 crore rupees for the final round.",
            "In this round, teams are required to select a minimum of 18 players and a maximum of 25, with a specific composition of 8 foreign players and 17 Indian players.",
            "Each player is assigned a certain number of points.",
            "Finally, the total points for all players in each team are calculated, and the team with the highest points is declared the winner of the event.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8 bg-amber-100">
      <h1 className="text-4xl font-bold text-center mb-8">Symposium Events</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

// export default SymposiumEvents;

// import { StickyScroll } from "../../components/component/sticky-scroll-reveal";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//   },
// ];
// function StickyScrollRevealDemo() {
//   return (
//     <div className="h-screen overflow-hidden">
//       <div className="p-10 pt-[8rem]">
//         <StickyScroll content={content} />
//       </div>
//     </div>
//   );
// }

// const EventPage = () => {
//   return (
//     <main className="container mx-auto py-8 pt-[8rem]">
//       <article className="bg-white p-6 rounded-md shadow-md">
//         <header>
//           <h1 className="text-4xl font-bold mb-2">BOTATHON</h1>
//           <p className="text-gray-500">Technical Event</p>
//         </header>

//         <section className="mt-4">
//           <h2 className="text-2xl font-bold mb-2">Details</h2>
//           <ul>
//             <li>No of Teams: 10 (3 per team)</li>
//             <li>No of Rounds: 2 (Online prelims + final’s)</li>
//             <li>1st Prize: $3,000</li>
//             <li>2nd Prize: $2,000</li>
//           </ul>
//         </section>

//         <section className="mt-4">
//           <h2 className="text-2xl font-bold mb-2">Rounds</h2>

//           <article>
//             <h3 className="text-xl font-bold mb-2">Round 1 (Prelims): IDEA SUMMIT</h3>
//             <ul className="list-disc pl-6">
//               <li>Each team must submit a real-world scenario-based problem statement.</li>
//               <li>Propose an automation solution for the same.</li>
//               <li>Discuss its potential impact in the form of a PPT Presentation.</li>
//             </ul>
//           </article>

//           <article className="mt-4">
//             <h3 className="text-xl font-bold mb-2">Round 2 (Finals): BOT EXPO</h3>
//             <ul className="list-disc pl-6">
//               <li>The selected teams will have to showcase their bots.</li>
//               <li>Demonstrate the implementation of their proposed automation solution.</li>
//               <li>Participants will be required to deploy their automation solutions and present them during the event.</li>
//             </ul>
//           </article>
//         </section>
//       </article>
//     </main>
//   );
// };
