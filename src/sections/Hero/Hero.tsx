import Call from "@/assets/imgs/call.svg";
import WhatsApp from "@/assets/imgs/whatsapp.svg";
import Facebook from "@/assets/imgs/facebook.svg";
import Linkedin from "@/assets/imgs/linkedin.svg";
import portofolio from "@/assets/imgs/portofolio.svg";
import products from "@/assets/imgs/products.svg";
import FlipPrand from "@/pages/Home/FlipPrand";

//
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: WhatsApp, href: "#", label: "WhatsApp" },
  { icon: Call, href: "#", label: "Call" },
];

const Hero = () => {
  return (
    <>
      <div className="relative min-h-[80dvh] pt-[150px] md:pt-[200px] pb-[100px]  ">
        {/* background shadow */}
        <div className="absolute top-0 right-0 w-0 h-0 z-[-2] opacity-60 shadow-[0_0_25vw_25vw_rgba(14,14,15,0.3)]"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 z-[-2] opacity-60 shadow-[0_0_25vw_25vw_rgba(14,14,15,0.3)]"></div>
        {/* lins */}
        <div className="flex justify-around pointer-events-none -z-[1] absolute top-0 right-0 w-full h-full">
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "0.3s", animationDuration: "2s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "0.6s", animationDuration: "2.3s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "0.9s", animationDuration: "2.6s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "1.2s", animationDuration: "2.9s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before "
              style={{ animationDelay: "1.5s", animationDuration: "3.2s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "1.8s", animationDuration: "3.5s" }}
            ></span>
          </span>
          <span className="line ">
            <span
              className="line-before"
              style={{ animationDelay: "2.1s", animationDuration: "3.8s" }}
            ></span>
          </span>
        </div>
        {/* content */}
        <div className="  flex flex-col justify-center items-center text-center mx-auto gap-4 max-w-[calc(100%-24px)] w-full md:max-w-[800px]">
          <FlipPrand>
            اسم الشركه
            <span className="font-serif inline-flex text-blue-700  px-2 pt-4">
              و شعار
            </span>
            الشركه
          </FlipPrand>
          <h5 className="text-balance lg:text-lg text-gray-500 font-serif leading-tight max-w-lg md:max-w-2xl">
            نحن شركة الابتكار الرقمي، نتميز في تصميم المواقع الإلكترونية، تطوير
            تطبيقات الجوال، بناء المتاجر الإلكترونية، وتقديم الحلول التدريبية.
            نحن نساعد في تحويل أفكارك إلى حلول واقعية من خلال لمسات إبداعية
            يقدمها فريقنا المحترف والمتميز. نؤمن بأن كل فكرة تستحق أن تصبح
            حقيقة، ونحن هنا لتحقيق ذلك بأعلى مستويات الجودة والابتكار.
          </h5>
        </div>
        {/* social */}
        <div className="flex items-center justify-center gap-2 mt-4 p-2 ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-zinc-300 bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg"
            >
              <img
                src={link.icon}
                className="z-10 h-5 w-5 text-zinc-600 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-zinc-900"
              />
              <div className="absolute inset-0 scale-0 rounded-full bg-blue-400 transition-all duration-300 ease-in-out group-hover:scale-100"></div>
            </a>
          ))}
        </div>
        {/* btns */}
        <div className="flex justify-center items-center gap-4 flex-wrap mt-4">
          <a href="" className="btn ">
            <span>منتجاتنا</span>
            <img
              src={products}
              alt=""
              className="h-4 object-contain transition"
            />
          </a>
          <a href="" className="btn order-2 md:order-none ">
            <span>اطلب خدمه</span>
            <img src="" alt="" />
          </a>
          <a href="" className="btn">
            <span>اعمالن</span>
            <img
              src={portofolio}
              alt=""
              className="h-4 object-contain transition"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
