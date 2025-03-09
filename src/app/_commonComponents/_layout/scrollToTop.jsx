"use client"
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={`fixed bottom-50 right-4 w-12 h-12 bg-purple-600 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer $ {
        visible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
      initial={{ y: 10 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <ArrowUp size={24} />
    </motion.div>
  );
}
