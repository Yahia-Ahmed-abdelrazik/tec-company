import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import test_img from "@/assets/imgs/test_img.webp";

export default function AboutUs() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });
  const spring = useSpring(0, { duration: 3000 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isTextInView) {
      spring.set(2017);
    }
  }, [isTextInView, spring]);

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden order-first lg:order-last"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700">
            <div
              className="absolute inset-0  opacity-80 "
              style={{
                backgroundImage: `url(${test_img})`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="absolute top-8 right-8">
            <img src="" alt=" Logo" className="h-12 w-auto" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/50 to-transparent" />
        </motion.div>

        {/* Text Content - Right to Left for Arabic */}
        <div
          ref={textRef}
          className="text-right space-y-6 rtl order-last lg:order-first"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-600 mb-2">
              طلب خدمه...
            </h2>
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
              اسم الشركه و الوصف و عن الشركه
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              من تحليل البيانات إلى تصميم واجهات المستخدم، تعمل الشركة بخطوات
              ثابتة منذ نشأتها لتحقيق التميز في مجال تطوير البرمجيات، وتسعى
              باستمرار لتقديم حلول مبتكرة تجعلها من الرواد في السوق العربي،
              متطلعة لتحقيق طموحات كبيرة بجهود فريقها المبدع.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300"
          >
            <span className="ml-2">حمل ملف الشركة</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isTextInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <motion.div className="flex justify-end items-center gap-2 text-[120px] font-bold text-gray-300 leading-none ">
              <motion.span>{rounded}</motion.span>
              <motion.h6 className="text-lg text-zinc-900  [writing-mode:vertical-rl]">
                التأسيس
              </motion.h6>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
