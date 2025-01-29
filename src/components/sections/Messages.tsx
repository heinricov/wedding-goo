import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { typography } from "../styles/typography";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qstxewaenegeuknflrvj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzdHhld2FlbmVnZXVrbmZscnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNzc0NjgsImV4cCI6MjA1MzY1MzQ2OH0.etyNs3l_4A4OyvlZpe4IqPj9aYYbvNunAcVQQUS6BZo"
);

interface Message {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      const { data, error } = await supabase
        .from("wedding_goo")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-rose-50 flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={typography.heading.secondary}>Ucapan & Doa</h2>
          <p className={`${typography.body.regular}`}>
            Terima kasih atas doa dan ucapan yang telah diberikan
          </p>
        </motion.div>

        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500" />
          </div>
        ) : (
          <motion.div
            className="flex-1 overflow-y-auto pb-8 px-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className="bg-white rounded-lg shadow-sm p-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`${typography.special.highlight} text-rose-600`}>
                    {message.name}
                  </h3>
                  <time className={`${typography.special.caption} text-gray-400 text-sm`}>
                    {new Date(message.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p className={`${typography.body.regular} text-gray-600 whitespace-pre-wrap break-words`}>
                  {message.message}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
