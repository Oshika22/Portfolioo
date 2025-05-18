import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {  rocket, muj, aic, acm} from "../assets/images/index";
import "react-vertical-timeline-component/style.min.css";
export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold">Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
          date="Jan 2025 – Present"
          iconStyle={{ background: "#0d00a4", color: "#fff",  display: "flex", alignItems: "center", justifyContent: "center", padding: 0,  }}
          icon={<img
            src={rocket}
            alt="Rocket Icon"
            className="w-[60%] h-[60%] object-contain"
          />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-yellow-400">Founder & Lead Developer — BizPulse</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg font-medium text-amber-50">Pre-incubated Startup | AIC MUJ</h4>
          <p>
            Founded BizPulse: an AI-driven platform for automating event data management
            Designed and developed the full-stack web app using React, Flask, MongoDB
            Integrated ML to predict event turnout from Excel submissions
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4", color: "#fff" }}
          date="March 2025 - Present"
          iconStyle={{ background: "#0d00a4", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, }}
          icon={<img
            src={muj}
            alt="muj Icon"
            className="w-[60%] h-[60%] object-contain"
          />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-yellow-400">Student Placement Coordinator</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg font-medium text-amber-50">Manipal University, Jaipur</h4>
          <p>
            Acted as the liaison between students and recruiters, organizing placement drives and career sessions. Provided resume reviews and interview prep, while collaborating with faculty and companies to boost placement outcomes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
          date="November 2024 – May 2025"
          iconStyle={{ background: "#0d00a4", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, }}
          icon={<img
            src={aic}
            alt="aic Icon"
            className="w-[60%] h-[60%] object-contain"
          />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-yellow-400"> Promotions Head</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg font-medium text-amber-50">Atal Incubation Centre MUJ</h4>
          <p>
            Handled digital promotions and outreach strategies for incubation events, including Incubation Week 2.0. Collaborated with startups, faculty, and student teams to boost visibility and engagement for AIC initiatives.
          </p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "linear-gradient(to right, #22007c, #0d00a4)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #0d00a4" }}
          date="May 2024 – May 2025"
          iconStyle={{ background: "#0d00a4", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, }}
          icon={<img
            src={acm}
            alt="acm Icon"
            className="w-[60%] h-[60%] object-contain"
          />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold text-yellow-400">Web Development Head</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg font-medium text-amber-50">ACM MUJ</h4>
          <p>
            Led the design and development of technical projects and event websites under ACM MUJ. Mentored juniors, managed collaborative Git workflows, and ensured smooth UI/UX for flagship events like Elicit 2024
          </p>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
