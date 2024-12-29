import { motion } from "framer-motion";
import Image from "next/image";

export default function ProblemStatement({ data }) {
  const { title, description, points } = data;

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-center opacity-80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.li
              key={idx}
              className="flex flex-col space-y-3 items-center bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={point.image}
                alt={point.title}
                width={125}
                height={125}
                priority
                className="object-cover rounded-full"
              />
              <h3 className="text-2xl font-semibold text-center">
                {point.title}
              </h3>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
