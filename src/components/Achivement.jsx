import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { link } from "framer-motion/client";

// ✅ Reusable Component
const AnimatedCircleCard = ({ title, content, quote, link }) => {
  const container = useRef();
  const [expanded, setExpanded] = useState(false);
  const { contextSafe } = useGSAP({ scope: container });

  const onClickGood = contextSafe(() => {
    const topCircle = container.current.querySelector(".exp-top");
    const bottomCircle = container.current.querySelector(".exp-bottom");
    const actCont = container.current.querySelector(".exp-actCont");
    const hovCont = container.current.querySelector(".exp-hovCont");

    gsap.to([topCircle], {
      width: expanded ? 36 : "100%",
      height: expanded ? 36 : "50%",
      borderRadius: expanded ? "50%" : "0%",
      top: expanded ? "10px" : 0,
      duration: 0.5,
    });
    gsap.to([bottomCircle], {
      width: expanded ? 36 : "100%",
      height: expanded ? 36 : "50%",
      borderRadius: expanded ? "50%" : "0%",
      right: expanded ? "10px" : 0,
      
      duration: 0.5,
    });
    gsap.to([actCont], {
      opacity: expanded ? 1 : 0,
      duration: 0.5,
    });
    gsap.to([hovCont], {
      opacity: expanded ? 0 : 1,
      delay: 0.25,
      duration: 0.5,
    });
    setExpanded(!expanded);
  });

  return (
    <div
      ref={container}
      // onClick={onClickGood}
      onMouseEnter={onClickGood}
      onMouseLeave={onClickGood}
      className="w-80 h-80 relative cursor-pointer"
    >
      <div className="w-80 h-80 absolute bg-[#140152] rounded-sm shadow-md border-2 border-[#0D00A4]" />

      {/* Top Circle */}
      <div className="exp-top w-9 h-9 absolute top-[10px] left-0 bg-[#4287f5] rounded-full" />

      {/* Bottom Circle*/}
      <div className="exp-bottom w-9 h-9 absolute bottom-0 right-[10px] bg-[#4287f5] rounded-full" />

      {/* Decorative Dots (Optional) */}
      <div className="w-5 h-5 absolute left-[25px] top-0 bg-[#4287f5] rounded-full" />
      <div className="w-5 h-5 absolute right-0 bottom-[25px] bg-[#4287f5] rounded-full" />

      {/*content*/}
      <div className="exp-actCont w-80 h-80 absolute flex flex-col items-center justify-center gap-4  font-['Reddit_Sans'] p-2">
        <div className="text-blue-300 text-2xl font-semibold">{title}</div> 
        <div className="text-lg text-blue-50 text-justify">{content}</div>
      </div>
      <div className="exp-hovCont w-80 h-80 absolute bg-gradient-to-br from-[#22007C] to-[#4287f5] border-[#458cff] border-[2px] flex flex-col items-center justify-center font-['Reddit_Sans'] opacity-0">
        <a href= {link} target="_blank"><div className="text-yellow-400 text-2xl font-semibold hover:text-yellow-200">{title}</div></a> 
        <div className="text-lg text-amber-50 text-justify">{quote}</div>
        
      </div>
    </div>
  );
};

// ✅ Main Component
export const Achivement = () => {
  const cards = [
    { title: "Student Excellence Award",
      content: "Recognized for exceptional leadership, and innovation, demonstrating a strong commitment to excellence and continuous improvement",
      quote: "Excellence is a journey, not a destination.",
      link: "https://www.linkedin.com/posts/oshika-sharma-a1120529a_thrilled-to-receive-the-student-excellence-activity-7261363848031395840-qiGu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhKH20BaT4Txl1KmFMwSVwfvY1fv21MA2w",
    },
    { title: "Trail Blazer Winner",
      content: " Served as team leader, leading a group of three to secure second place in the Trail Blazer Hackathon, where we tackled complex web development challenges and delivered an innovative solution",
      quote: "Every challenge is an opportunity to learn and level up.",
      link: "https://www.linkedin.com/posts/oshika-sharma-a1120529a_secured-2nd-place-in-trail-blazer-as-activity-7246188642551922688-CtF3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhKH20BaT4Txl1KmFMwSVwfvY1fv21MA2w"
     },
    { title: "Dean's List: Acadmic Excellence Award",
      content: "Awarded for outstanding academic performance, securing a 9.63 GPA in Semester 4, reflecting discipline",
      quote: "Learning deeply matters more than learning quickly.",
      link: "https://drive.google.com/file/d/1NvsvVHawgWgVeeWpOjOg-RppTqxUNA6l/view"
     },
    
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold">
        Honors & Awards
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-7 mb-7">
        {cards.map((card, index) => (
          <AnimatedCircleCard key={index} title={card.title} content={card.content} quote={card.quote} link = {card.link}/>
        ))}
      </div>
    </div>
  );
};

