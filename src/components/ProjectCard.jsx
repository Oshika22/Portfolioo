import { useEffect, useRef, useState } from "react";

export default function ProjectCard({ title, description, tools, image, liveLink,videoLink, gitLink}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const glow = glowRef.current;
    let animFrame;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;

      animFrame = requestAnimationFrame(animate);
    };

    const handleMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleEnter = () => {
      setIsHovering(true);
      animFrame = requestAnimationFrame(animate);
    };

    const handleLeave = () => {
      setIsHovering(false);
      cancelAnimationFrame(animFrame);
    };

    const card = cardRef.current;
    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group h-[300px] rounded-2xl overflow-hidden p-6 border border-gray-200  bg-white/5 backdrop-blur-md hover:scale-[1.02] transition-all duration-300 shadow-lg"
    >
      {/* 🔥 Realistic Glow */}
      <div
        ref={glowRef}
        className={`absolute w-80 h-80 rounded-2xl bg-gradient-to-br from-[#0D00A4] via-blue-500 to-purple-500 opacity-0 group-hover:opacity-40 blur-3xl pointer-events-none transition-opacity duration-300 ease-out mix-blend-screen z-0`}
        style={{ 
          transform: "translate(-50%, -50%)",
          borderImage: "linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05)) 1",
         }}
      />

        {/* 💡 Top Glow */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-44 h-24 bg-gradient-to-b from-[#22007C] via-transparent to-transparent blur-2xl pointer-events-none z-0" />

  {/* 💡 Bottom Glow */}
      <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-40 h-24 bg-gradient-to-t from-[#22007C] via-transparent to-transparent blur-2xl pointer-events-none z-0" />

      <div className="absolute bottom-0 left-2/3 -translate-x-1/2 w-40 h-24 bg-gradient-to-t from-purple-500 via-transparent to-transparent blur-2xl pointer-events-none z-0" />
      {/* 📦 Content */}
      <div className="relative z-10">
        <div className="w-full h-24 flex items-center justify-start mb-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain rounded-xl transition duration-300 group-hover:opacity-80"
          />
        </div>


        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <p className="text-sm text-gray-300 italic">Tools: {tools}</p>
        <a href={liveLink} className="text-sm text-gray-300 hover:text-purple-500 m-2">Live Link</a>
        <a href={videoLink} className="text-sm text-gray-300 hover:text-purple-500 m-2">Video Link</a>
        <a href={gitLink} className="text-sm text-gray-300 hover:text-purple-500 m-2">Github link</a>
      </div>
    </div>
  );
}
