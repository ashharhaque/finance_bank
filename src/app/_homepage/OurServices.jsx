'use client';

import React from 'react';
import {
  Briefcase,
  DollarSign,
  Layers,
  TrendingUp,
  RefreshCcw,
  Rocket,
} from 'lucide-react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Debt Syndication",
    icon: <DollarSign className="w-8 h-8 text-orange-600" />,
    points: [
      "Term Loans",
      "Structured Finance",
      "External Commercial Borrowings (ECBs)",
      "Mezzanine Financing",
      "Asset-Based Lending",
    ],
  },
  {
    title: "Working Capital Management",
    icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
    points: [
      "Fund-Based & Non-Fund-Based Facilities",
      "Invoice & Receivables Financing",
      "Cash Flow Optimization Strategies",
      "Supply Chain Financing",
      "Trade Finance Solutions",
    ],
  },
  {
    title: "Project Financing",
    icon: <Layers className="w-8 h-8 text-orange-600" />,
    points: [
      "Feasibility Studies & Financial Modeling",
      "Debt & Equity Structuring",
      "Government Incentives & Subsidies Advisory",
      "Private Equity & Venture Capital Funding",
    ],
  },
  {
    title: "Capital Advisory",
    icon: <Briefcase className="w-8 h-8 text-orange-600" />,
    points: [
      "Equity Financing",
      "Convertible Instruments",
      "Private Placement",
      "Capital Restructuring",
    ],
  },
  {
    title: "Business Restructuring & Turnaround",
    icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
    points: [
      "Debt Restructuring & Refinancing",
      "Financial Risk Assessment",
      "Asset Monetization Strategies",
      "Insolvency & Bankruptcy Advisory",
    ],
  },
  {
    title: "Venture Capital & MSME Funding",
    icon: <Rocket className="w-8 h-8 text-orange-600" />,
    points: [
      "Venture Capital & Angel Investment Advisory",
      "MSME Business Loans & Credit Facilitation",
      "Government-Backed Loan Assistance",
      "Startup & Growth-Stage Fundraising",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: 'easeOut',
    },
  }),
};

const OurServices = () => {
  return (
    <section id="our-services" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 uppercase tracking-wide mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-center font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            Our Services
          </h2>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-orange-100 hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              custom={idx * 0.15}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
