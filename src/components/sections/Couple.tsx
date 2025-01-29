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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

export function Couple() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-4 mb-10">
            <motion.h2
              variants={fadeInUp}
              className={typography.heading.secondary}
            >
              Mempelai
            </motion.h2>
            <motion.p variants={fadeIn} className={typography.body.regular}>
              Dengan rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk
              menghadiri pernikahan kami:
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
            {/* Mempelai Wanita */}
            <motion.div
              className="text-center max-w-sm"
              variants={slideFromLeft}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-rose-200 rounded-full transform -rotate-6 scale-105"></div>
                <img
                  src="/images/bride.jpeg"
                  alt="Mempelai Wanita"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className={typography.heading.tertiary}>
                  Sarah Johnson, S.Kom
                </h3>
                <p className={typography.special.label}>Putri dari Pasangan</p>
                <p className={typography.special.highlight}>
                  Bpk. Robert Johnson & Ibu Maria Johnson
                </p>

                <div className="space-y-2 text-gray-600 font-cormorant">
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Lahir:</span> Jakarta, 15
                    Mei 1995
                  </motion.p>
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Pendidikan:</span> S1 Teknik
                    Informatika
                  </motion.p>
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Alamat:</span> Jl. Kenanga
                    No. 123, Jakarta Selatan
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>

            {/* Ornamen & */}
            <motion.div
              className="my-8 md:my-0"
              variants={scaleIn}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.8 },
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-rose-100 rounded-full flex items-center justify-center shadow-lg">
                <span className={typography.decorative.ornament}>&</span>
              </div>
            </motion.div>

            {/* Mempelai Pria */}
            <motion.div
              className="text-center max-w-sm"
              variants={slideFromRight}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-rose-200 rounded-full transform rotate-6 scale-105"></div>
                <img
                  src="/images/groom.jpeg"
                  alt="Mempelai Pria"
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className={typography.heading.tertiary}>
                  James Smith, M.B.A
                </h3>
                <p className={typography.special.label}>Putra dari Pasangan</p>
                <p className={typography.special.highlight}>
                  Bpk. William Smith & Ibu Emma Smith
                </p>

                <div className="space-y-2 text-gray-600 font-cormorant">
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Lahir:</span> Surabaya, 22
                    Agustus 1993
                  </motion.p>
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Pendidikan:</span> S2
                    Business Administration
                  </motion.p>
                  <motion.p
                    className={typography.body.regular}
                    variants={fadeIn}
                  >
                    <span className="font-semibold">Alamat:</span> Jl. Melati
                    No. 456, Jakarta Pusat
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
