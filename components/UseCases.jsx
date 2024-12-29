import { motion } from "framer-motion";
import Image from "next/image";

export default function UseCases({ data }) {
  const { title, cases } = data;

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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col space-y-3 items-center bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={useCase.image}
                alt={useCase.title}
                width={125}
                height={125}
                priority
                className="object-cover rounded-full"
              />
              <h3 className="text-2xl font-semibold text-center">
                {useCase.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
