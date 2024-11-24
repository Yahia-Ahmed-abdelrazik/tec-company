import call from "@/assets/imgs/call.svg";
import whatsapp from "@/assets/imgs/whatsapp.svg";
import facebook from "@/assets/imgs/facebook.svg";
import linkedin from "@/assets/imgs/linkedin.svg";
const Home = () => {
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
          <h1 className=" flex-col font-serif font-bold text-5xl md:text-6xl text-center items-center text-zinc-900 text-balance ">
            اسم الشركه
            <span className="font-serif inline-flex text-blue-700  px-2 pt-4">
              و شعار
            </span>
            الشركه
          </h1>
          <h5 className="text-balance text-gray-500 font-serif leading-tight max-w-lg">
            نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص
            نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص
            نص
          </h5>
          {/* social */}
          <div className="flex items-center justify-center gap-2 p-2 ">
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-solid border-zinc-900 transition"
            >
              <img
                src={facebook}
                alt="whatsapp"
                className="h-4 object-contain transition"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-solid border-zinc-900 transition"
            >
              <img
                src={linkedin}
                alt="whatsapp"
                className="h-4 object-contain transition"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-solid border-zinc-900 transition"
            >
              <img
                src={whatsapp}
                alt="whatsapp"
                className="h-4 object-contain transition"
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-solid border-zinc-900 transition"
            >
              <img
                src={call}
                alt="whatsapp"
                className="h-4 object-contain transition"
              />
            </a>
          </div>
          {/* btns */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
