import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { typography } from "../styles/typography";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2025-08-20T16:00:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image dengan Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/hero.jpeg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark Overlay untuk meningkatkan kontras */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      {/* Batik Corner Decorations dengan Animasi */}
      <motion.div
        className="absolute top-0 left-0 w-40 md:w-60 h-40 md:h-60 opacity-0 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          backgroundImage: `url('/Pattern/batik.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-40 md:w-60 h-40 md:h-60 opacity-0 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 90 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          backgroundImage: `url('/Pattern/batik.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 md:w-60 h-40 md:h-60 opacity-0 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 0.6, scale: 1, rotate: -90 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          backgroundImage: `url('/Pattern/batik.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 md:w-60 h-40 md:h-60 opacity-0 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
        animate={{ opacity: 0.6, scale: 1, rotate: 180 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          backgroundImage: `url('/Pattern/batik.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      <motion.div
        className="relative text-center text-rose-400 font-bold px-4 max-w-4xl w-full mx-4 z-30"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1
          className={`${typography.heading.primary} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
        >
          Sarah & James
        </h1>
        <p
          className={`${typography.special.subtitle} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
        >
          Akan Segera Menikah
        </p>

        <div className="flex justify-center items-center mb-12">
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl px-4 md:px-8 py-4 md:py-6 border border-white/20 shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-4 gap-3 md:gap-10">
              <div className="text-center">
                <div
                  className={`${typography.special.counter} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
                >
                  {timeLeft.days}
                </div>
                <div className={typography.special.label}>Hari</div>
              </div>
              <div className="text-center">
                <div
                  className={`${typography.special.counter} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
                >
                  {timeLeft.hours}
                </div>
                <div className={typography.special.label}>Jam</div>
              </div>
              <div className="text-center">
                <div
                  className={`${typography.special.counter} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
                >
                  {timeLeft.minutes}
                </div>
                <div className={typography.special.label}>Menit</div>
              </div>
              <div className="text-center">
                <div
                  className={`${typography.special.counter} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
                >
                  {timeLeft.seconds}
                </div>
                <div className={typography.special.label}>Detik</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p
            className={`${typography.body.large} drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]`}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kami
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
