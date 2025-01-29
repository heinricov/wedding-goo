import { motion } from "framer-motion";
import { typography } from "../styles/typography";

interface GalleryImage {
  src: string;
  aspectRatio: string;
}

export function Gallery() {
  const images: GalleryImage[] = [
    {
      src: "/gallery/image1.jpeg",
      aspectRatio: "aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]",
    },
    {
      src: "/gallery/image2.jpeg",
      aspectRatio: "aspect-[3/4] md:aspect-square lg:aspect-[4/3]",
    },
    {
      src: "/gallery/image3.jpeg",
      aspectRatio: "aspect-square md:aspect-[4/5] lg:aspect-[3/4]",
    },
    {
      src: "/gallery/image4.jpeg",
      aspectRatio: "aspect-[4/3] md:aspect-[3/4] lg:aspect-[5/4]",
    },
    {
      src: "/gallery/image5.jpeg",
      aspectRatio: "aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4]",
    },
    {
      src: "/gallery/image6.jpeg",
      aspectRatio: "aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/3]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`${typography.heading.secondary} text-center`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.aspectRatio} relative group w-full h-full`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg z-10" />
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
