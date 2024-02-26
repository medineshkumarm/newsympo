import Navbar from "@/UI/NavBar";

// const About = () => {
//   return (
//     <div>
//       <Navbar />

//       <header className="bg-blue-500 text-white text-center py-20">
//         <h1 className="text-4xl font-bold mb-4">🎉 Welcome to Our College Events 🌟</h1>
//         <p className="text-lg">
//           Explore, Create, Connect!
//         </p>
//       </header>

//       <section className="container mx-auto my-10">
//         <h2 className="text-2xl font-bold mb-6 text-center">Our Vision 🚀</h2>
//         <p className="text-gray-700 text-center">
//           Fostering Creativity, Embracing Diversity, and Making Memories!
//         </p>
//       </section>

//       <section className="bg-gray-100 py-10">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Events? 🌈</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold mb-2">🎨 Diverse Range of Activities</h3>
//               <p className="text-gray-700">
//                 Tech Competitions, Cultural Performances, and Everything In Between!
//               </p>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold mb-2">🤝 Networking Opportunities</h3>
//               <p className="text-gray-700">
//                 Connect with Industry Pros, Alumni, and Like-minded Creatives!
//               </p>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold mb-2">🎉 Fun and Learning Combined</h3>
//               <p className="text-gray-700">
//                 Educational Yet Enjoyable - Where Learning Meets Laughter!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="container mx-auto my-10">
//         <h2 className="text-2xl font-bold mb-6 text-center">Event Highlights 🌟</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="p-4 text-center">
//             <img src="https://placekitten.com/800/600" alt="Event 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">TechFest 💻</h3>
//             <p className="text-gray-700">
//               Workshops, Hackathons, and Tech Enthusiast Paradise!
//             </p>
//           </div>
//           <div className="p-4 text-center">
//             <img src="https://placekitten.com/801/601" alt="Event 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">Cultural Night 🎶</h3>
//             <p className="text-gray-700">
//               Music, Dance, and a Night Bursting with Cultural Delights!
//             </p>
//           </div>
//           <div className="p-4 text-center">
//             <img src="https://placekitten.com/802/602" alt="Event 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
//             <h3 className="text-xl font-bold mb-2">Innovation Expo 🚀</h3>
//             <p className="text-gray-700">
//               Showcase Innovation, Connect with Creatives, and Spark Ideas!
//             </p>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-blue-500 text-white text-center py-6">
//         <p>&copy; 2024 Our College Events. All Rights Reserved. 🎓</p>
//       </footer>
//     </div>
//   );
// };

// export default About;

const About: React.FC = () => {
  return (
    <div>
      <Navbar />

      <header className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Welcome to CSE Symposium 🌟
        </h1>
        <p className="text-lg">Unleash Your Creativity, Ignite Innovation!</p>
      </header>

      <section className="container mx-auto my-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          🤖 Technical Events 1: BOTATHON
        </h2>
        <p className="text-gray-700 text-center">
          Join the Automation Revolution and Bring Your Bots to Life!
        </p>
        {/* Add BOTATHON image */}
        <div className="text-center mt-6">
          <img
            src="botathon-image-url"
            alt="BOTATHON"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        {/* Sample content, you can add more details */}
        <ul className="list-disc pl-6 mt-4">
          <li>👥 No of Teams: 10 (3 per team)</li>
          <li>🔍 No of Rounds: 2 (Online prelims + finals)</li>
          <li>🏆 1st Prize: $3,000</li>
          <li>🥈 2nd Prize: $2,000</li>
        </ul>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🔥 Technical Events 2: RED BREAK GREEN
          </h2>
          <p className="text-gray-700 text-center">
            Break the Code, Paint the Town Red, and Embrace the Green Challenge!
          </p>
          {/* Add RED BREAK GREEN image */}
          <div className="text-center mt-6">
            <img
              src="red-break-green-image-url"
              alt="RED BREAK GREEN"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
          {/* Sample content, you can add more details */}
          <ul className="list-disc pl-6 mt-4">
            <li>👥 No of Teams: 10 (2 per team)</li>
            <li>🔍 No of Rounds: 2 (Online prelims + finals)</li>
            <li>🏆 1st Prize: $2,000</li>
            <li>🥈 2nd Prize: $1,000</li>
          </ul>
        </div>
      </section>

      {/* Add more sections for NON-TECHNICAL EVENTS 1 & 2 with creative content and images */}

      <footer className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white text-center py-6">
        <p>
          &copy; 2024 CSE Symposium. Ignite Innovation, Spark Creativity! 🎓
        </p>
      </footer>
    </div>
  );
};

export default About;

