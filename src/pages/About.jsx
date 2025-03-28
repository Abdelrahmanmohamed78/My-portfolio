import PageTitle from "../components/PageTitle";
import img from "../assets/project-2.png";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css3.svg";
import javaScriptImg from "../assets/javascript.svg";
import typeScriptImg from "../assets/typescript.svg";
import bootstrapImg from "../assets/bootstrap.svg";
import tailwindImg from "../assets/tailwindcss.svg";
import sassImg from "../assets/sass.svg";
import reactImg from "../assets/react.svg";
import reduxImg from "../assets/redux.svg";
import certificateImg from "../assets/certificate.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main>
      <PageTitle center={true}>About Me</PageTitle>
      <div className="holder grid grid-cols-8 justify-center items-center gap-5">
        <div className="content col-span-8 xl:col-span-5">
          <p className="text-sm font-medium leading-[1.7] mb-12">
            I'm a dedicated frontend developer with a passion for crafting beautiful, 
            responsive websites and web applications. 
            I specialize in transforming designs into fully functional, 
            user-friendly interfaces using HTML, CSS, and JavaScript. 
            With my experience in React framework and RTK, 
            I focus on building fast, interactive, and scalable web experiences. 
            I love solving complex problems while ensuring a smooth, 
            intuitive user journey. 
            I aim to deliver polished, efficient, and seamless digital products that enhance the user experience.
          </p>
          <div className="skills-holder">
            <h3 className="text-gray-400 text-2xl font-bold mb-4">Skills</h3>
            <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={htmlImg}
                    alt="html image"
                  />
                  <span className="text-slate-300 font-semibold">HTML</span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={cssImg}
                    alt="css image"
                  />
                  <span className="text-slate-300 font-semibold">CSS</span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={javaScriptImg}
                    alt="javascript image"
                  />
                  <span className="text-slate-300 font-semibold">
                    JavaScript
                  </span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={typeScriptImg}
                    alt="typescript image"
                  />
                  <span className="text-slate-300 font-semibold">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={tailwindImg}
                    alt="tailwind image"
                  />
                  <span className="text-slate-300 font-semibold">Tailwind</span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={bootstrapImg}
                    alt="bootstrap image"
                  />
                  <span className="text-slate-300 font-semibold">
                    Bootstrap
                  </span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={sassImg}
                    alt="sass image"
                  />
                  <span className="text-slate-300 font-semibold">Sass</span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={reactImg}
                    alt="react image"
                  />
                  <span className="text-slate-300 font-semibold">React</span>
                </div>
              </div>
              <div className="holder relative p-0.5 rounded-[5px] overflow-hidden z-[1] bg-black">
                <div className="skill flex gap-2 items-center rounded-[5px] py-2 px-4 bg-inherit">
                  <img
                    loading="lazy"
                    className="w-[30px] h-[30px]"
                    src={reduxImg}
                    alt="redux image"
                  />
                  <span className="text-slate-300 font-semibold">Redux</span>
                </div>
              </div>
            </div>
          </div>
          <div className="education-holder mb-7">
            <h3 className="text-gray-400 text-2xl font-bold mb-4 mt-6">
              Education
            </h3>
            <div className="university-name flex justify-between items-center">
              <p className="name flex items-center gap-2 font-semibold text-lg">
                <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>
                Mansoura University
              </p>
              <span className="text-gray-300 bg-[#20222c] py-[2px] px-3 rounded-[5px] text-[12px] font-semibold italic">2020 - 2024</span>
            </div>
            <p className="ml-6 mt-1 font-semibold text-lg">
              Computer Science - Computer and Information Technology.
            </p>
          </div>
          <div className="achievements-holder">
            <h3 className="text-gray-400 text-2xl font-bold mb-4 mt-6">
              Last Achievement
            </h3>
            <div className="achievement-box flex gap-3">
              <img loading="lazy" className="hidden md:block w-[80px] rounded-[3px]" src={certificateImg} alt="certificate image" />
              <div className="text-holder flex justify-between items-start grow gap-2">
                <div>
                  <p className="text-[14px] font-semibold">NTI - NTI Frontend Trainter</p>
                  <a href={certificateImg} download={'certificateImg'} className="text-[12px] text-blue-600 flex items-center gap-1">
                    View credentials
                    <FontAwesomeIcon className="text-[10px]" icon={faAnglesRight}></FontAwesomeIcon>
                  </a>
                </div>
                <span className="text-gray-300 bg-[#20222c] py-[2px] px-3 rounded-[5px] text-[12px] font-semibold italic">Issued at September 17, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="image col-span-8 xl:col-span-3">
          <img loading="lazy" className="w-full" src={img} alt="" />
        </div>
      </div>
    </main>
  );
}
