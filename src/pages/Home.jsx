import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faAnglesRight, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import landingImg from "../assets/project-1.png";
import htmlImg from "../assets/html.svg";
import cssImg from "../assets/css3.svg";
import javaScriptImg from "../assets/javascript.svg";
import typeScriptImg from "../assets/typescript.svg";
import reactImg from "../assets/react.svg";
import reduxImg from "../assets/redux.svg";
import bootstrapImg from "../assets/bootstrap.svg";
import tailwindImg from "../assets/tailwindcss.svg";
import sassImg from "../assets/sass.svg";
import gitImg from "../assets/git.svg";
import gitHubImg from "../assets/github.svg";
import cvFile from "../assets/Abdelrahman Mohamed CV.pdf";

export default function Home() {
  return (
    <main>
      <div className="intro-text text-center mb-6">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 mb-8">
          Hello, I'm
          <span className="gradient"> Abdelrahman Mohamed</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-xl sm:max-w-[80%] lg:max-w-[60%] mx-auto">
          An Experienced{" "}
          <span className="text-[#9c36fc] font-bold">
            Frontend Web Developer
          </span>
          . Learning many web technologies and frameworks, and building scalable
          web applications with high performance.
        </p>
        <ul className="links flex justify-center items-center gap-5 my-9">
          <li>
            <Link
              to={"https://github.com/Abdelrahmanmohamed78/"}
              target="_blank"
              className="duration-500 hover:text-white text-lg"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-1"
              ></FontAwesomeIcon>
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.linkedin.com/in/abdelrahman-mohamed-79baa51b6/"}
              target="_blank"
              className="duration-500 hover:text-white text-lg"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mr-1"
              ></FontAwesomeIcon>
              LinkedIn
            </Link>
          </li>
          <li>
            <a
              href={cvFile}
              download={"cvFile"}
              className="duration-500 hover:text-white text-lg"
            >
              <FontAwesomeIcon icon={faFile} className="mr-1"></FontAwesomeIcon>
              Resume
            </a>
          </li>
        </ul>
        <div className="buttons flex justify-center gap-2">
          <button className="main-btn rounded-[5px] text-sm main-bg py-[6px] px-5 font-semibold text-medium relative overflow-hidden z-[1]">
            <Link to={"/about"} className="flex gap-2 items-center font-bold">
              About Me
              <FontAwesomeIcon
                className="text-[12px]"
                icon={faAnglesRight}
              ></FontAwesomeIcon>
            </Link>
          </button>
          <button className="main-btn rounded-[5px] text-sm main-bg py-[6px] px-5 font-semibold text-medium relative overflow-hidden z-[1]">
            <Link
              to={"/projects"}
              className="flex gap-2 items-center font-bold"
            >
              Projects
              <FontAwesomeIcon
                className="text-[12px]"
                icon={faBullseye}
              ></FontAwesomeIcon>
            </Link>
          </button>
        </div>
      </div>
      <section className="landing-image">
        <img
          loading="lazy"
          className="mx-auto rounded-lg w-[1200px] max-w-full"
          src={landingImg}
          alt="landing-image"
        />
      </section>
      <section className="skills py-16">
        <div className="title flex justify-between items-center mb-3">
          <h3 className="text-white text-3xl font-semibold">My Skills</h3>
          <button className="main-btn main-bg relative overflow-hidden py-2 px-4 rounded-[5px] font-semibold text-white text-sm">
            <Link to={"/about"} className="flex items-center gap-2">
              More About Me
              <FontAwesomeIcon
                className="text-[12px]"
                icon={faAnglesRight}
              ></FontAwesomeIcon>
            </Link>
          </button>
        </div>
        <div className="boxes grid lg:grid-cols-2 gap-5">
          <div className="box">
            <p className="mb-3 text-slate-500 text-xl font-semibold">Tools</p>
            <div className="skills-holder grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={htmlImg}
                  alt="html image"
                />
                <span className="text-slate-200">HTML</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={cssImg}
                  alt="css image"
                />
                <span className="text-slate-200">CSS</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={javaScriptImg}
                  alt="javascript image"
                />
                <span className="text-slate-200">JavaScript</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={typeScriptImg}
                  alt="typeScript image"
                />
                <span className="text-slate-200">TypeScript</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={reactImg}
                  alt="react image"
                />
                <span className="text-slate-200">React.js</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={reduxImg}
                  alt="redux image"
                />
                <span className="text-slate-200">Redux</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={bootstrapImg}
                  alt="bootstrap image"
                />
                <span className="text-slate-200">Bootstrap</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={tailwindImg}
                  alt="tailwind image"
                />
                <span className="text-slate-200">Tailwind</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={sassImg}
                  alt="sass image"
                />
                <span className="text-slate-200">Sass</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="mb-3 text-slate-500 text-xl font-semibold">
              Version Control
            </p>
            <div className="skills-holder grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={gitImg}
                  alt="git image"
                />
                <span className="text-slate-200">Git</span>
              </div>
              <div className="skill flex gap-2 items-center border-[2px] border-[var(--main-border-color)] rounded-[5px] py-3 px-4 duration-500 hover:border-indigo-700">
                <img
                  loading="lazy"
                  className="w-[30px] h-[30px]"
                  src={gitHubImg}
                  alt="github image"
                />
                <span className="text-slate-200">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <h3 className="text-white text-3xl font-semibold mb-5">My Services</h3>
        <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              01
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              Web Development
            </h3>
            <p className="text-[16px] text-gray-500">
              I specialize in creating responsive, user-friendly websites that
              are not only visually appealing but also optimized for performance
              and usability. My expertise covers a wide range of web development
              services
            </p>
          </div>
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              02
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              Custom Website Design
            </h3>
            <p className="text-[16px] text-gray-500">
              I build tailor-made websites from scratch using the latest
              technologies and industry best practices. Whether you need a
              corporate website, e-commerce platform, or a personal portfolio, I
              deliver solutions that fit your specific needs.
            </p>
          </div>
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              03
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              Front-End Development
            </h3>
            <p className="text-[16px] text-gray-500">
              I offer comprehensive development services, with Creating reusable
              components that streamline development and maintain consistency.
              delivering a complete and cohesive web application.
            </p>
          </div>
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              04
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              SEO Optimization
            </h3>
            <p className="text-[16px] text-gray-500">
              I incorporate on-page SEO techniques to help improve your site's
              visibility in search engines and attract more visitors.
            </p>
          </div>
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              05
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              API Integration
            </h3>
            <p className="text-[16px] text-gray-500">
              From payment gateways to third-party services, I have experience
              in integrating various APIs to extend the functionality of your
              website.
            </p>
          </div>
          <div className="serviceCard overflow-hidden z-[1] relative p-4 border-[1px] border-[var(--main-border-color)] rounded-[5px]">
            <p className="alt-bg mb-3 text-white w-[40px] h-[40px] flex justify-center items-center rounded-[5px] font-bold">
              06
            </p>
            <h3 className="text-slate-200 text-2xl uppercase font-semibold mb-2">
              Maintenance and Support
            </h3>
            <p className="text-[16px] text-gray-500">
              I provide ongoing support and updates to ensure your website
              remains secure, functional, and up-to-date with the latest
              technologies.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
