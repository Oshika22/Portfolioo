import { amazonLogo, deeplearingLogo, cloudLogo, mongoLogo, oracleLogo, } from "../assets/images/index";
export default function Certification() {
  const certifications = [
    {
      title: 'Architecting Solutions on AWS',
      issuer: 'Amazon Web Services',
      date: 'April 2024',
      img: amazonLogo,
      link: 'https://www.coursera.org/account/accomplishments/verify/CKSHSJ8EYZIQ',
      description: 'Understood AWS services and deployment basics.',
    },
    {
      title: 'Advanced Learning Algorythm',
      issuer: 'DeepLearning.AI',
      date: 'March 2025',
      img: deeplearingLogo,
      link: 'https://www.coursera.org/account/accomplishments/verify/8DN0JQ5I275C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      description: 'Mastered ML algorithms and real-time data analysis.',
    },
    {
      title: 'Google Cloud Fundamentals',
      issuer: 'Google Cloud',
      date: 'Jan 2025',
      img: cloudLogo,
      link: 'https://www.coursera.org/account/accomplishments/verify/Y43J549C05E4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      description: 'Understood Azure services and deployment basics.',
    },
    {
      title: 'MongoDB Developer Toolkit',
      issuer: 'MongoDB',
      date: 'Dec 2024',
      img: mongoLogo,
      link: 'https://www.geeksforgeeks.org/certificate/a06fcda82b5dddab2f59243ea70256ca?utm_source=socials&utm_medium=cc_link',
      description: 'Grasped fundamentals of NoSQL database.',
    },
        {
      title: 'Database Programming with SQL',
      issuer: 'Oracle',
      date: 'Nov 2024',
      img: oracleLogo,
      description: 'Grasped fundamentals of relational databases.',
    },
  ];

  return (
    <div className="bg-[#04052E] py-12 px-4 text-white">
      <h1 className="justify-centre leading-tight bg-gradient-to-r from-[#865DFF] to-[#00B4D8] bg-clip-text text-transparent text-6xl font-bold text-center m-4">Certifications</h1>

      {/* Horizontal scroll with alternate vertical positions */}
      <div className="hScroll overflow-x-auto overflow-y-hidden h-[300px] p-4">
        <div className="flex gap-6 w-max px-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`min-w-[280px] sm:min-w-[300px] md:min-w-[320px] border border-white/20 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 bg-[#0C1559]/60 hover:bg-blue-950
              ${index % 2 === 0 ? 'translate-y-4' : '-translate-y-4'}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 hover:shadow-lg">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <a href={cert.link} target="_blank"><h3 className="text-lg font-semibold hover:text-blue-100">{cert.title}</h3></a>
              <p className="text-sm text-white/70">{cert.issuer} • {cert.date}</p>
              <p className="mt-3 text-sm text-white/80">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
