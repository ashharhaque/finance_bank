"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Understanding Client Needs",
    description:
      "Conducting detailed financial assessments and industry research.",
  },
  {
    title: "Strategizing the Right Solution",
    description:
      "Customizing financing strategies based on business objectives.",
  },
  {
    title: "Executing with Precision",
    description:
      "Leveraging our network to secure the best financial solutions. An efficient in-house underwriting process for a close-to-perfect presentation of every proposal.",
  },
  {
    title: "Ongoing Support & Advisory",
    description:
      "Providing continuous financial guidance for long-term success.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OurApproach = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide mb-12"
        >
          <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            Our Approach
          </h2>
        </motion.h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index + 1}
              className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow text-left md:text-center"
            >
              <h3 className="text-xl font-semibold text-orange-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
