import { motion } from "framer-motion";
import { typography } from "../styles/typography";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function EventDetails() {
  const addToCalendar = (event: "akad" | "resepsi") => {
    const events = {
      akad: {
        text: "Akad Nikah Sarah & James",
        dates: "20250210T100000/20250210T110000",
        details: "Acara Akad Nikah Sarah & James",
        location:
          "Masjid Agung Al-Azhar, Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
      },
      resepsi: {
        text: "Resepsi Pernikahan Sarah & James",
        dates: "20250210T190000/20250210T220000",
        details: "Acara Resepsi Pernikahan Sarah & James",
        location:
          "Hotel Mulia Senayan, Jl. Asia Afrika, Senayan, Jakarta Pusat",
      },
    };

    const { text, dates, details, location } = events[event];
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      text
    )}&dates=${dates}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    window.open(url, "_blank");
  };

  const openMaps = (location: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-rose-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Akad Nikah */}
          <motion.div variants={fadeInUp} className="mb-20">
            <h3 className={typography.heading.secondary}>Akad Nikah</h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6 border border-rose-200">
              <div className="space-y-2">
                <p className={typography.body.large}>SENIN, 10 FEBRUARI 2025</p>
                <div className={typography.decorative.divider}></div>
                <p className={typography.body.regular}>
                  PUKUL 10.00 - 11.00 WIB
                </p>
              </div>

              <div className="space-y-4">
                <p className={typography.body.medium}>Masjid Agung Al-Azhar</p>
                <p className={typography.special.caption}>
                  Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => addToCalendar("akad")}
                    className={typography.button.primary}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Simpan Tanggal
                  </button>
                  <button
                    onClick={() => openMaps("Masjid Agung Al-Azhar Jakarta")}
                    className={typography.button.primary}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buka Maps
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div variants={fadeInUp}>
            <h3 className={typography.heading.secondary}>Resepsi</h3>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6 border border-rose-200">
              <div className="space-y-2">
                <p className={typography.body.large}>SENIN, 10 FEBRUARI 2025</p>
                <div className={typography.decorative.divider}></div>
                <p className={typography.body.regular}>
                  PUKUL 19.00 - 22.00 WIB
                </p>
              </div>

              <div className="space-y-4">
                <p className={typography.body.medium}>Hotel Mulia Senayan</p>
                <p className={typography.special.caption}>
                  Jl. Asia Afrika, Senayan, Jakarta Pusat
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => addToCalendar("resepsi")}
                    className={typography.button.primary}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Simpan Tanggal
                  </button>
                  <button
                    onClick={() => openMaps("Hotel Mulia Senayan Jakarta")}
                    className={typography.button.primary}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buka Maps
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('/images/hero.jpeg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}
