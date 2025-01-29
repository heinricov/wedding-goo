import { useState } from "react";
import { motion } from "framer-motion";
import { typography } from "../styles/typography";
import { Gift as GiftIcon, Copy, CheckCircle2, MapPin } from "lucide-react";
import { toast } from "react-hot-toast";

interface BankAccount {
  bank: string;
  number: string;
  name: string;
}

interface Address {
  name: string;
  detail: string;
}

const bankAccounts: BankAccount[] = [
  {
    bank: "BCA",
    number: "1234567890",
    name: "JOHN DOE",
  },
  {
    bank: "Mandiri",
    number: "0987654321",
    name: "JANE DOE",
  },
];

const shippingAddress: Address = {
  name: "John & Jane Doe",
  detail: "Jl. Contoh No. 123, RT 01/RW 02, Kelurahan Contoh, Kecamatan Contoh, Kota Contoh, 12345",
};

export function Gift() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyToClipboard = async (text: string, bank: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAccount(bank);
      toast.success("Nomor rekening berhasil disalin!");
      setTimeout(() => setCopiedAccount(null), 2000);
    } catch {
      toast.error("Gagal menyalin nomor rekening");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GiftIcon className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className={typography.heading.secondary}>Kirim Hadiah</h2>
          <p className={`${typography.body.regular} mb-12`}>
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless atau mengirimkannya ke alamat berikut.
          </p>

          <div className="space-y-6">
            {bankAccounts.map((account) => (
              <motion.div
                key={account.bank}
                className="bg-white p-6 rounded-xl shadow-sm text-left"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className={`${typography.special.label} text-rose-600 mb-1`}>
                  Bank {account.bank}
                </p>
                <p className={`${typography.special.highlight} mb-1`}>
                  {account.number}
                </p>
                <p className={`${typography.body.regular} text-gray-600 mb-4`}>
                  a.n {account.name}
                </p>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors"
                  onClick={() => copyToClipboard(account.number, account.bank)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {copiedAccount === account.bank ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Nomor Rekening
                    </>
                  )}
                </motion.button>
              </motion.div>
            ))}

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm text-left mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                <div>
                  <p className={`${typography.special.highlight} mb-2`}>
                    {shippingAddress.name}
                  </p>
                  <p className={`${typography.body.regular} text-gray-600 whitespace-pre-wrap`}>
                    {shippingAddress.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
