import { motion } from "framer-motion";
// icon for test
import img1 from "@/assets/imgs/1.svg";
import img2 from "@/assets/imgs/2.svg";
import img3 from "@/assets/imgs/3.svg";
import img4 from "@/assets/imgs/4.svg";
import img5 from "@/assets/imgs/5.svg";
import img6 from "@/assets/imgs/6.svg";
import img7 from "@/assets/imgs/7.svg";

interface CardProps {
  title: string;
  description: string;
  icon_src?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card = ({
  title,
  description,
  icon_src,
  className = "",
  children,
}: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-white border p-8 rounded-lg shadow-lg relative ${className}`}
  >
    <div className="text-right">
      <div dir="rtl" className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold mb-6  text-blue-700">{title}</h2>
        <div className="w-10 h-10 ">
          {icon_src && <img src={icon_src} alt="icon" />}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    {children && <div className="mt-12">{children}</div>}
  </motion.div>
);

interface ValueItemProps {
  icon: string;
  label: string;
}

const ValueItem = ({ icon, label }: ValueItemProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -15 }}
    className="flex  flex-col items-center justify-around h-full border p-4 gap-4 bg-white rounded-lg shadow-lg"
  >
    <img src={icon} alt="" className="w-10 h-10" />
    <span className="text-gray-700 text-center">{label}</span>
  </motion.div>
);

export default function OurVision() {
  const values = [
    { icon: img1, label: "الاستدامة" },
    { icon: img2, label: "التعلم المستمر" },
    { icon: img3, label: "الاستجابة السريعة" },
    { icon: img4, label: "العمل الجماعي" },
    { icon: img5, label: "تركز على العميل" },
    { icon: img6, label: "الجودة" },
    { icon: img7, label: "الابتكار" },
  ];

  return (
    <div className=" container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card
          title="رؤيتنا"
          icon_src={img5}
          description="نهدف لأن نكون الشركة الرائدة عالمياً في تقديم حلول تكنولوجية مبتكرة تساهم في تحقيق التفوق الرقمي وتعزيز التواجد الفعّال على الإنترنت بأسلوب فريد."
        />
        <Card
          icon_src={img3}
          title="رسالتنا"
          description="نحن ملتزمون بتمكين عملائنا عبر حلول مبتكرة في تصميم وتطوير المواقع والتطبيقات، تجمع بين الإبداع والتقنيات الحديثة لتوفير تجربة مستخدم استثنائية تحقق نجاحهم الرقمي المستدام."
        />
      </div>

      <Card
        title="قيمنا"
        description="نحن في مؤسسة نأتي نؤمن بأهمية القيم الأساسية التي ترتكز عليها خدماتنا، حيث نبني شراكات قوية مع عملائنا ونتميز في توفير حلول تقنية مبتكرة وشاملة"
      >
        <div className="grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.125 }}
            >
              <ValueItem {...value} />
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
}
