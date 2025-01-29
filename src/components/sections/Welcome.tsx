import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { typography } from "../styles/typography";

interface WelcomeProps {
  onOpen: () => void;
  isOpen: boolean;
}

// const BatikPattern = () => (
//   <motion.div
//     className="absolute inset-0 pointer-events-none overflow-hidden"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1 }}
//   >
//     {/* Main Frame */}
//     <div className="absolute inset-0 border-[3px] border-white/50 rounded-2xl" />

//     {/* Decorative Corners */}
//     {[0, 90, 180, 270].map((rotation, index) => (
//       <motion.div
//         key={rotation}
//         className="absolute w-32 h-32"
//         style={{
//           top: rotation < 180 ? -16 : "auto",
//           bottom: rotation >= 180 ? -16 : "auto",
//           left: rotation === 0 || rotation === 270 ? -16 : "auto",
//           right: rotation === 90 || rotation === 180 ? -16 : "auto",
//           transform: `rotate(${rotation}deg)`,
//         }}
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8, delay: index * 0.2 }}
//       >
//         <svg viewBox="0 0 100 100" className="w-full h-full">
//           <motion.path
//             d="M 50 100 C 50 100, 100 100, 100 50 C 100 50, 100 0, 50 0"
//             stroke="white"
//             strokeWidth="3"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1.5, delay: index * 0.2 }}
//           />
//           <motion.path
//             d="M 60 90 C 60 90, 90 90, 90 60 C 90 60, 90 30, 60 30"
//             stroke="white"
//             strokeWidth="2"
//             fill="none"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
//           />
//           <motion.circle
//             cx="75"
//             cy="75"
//             r="4"
//             fill="white"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
//           />
//         </svg>
//       </motion.div>
//     ))}

//     {/* Batik Pattern Border */}
//     <motion.div
//       className="absolute inset-4 border-[1px] border-white/30 rounded-xl"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 1 }}
//     >
//       {/* Decorative Lines */}
//       {[...Array(4)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute inset-0 border-[1px] border-white/20 rounded-xl"
//           initial={{ opacity: 0, scale: 0.9 + i * 0.02 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1.2 + i * 0.2 }}
//         />
//       ))}
//     </motion.div>
//   </motion.div>
// );

export function Welcome({ onOpen, isOpen }: WelcomeProps) {
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      const decodedName = decodeURIComponent(to)
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      setGuestName(decodedName);
    }
  }, []);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50"
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero.jpeg')" }}
          />

          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              className="relative bg-black/40 backdrop-blur-sm p-12 rounded-2xl shadow-2xl text-center max-w-lg w-full"
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{
                scale: 0.8,
                y: 100,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              transition={{ duration: 0.5 }}
            >
              {/* <BatikPattern /> */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`${typography.body.large} text-white mb-4`}
                >
                  The Wedding of
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`${typography.heading.primary} text-rose-300 mb-12`}
                >
                  Sarah <br />
                  <span>&</span> <br />
                  James
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-12"
                >
                  <p className={`${typography.body.large} text-white`}>
                    Kepada Yth.
                  </p>
                  <p className={`${typography.special.counter} text-white`}>
                    {guestName || "Tamu Undangan"}
                  </p>
                </motion.div>

                <motion.button
                  onClick={onOpen}
                  className="bg-rose-300 backdrop-blur text-white px-8 py-3 rounded-full hover:bg-white/90 hover:text-rose-300 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buka Undangan
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
