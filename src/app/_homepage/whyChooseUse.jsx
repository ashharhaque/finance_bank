'use client';

import { Briefcase, Network, SlidersHorizontal, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Briefcase,
    title: "Expertise & Experience",
    description: "15+ years in investment banking & financial advisory.",
  },
  {
    icon: Network,
    title: "Strong Industry Network",
    description: "Established relationships with leading banks & financial institutions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Bespoke Financial Solutions",
    description: "Tailored financing strategies for diverse business needs.",
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "From strategy formulation to execution and post-funding advisory.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-center text-black uppercase tracking-wide mb-12"
        >
           <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            Why Choose Us
          </h2>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index + 1}
                whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
                className="flex items-start gap-4 bg-white p-6 border border-orange-100 rounded-2xl shadow-sm transition-transform duration-300 ease-in-out"
              >
                <div className="min-w-14 min-h-14 flex items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
