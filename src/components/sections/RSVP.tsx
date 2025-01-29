import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { typography } from "../styles/typography";
import { createClient } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";
import { Users, UserX } from "lucide-react";

const supabase = createClient(
  "https://qstxewaenegeuknflrvj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdHhld2FlbmVnZXVrbmZscnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNzc0NjgsImV4cCI6MjA1MzY1MzQ2OH0.etyNs3l_4A4OyvlZpe4IqPj9aYYbvNunAcVQQUS6BZo"
);

interface FormData {
  name: string;
  attendance: "yes" | "no" | "";
  guests: string;
  message: string;
}

interface AttendanceStats {
  attending: number;
  notAttending: number;
  totalGuests: number;
}

export function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState<AttendanceStats>({
    attending: 0,
    notAttending: 0,
    totalGuests: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    try {
      const { data: attending, error: error1 } = await supabase
        .from("wedding_goo")
        .select("guests")
        .eq("attendance", true);

      const { data: notAttending, error: error2 } = await supabase
        .from("wedding_goo")
        .select("id")
        .eq("attendance", false);

      if (error1 || error2) throw error1 || error2;

      const totalGuests =
        attending?.reduce((sum, item) => sum + (item.guests || 0), 0) || 0;

      setStats({
        attending: attending?.length || 0,
        notAttending: notAttending?.length || 0,
        totalGuests,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("wedding_goo").insert([
        {
          name: formData.name,
          attendance: formData.attendance === "yes",
          guests:
            formData.attendance === "yes" ? parseInt(formData.guests) : null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast.success("Terima kasih atas konfirmasi kehadiran Anda!");
      setFormData({
        name: "",
        attendance: "",
        guests: "1",
        message: "",
      });

      // Refresh stats after successful submission
      fetchStats();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Maaf, terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${typography.heading.secondary}`}>
            Konfirmasi Kehadiran
          </h2>
          <p className={`${typography.body.regular} mb-8`}>
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Users className="w-6 h-6 text-rose-500 mx-auto mb-2" />
              <p className={`${typography.special.highlight} text-rose-600`}>
                {stats.attending}
              </p>
              <p className={`${typography.special.caption} text-gray-500`}>
                Total {stats.totalGuests} Tamu
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <UserX className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className={`${typography.special.highlight} text-gray-600`}>
                {stats.notAttending}
              </p>
              <p className={`${typography.special.caption} text-gray-500`}>
                &nbsp;
              </p>
            </motion.div>
          </div>

          <motion.form
            className="space-y-6 text-left"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className={typography.special.label}>
                Nama
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Masukkan nama Anda"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="attendance" className={typography.special.label}>
                Apakah Anda akan hadir?
              </label>
              <select
                id="attendance"
                value={formData.attendance}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    attendance: e.target.value as "yes" | "no" | "",
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              >
                <option value="">Pilih jawaban</option>
                <option value="yes">Ya, saya akan hadir</option>
                <option value="no">Maaf, saya tidak bisa hadir</option>
              </select>
            </div>

            {formData.attendance === "yes" && (
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                <label htmlFor="guests" className={typography.special.label}>
                  Jumlah yang akan hadir
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  disabled={isSubmitting}
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} orang
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            <div className="space-y-2">
              <label htmlFor="message" className={typography.special.label}>
                Pesan untuk kedua mempelai
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                rows={4}
                placeholder="Tulis ucapan dan doa Anda"
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              type="submit"
              className={`${
                typography.button.primary
              } w-full justify-center py-3 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim RSVP"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
