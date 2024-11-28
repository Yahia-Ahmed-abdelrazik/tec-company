import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cloud,
  Code,
  Laptop,
  LayoutDashboard,
  MessageSquareCode,
  Smartphone,
} from "lucide-react";

interface ServiceDetails {
  items: string[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: ServiceDetails;
}

const services: Service[] = [
  {
    icon: <MessageSquareCode className="h-8 w-8" />,
    title: "الحلول التسويقية",
    description:
      "خطط تسويقية مبتكرة لتوسيع نطاق أعمالك والوصول إلى جمهورك المثالي",
    details: {
      items: [
        "إدارة الإعلانات الرقمية",
        "تحسين نتائج محركات البحث (SEO)",
        "التسويق عبر البريد الإلكتروني",
        "إنشاء المحتوى الإعلامي",
        "إعداد استراتيجيات تسويقية شاملة",
      ],
    },
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "تطوير تطبيقات الهاتف",
    description: "إنشاء تطبيقات مبتكرة تلبي احتياجات العملاء وتزيد من التفاعل",
    details: {
      items: [
        "تطبيقات متوافقة مع iOS",
        "تطبيقات مخصصة لنظام Android",
        "تصميم جذاب وسهل الاستخدام",
        "اختبار شامل للأداء",
        "دعم وصيانة التطبيقات",
      ],
    },
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "إنشاء المواقع الإلكترونية",
    description: "مواقع احترافية تعكس رؤيتك وتضمن تجربة مستخدم مميزة",
    details: {
      items: [
        "تصميم واجهات عصرية",
        "التوافق مع الأجهزة المختلفة",
        "تحسين سرعة وأداء الموقع",
        "تطوير متاجر إلكترونية",
        "التحديثات المنتظمة",
      ],
    },
  },
  {
    icon: <LayoutDashboard className="h-8 w-8" />,
    title: "خدمات التصميم الإبداعي",
    description: "تصاميم مبتكرة تبرز علامتك التجارية بشكل مميز",
    details: {
      items: [
        "تصميم الشعارات والهوية",
        "تصميم المطبوعات التسويقية",
        "إعداد الرسومات لمنصات التواصل",
        "تصميم واجهات الاستخدام (UI/UX)",
        "تطوير الأفكار الإبداعية",
      ],
    },
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "الحلول السحابية",
    description: "تقنيات متطورة لتعزيز البنية التحتية لأعمالك",
    details: {
      items: [
        "إدارة الخوادم السحابية",
        "أمان البيانات السحابية",
        "خدمات الحوسبة السحابية",
        "إعداد النسخ الاحتياطية",
        "استراتيجيات تخزين آمنة",
      ],
    },
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "الاستشارات التقنية",
    description: "توجيهات تقنية دقيقة لدعم اتخاذ القرارات الصائبة",
    details: {
      items: [
        "تقييم الأنظمة الحالية",
        "تقديم حلول برمجية مخصصة",
        "خدمات الأمن السيبراني",
        "تطوير استراتيجيات رقمية",
        "استشارات تكنولوجية حديثة",
      ],
    },
  },
];

export default function OurServices() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-400 py-20 px-4 text-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">خدماتنا</h2>
          <h3 className="text-4xl font-bold mb-6">
            حيث الجودة تلتقي بالابتكار
          </h3>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            مؤسسة تقني تقدم حلولاً رقمية متكاملة لإعادة البيع في تصميم المواقع
            الإلكترونية وتطبيقات الجوال. نحن نقدم منتجات متطورة بأعلى معايير
            الجودة لتلبية احتياجاتك.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative min-h-[280px] rounded-[32px] bg-zinc-800/30 backdrop-blur-sm p-6 transition-all duration-500 overflow-hidden group"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              tabIndex={0}
              role="button"
            >
              {/* Default State */}
              {hoverIndex !== index && (
                <div className="relative z-10">
                  <div className="mb-4 text-blue-300">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-zinc-300 text-sm">{service.description}</p>
                </div>
              )}

              {/* Hover State */}
              {hoverIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-[32px] bg-zinc-100 p-6 text-zinc-900"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-4 mb-8">
                    {service.details.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-2 text-right"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <ArrowLeft className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <button className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    قراءة المزيد
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
