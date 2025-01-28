import React from "react";
import { ExternalLink } from "lucide-react"; // Using lucide-react for the link icon

const LabsList: React.FC = () => {
  const labs = [
    {
      name: "3D Printing Virtual Simulation Lab",
      link: "https://3dp-dei.vlabs.ac.in/",
    },
    {
      name: "Metal Forming Virtual Simulation Lab",
      link: "https://msvs-dei.vlabs.ac.in/",
    },
    {
      name: "Virtual Power Lab",
      link: "https://vp-dei.vlabs.ac.in/Dreamweaver/",
    },
    {
      name: "Control Engineering Lab",
      link: "https://ce-dei.vlabs.ac.in/",
    },
    {
      name: "Linear Algebra Virtual Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Biochemistry Virtual Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Scientific Computing Virtual Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Internet of Things Virtual Laboratory",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Electroanalytical Virtual Laboratory",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Engineering Graphics Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Concrete Technology Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Engineering Dynamics Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Waves, Optics and Quantum Mechanics Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
    {
      name: "Manufacturing Processes (Foundry & Casting) Virtual Simulation Lab",
      link: "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/496143_563974.png",
    },
  ];

  return (
    <section id="labs" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <a
            href="https://www.dei.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://www.vlab.co.in/images/logo.jpg"
              alt="DEI Virtual Labs Logo"
              className="h-24 md:h-32 w-auto mb-4"
            />
          </a>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            VIRTUAL LABS @ DEI
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transform transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-500 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">
                {lab.name}
              </span>
              <a
                href={lab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 ml-2"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsList;
