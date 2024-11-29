import { motion } from "framer-motion";
import { Facebook, Linkedin, Youtube, MapPin, Mail } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-8 px-4 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
      >
        {/* Logo Section */}
        <motion.div
          variants={item}
          className="flex justify-center md:justify-end order-1 md:order-3"
        >
          <img src="/" alt="Logo" className="h-12" />
        </motion.div>

        {/* Contact Info Section */}
        <motion.div variants={item} className="text-right space-y-4 order-2">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            تواصل معنا
          </h3>
          <div className="flex items-center justify-end gap-2">
            <span>شبين الكوم , المنوفية</span>
            <MapPin className="h-5 w-5 text-blue-400" />
          </div>

          <div className="flex items-center justify-end gap-2">
            <span>@gmail.com</span>
            <Mail className="h-5 w-5 text-blue-400" />
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          variants={item}
          className="text-right space-y-4 order-3 md:order-1"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">تابعنا</h3>
          <div className="flex flex-col gap-4 items-end">
            <motion.a
              href="#"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              whileHover={{ x: -5 }}
            >
              <span>الفيسبوك</span>
              <Facebook className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              whileHover={{ x: -5 }}
            >
              <span>لينكدإن</span>
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              whileHover={{ x: -5 }}
            >
              <span>يوتيوب</span>
              <Youtube className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="text-center mt-8 pt-4 border-t border-zinc-800"
      >
        <p className="text-sm text-zinc-500">كل الحقوق محفوظة © 2024 شركه</p>
      </motion.div>
    </footer>
  );
}
