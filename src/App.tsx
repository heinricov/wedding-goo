import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { Welcome } from "./components/sections/Welcome";
import { Hero } from "./components/sections/Hero";
import { Couple } from "./components/sections/Couple";
import { EventDetails } from "./components/sections/EventDetails";
import { Gallery } from "./components/sections/Gallery";
import { RSVP } from "./components/sections/RSVP";
import { Gift } from "./components/sections/Gift";
import { Footer } from "./components/sections/Footer";
import { MusicPlayer } from "./components/MusicPlayer";
import { ThankYou } from "./components/sections/ThankYou";
import { Messages } from "./components/sections/Messages";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <Welcome isOpen={isOpen} onOpen={() => setIsOpen(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MusicPlayer autoPlay />
            <Hero />
            <Couple />
            <EventDetails />
            <RSVP />
            <Gift />
            <Gallery />
            <ThankYou />
            <Messages />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
