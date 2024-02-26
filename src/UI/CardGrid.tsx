// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import img from '/img/tessaract.jpg';

// const EventCard = ({ imageUrl, title, description, frontInfo, backInfo }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   const frontCardVariants = {
//     initial: { rotateY: 0 },
//     flipped: { rotateY: 180 },
//   };

//   const backCardVariants = {
//     initial: { rotateY: -180 },
//     flipped: { rotateY: 0 },
//   };

//   return (
//     <motion.div
//       className="w-full md:w-[350px] mx-auto my-4 md:my-8 overflow-hidden rounded-lg shadow-md cursor-pointer"
//       whileHover={{ scale: 1.05 }}
//       onClick={handleClick}
//     >
//       <motion.div
//         className="w-full h-64 object-cover rounded-t-lg front-face"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//         variants={frontCardVariants}
//         initial="initial"
//         animate={isFlipped ? "flipped" : "initial"}
//       >
//         {frontInfo && (
//           <div className="p-4">
//             {/* Display front information here */}
//             <p>{frontInfo}</p>
//           </div>
//         )}
//       </motion.div>
//       <motion.div
//         className="p-4 bg-white rounded-b-lg back-face"
//         variants={backCardVariants}
//         initial="initial"
//         animate={isFlipped ? "flipped" : "initial"}
//       >
//         <CardHeader className="text-xl font-bold mb-2">{title}</CardHeader>
//         <CardDescription>{description}</CardDescription>
//         {backInfo && (
//           <div className="mt-4">
//             {/* Display back information here */}
//             <p>{backInfo}</p>
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

// export function CardGrid() {
//   const events = [
//     {
//       imageUrl: img,
//       title: 'Technical Event 1',
//       description: 'Description 1',
//       // Front information
//       frontInfo: 'This is some front-specific information.',
//       // Back information
//       backInfo: 'This is some back-specific information.',
//     },
//     {
//       imageUrl: img,
//       title: 'Technical Event 2',
//       description: 'Description 2',
//       frontInfo: 'Another example of front information.',
//       backInfo: 'More details relevant to the back side.',
//     },
//     // ... other events
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
//       {events.map((event) => (
//         <EventCard key={event.title} {...event} />
//       ))}
//     </div>
//   );
// }
