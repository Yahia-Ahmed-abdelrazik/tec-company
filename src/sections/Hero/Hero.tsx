import React from "react";
import { motion } from "framer-motion";
import Call from "@/assets/imgs/call.svg";
import WhatsApp from "@/assets/imgs/whatsapp.svg";
import Facebook from "@/assets/imgs/facebook.svg";
import Linkedin from "@/assets/imgs/linkedin.svg";
import portofolio from "@/assets/imgs/portofolio.svg";
import products from "@/assets/imgs/products.svg";
import FlipPrand from "@/pages/Home/FlipPrand";

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: WhatsApp, href: "#", label: "WhatsApp" },
  { icon: Call, href: "#", label: "Call" },
];

const Hero: React.FC = () => {
  return (
    <motion.div
      className="relative min-h-[80dvh] pt-[150px] md:pt-[200px] pb-[100px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_40%,black_60%,black_70%,black_80%,transparent)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background shadows */}
      <motion.div
        className="absolute top-0 right-0 w-0 h-0 z-[-2] opacity-60 shadow-[0_0_25vw_25vw_rgba(14,14,15,0.3)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-0 z-[-2] opacity-60 shadow-[0_0_25vw_25vw_rgba(14,14,15,0.3)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-[-2] opacity-40 shadow-[0_0_20vw_20vw_rgba(49,130,249,0.3)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />

      {/* Animated lines */}
      <div className="flex justify-around pointer-events-none -z-[1] absolute top-0 right-0 w-full h-full">
        {[0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.1].map((delay, index) => (
          <motion.span
            key={index}
            className="line"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{
              duration: 2 + index * 0.3,
              delay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="line-before"></span>
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="flex flex-col justify-center items-center text-center mx-auto gap-4 max-w-[calc(100%-24px)] w-full md:max-w-[800px]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FlipPrand>
          اسم الشركه
          <span className="font-serif inline-flex text-blue-700 px-2 pt-4">
            و شعار
          </span>
          الشركه
        </FlipPrand>
        <motion.h5
          className="text-balance lg:text-lg text-gray-700 font-serif leading-tight max-w-lg md:max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          نحن شركة الابتكار الرقمي، نتميز في تصميم المواقع الإلكترونية، تطوير
          تطبيقات الجوال، بناء المتاجر الإلكترونية، وتقديم الحلول التدريبية. نحن
          نساعد في تحويل أفكارك إلى حلول واقعية من خلال لمسات إبداعية يقدمها
          فريقنا المحترف والمتميز. نؤمن بأن كل فكرة تستحق أن تصبح حقيقة، ونحن
          هنا لتحقيق ذلك بأعلى مستويات الجودة والابتكار.
        </motion.h5>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-4 p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-transparent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg hover:bg-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="glow"></span>
              <img
                src={link.icon}
                alt={link.label}
                className="z-10 h-5 w-5  transition-all duration-300 ease-in-out group-hover:brightness-0 group-hover:invert group-hover:scale-110"
              />
              <div className="absolute inset-0 scale-0 rounded-full bg-blue-400 transition-all duration-300 ease-in-out group-hover:scale-100"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex justify-center items-center gap-4 flex-wrap mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
            { text: "منتجاتنا", icon: products },
            { text: "اطلب خدمه", icon: null },
            { text: "اعمالن", icon: portofolio },
          ].map((button, index) => (
            <motion.a
              key={index}
              href="#"
              className="btn-custom transition-all duration-300 ease-in-out group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:text-white text-zinc-900 transition-all duration-300 ease-in-out">
                {button.text}
              </span>
              <span className="glow"></span>
              {button.icon && (
                <img
                  src={button.icon}
                  alt=""
                  className="h-4 object-contain transition-all duration-300 ease-in-out group-hover:brightness-0 group-hover:invert group-hover:scale-110"
                />
              )}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
