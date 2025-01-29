import { motion } from "framer-motion";
import { typography } from "../styles/typography";

export function ThankYou() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={typography.heading.secondary}>Ucapan Terima Kasih</h2>
          
          <motion.div
            className="space-y-6 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={typography.body.regular}>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
              restu kepada kedua mempelai.
            </p>

            <div className={typography.decorative.divider} />

            <p className={typography.body.regular}>
              Atas kehadiran dan doa restu yang diberikan, kami mengucapkan terima
              kasih yang sebesar-besarnya. Semoga Allah SWT senantiasa memberikan
              rahmat dan berkah-Nya kepada kita semua.
            </p>

            <div className="mt-12">
              <p className={`${typography.special.highlight} mb-4`}>
                Wassalamu'alaikum Warahmatullahi Wabarakatuh
              </p>

              <motion.p
                className={typography.special.subtitle}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Sarah & James
              </motion.p>

              <p className={typography.body.regular}>
                Beserta Keluarga Besar
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
