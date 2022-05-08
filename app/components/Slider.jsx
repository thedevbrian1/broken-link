// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";

// const images = ['/bills.svg', '/computer.svg', '/confirmed.svg'];

// const variants = {
//     enter: (direction) => {
//         return {
//             x: direction > 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     },
//     center: {
//         zIndex: 1,
//         x: 0,
//         opacity: 1
//     },
//     exit: (direction) => {
//         return {
//             zIndex: 0,
//             x: direction < 0 ? 1000 : -1000,
//             opacity: 0
//         };
//     }
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
// };

// export default function Slider() {
//     const [[page, direction], setPage] = useState([0, 0]);
//     const imageIndex = wrap(0, images.length, page);
//     const paginate = (newDirection) => {
//         setPage([page + newDirection, newDirection]);
//     };

//     return (
//         <div className="w-96 h-96 relative flex justify-center items-center">
//             <AnimatePresence initial={false} custom={direction}>
//                 <motion.img 
//                     className="absolute max-w-full"
//                     key={page}
//                     src={images[imageIndex]}
//                     custom={direction}
//                     variants={variants}
//                     initial="enter"
//                     animate="center"
//                     exit="exit"
//                     transition={{
//                         x: { type: "spring", stiffness: 300, damping: 30 },
//                         opacity: { duration: 0.2 }
//                     }}
//                     drag="x"
//                     dragConstraints={{ left: 0, right: 0 }}
//                     dragElastic={1}
//                     onDragEnd={(e, { offset, velocity }) => {
//                         const swipe = swipePower(offset.x, velocity.x);
//                         if (swipe < -swipeConfidenceThreshold) {
//                             paginate(1);
//                         } else if (swipe > swipeConfidenceThreshold) {
//                             paginate(-1);
//                         }
//                     }}
//                 />
//             </AnimatePresence>
//             <div className="absolute bg-white rounded-3xl w-10 h-10 flex justify-center items-center cursor-pointer font-bold text-lg z-[2] select-none top-1/2 right-2.5" onClick={() => paginate(1)}>
//                 {"‣"}
//             </div>
//             <div className="absolute bg-white rounded-3xl w-10 h-10 flex justify-center items-center cursor-pointer font-bold text-lg z-[2] select-none top-1/2 left-2.5 -scale-100" onClick={() => paginate(-1)}>
//                 {"‣"}
//             </div>
//         </div>
//     )
// }