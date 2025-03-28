/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import project1Img from "../assets/project-1.png";
import project2Img from "../assets/project-2.png";
import project3Img from "../assets/project-3.png";
import project4Img from "../assets/project-4.png";
import project5Img from "../assets/project-5.png";
import project6Img from "../assets/project-6.png";
import project7Img from "../assets/project-7.png";
import project8Img from "../assets/project-8.png";
import project9Img from "../assets/project-9.png";
import project10Img from "../assets/project-10.png";
import project11Img from "../assets/project-11.png";
import project12Img from "../assets/project-12.png";
import project13Img from "../assets/project-13.png";
import project14Img from "../assets/project-14.png";
import project15Img from "../assets/project-15.png";
import project16Img from "../assets/project-16.png";

export default function Projects({ setShowOverlay, handleBody, showAside, setShowAside }) {
  const allProjects = [
    {
      id: 1,
      img: project1Img,
      title: "Meditro",
      category: "3",
      description: "This application is for doctor appointmenting ",
      tools: ["React.Js", "Bootstrap", "CSS"],
      gitHub: "",
      preview: "https://meditro-react-site.netlify.app",
    },
    {
      id: 2,
      img: project2Img,
      title: "Carrot",
      category: "3",
      description:
        "This application is a simple e-commerce for buying vegetables, fruits and bakeries with a features such as dark theme, add / remove cart and whishlist page.",
      tools: ["Html", "Css", "Js", "Bootstrap"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/carrot",
      preview: "https://abdelrahmanmohamed78.github.io/carrot/",
    },
    {
      id: 3,
      img: project3Img,
      title: "Gotto",
      category: "2",
      description:
        "This application is for search about specific job, you can start your career from here.",
      tools: ["Html", "css", "Js", "Bootstrap"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Gotto-Job",
      preview: "",
    },
    {
      id: 4,
      img: project4Img,
      title: "Special Design App",
      category: "3",
      description:
        "This application is an official website for an agency that creating websites, improve youtube channel statistics, etc...",
      tools: ["Html", "Css", "Js"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Special-Design",
      preview: "",
    },
    {
      id: 5,
      img: project5Img,
      title: "Ninestars",
      category: "1",
      description: "This application is for Building websites using Bootstrap",
      tools: ["Html", "Css", "Js"],
      gitHub: "",
      preview: "",
    },
    {
      id: 6,
      img: project6Img,
      title: "Car Rentals",
      category: "1",
      description:
        "This application is for Follow and buying special cars and what is now the actual prices in market",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Axure",
      preview: "",
    },
    {
      id: 7,
      img: project7Img,
      title: "Portfolio App",
      category: "2",
      description:
        "This application is for showcasing skills, projects, and my experience with building different and special web pages with a high quality, efficient and clean code.",
      tools: ["Html", "Css", "Js"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Portfolio",
      preview: "",
    },
    {
      id: 8,
      img: project8Img,
      title: "Bondi App",
      category: "1",
      description:
        "This application is company that introduce special offers in creating creative designs, wesites, logos, you can start your own project by create your creative logo and design here.",
      tools: ["Html", "Css", "Bootstrap"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Bondi",
      preview: "https://abdelrahmanmohamed78.github.io/Bondi/",
    },
    {
      id: 9,
      img: project9Img,
      title: "DashBoard App",
      category: "1",
      description:
        "This application is a simple dashboard that show your Profile, Freinds, courses, projects and statistics.",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Dashboard",
      preview: "https://abdelrahmanmohamed78.github.io/Dashboard/",
    },
    {
      id: 10,
      img: project10Img,
      title: "Abdo App",
      category: "1",
      description:
        "This application is a simple website for wite everything that i love to share it like my books that iam reading and my films that i love to watch it and etc...",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Abdo",
      preview: "https://abdelrahmanmohamed78.github.io/Abdo/",
    },
    {
      id: 11,
      img: project11Img,
      title: "Kaspar",
      category: "1",
      description:
        "This application is an official website for company that buils user friendly websites, creative designs and logos.",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/kaspar",
      preview: "https://abdelrahmanmohamed78.github.io/kaspar/",
    },
    {
      id: 12,
      img: project12Img,
      title: "Countries App",
      category: "3",
      description:
        "This application is a website that represent a fully details about more that 240 country. you can know any information about specific country in the world with an efficient filter and with dark theme",
      tools: ["Html", "Css", "Js"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Countries",
      preview: "https://abdelrahmanmohamed78.github.io/Countries/",
    },
    {
      id: 13,
      img: project13Img,
      title: "FOODKA Restaurant",
      category: "2",
      description:
        "This application is a website for buying children meels, burgers and pizzas.",
      tools: ["Html", "Css", "Js"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Restaurant",
      preview: "https://abdelrahmanmohamed78.github.io/Restaurant/",
    },
    {
      id: 14,
      img: project16Img,
      title: "Leon App",
      category: "1",
      description:
        "This application is an official website for company that buils user friendly websites, creative designs and logos.",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/leon",
      preview: "https://abdelrahmanmohamed78.github.io/leon/",
    },
    {
      id: 15,
      img: project15Img,
      title: "Test App",
      category: "1",
      description:
        "This application is web app that represent yuor statictics in different aspects.",
      tools: ["Html", "Css"],
      gitHub: "https://github.com/Abdelrahmanmohamed78/Result-Summary-Card",
      preview: "https://abdelrahmanmohamed78.github.io/Result-Summary-Card/",
    },
  ]
  const [projects, setProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState("all");
  const [asideData, setAsideData] = useState({});
  return (
    <main>
      <PageTitle center={true}>Projects</PageTitle>
      <aside
        className={`projects-aside ${
          showAside ? "show" : ""
        } fixed top-0 right-0 duration-500 h-screen w-[450px] max-w-[90%] z-[2] bg-[#111] p-6 translate-x-[100%]`}
      >
        <FontAwesomeIcon
          onClick={() => {
            setShowAside(false);
            setShowOverlay(false);
            handleBody();
          }}
          className="absolute top-[10px] right-[10px] text-sm duration-500 text-gray-500 hover:text-gray-50 cursor-pointer"
          icon={faXmark}
        ></FontAwesomeIcon>
        <h3 className="mb-3 font-semibold text-lg">{asideData.title}</h3>
        <img
          className="w-full rounded-[5px] mb-6"
          loading="lazy"
          src={asideData.img}
          alt={`${asideData.title}`}
        ></img>
        <h3 className="mb-1 font-semibold text-lg">Project Name</h3>
        <p className="text-gray-500 text-sm">{asideData.title}</p>
        <h3 className="mt-6 mb-1 font-semibold text-lg">Project Description</h3>
        <p className="text-gray-500 text-sm">{asideData.description}</p>
        <h3 className="mt-6 mb-1 font-semibold text-lg">Tools</h3>
        <ul className="flex flex-wrap gap-1">
          {asideData.tools?.map((tool, i) => {
            return (
              <li
                className="bg-[#222] text-gray-300 py-1 px-4 rounded-md text-[13px] font-semibold"
                key={i}
              >
                {tool}
              </li>
            );
          })}
        </ul>
        <h3 className="mt-6 mb-1 font-semibold text-lg">Links</h3>
        <div className="links flex items-center gap-5">
          {
            asideData.gitHub !== "" && (
              <Link to={asideData.gitHub} className="flex gap-2 items-center text-sm text-blue-500">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                GitHub
              </Link>
            )
          }
          {asideData.preview !== "" && (
            <Link to={asideData.preview} className="flex gap-2 items-center text-sm text-blue-500">
              <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
              Preview
            </Link>
          )}
        </div>
      </aside>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 my-7">
        <p className="text-lg"><span className="font-bold text-[var(--main-color)]">{projects.length}</span> Proejcts Found</p>
        <ul className="filter-links flex justify-center flex-wrap gap-3">
          <li onClick={() => {
            setActiveFilter("all");
            setProjects(allProjects);
          }} className={`${activeFilter === "all" && "active"} text-white text-xs py-2 px-4 rounded-[3px] bg-[var(--main-border-color)] cursor-pointer duration-300 flex items-center gap-2`}>
            {
              activeFilter === "all" && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            }
            All
          </li>
          <li onClick={() => {
            setActiveFilter("cat-1");
            let newArr = allProjects.filter(project => {
              return project.category === "1";
            });
            setProjects(newArr);
          }} className={`${activeFilter === "cat-1" && "active"} text-white text-xs py-2 px-4 rounded-[3px] bg-[var(--main-border-color)] cursor-pointer duration-300 flex items-center gap-2`}>
            {
              activeFilter === "cat-1" && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            }
            Cat 1
          </li>
          <li onClick={() => {
            setActiveFilter("cat-2");
            let newArr = allProjects.filter(project => {
              return project.category === "2";
            });
            setProjects(newArr);
          }} className={`${activeFilter === "cat-2" && "active"} text-white text-xs py-2 px-4 rounded-[3px] bg-[var(--main-border-color)] cursor-pointer duration-300 flex items-center gap-2`}>
            {
              activeFilter === "cat-2" && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            }
            Cat 2
          </li>
          <li onClick={() => {
            setActiveFilter("cat-3");
            let newArr = allProjects.filter(project => {
              return project.category === "3";
            });
            setProjects(newArr);
          }} className={`${activeFilter === "cat-3" && "active"} text-white text-xs py-2 px-4 rounded-[3px] bg-[var(--main-border-color)] cursor-pointer duration-300 flex items-center gap-2`}>
            {
              activeFilter === "cat-3" && <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            }
            Cat 3
          </li>
        </ul>
      </div>
      <div className="holder grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((box, i) => {
          return (
            <div
              onClick={(e) => {
                setShowAside(true);
                setShowOverlay(true);
                handleBody();
                projects.map((item) => {
                  if (item.id === +e.currentTarget.id) {
                    setAsideData(item);
                  }
                });
              }}
              className="box p-2 border-[1px] border-[var(--main-border-color)] rounded-[5px]"
              key={box.id}
              id={box.id}
            >
              <div className="image rounded-t-[5px] overflow-hidden duration-300 hover:opacity-90">
                <img
                  className="object-cover"
                  loading="lazy"
                  src={box.img}
                  alt={box.title}
                ></img>
              </div>
              <div className="text my-5 px-2">
                <h3 className="text-lg font-semibold mb-1">{box.title}</h3>
                <p className="text-xs font-normal text-gray-400">
                  {box.description.length >= 85
                    ? `${box.description.slice(0, 86)}...`
                    : box.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-1 mb-3">
                {box.tools.map((tool, i) => {
                  return (
                    <li
                      className="rounded-[3px] text-white py-1 px-2 text-[12px] bg-[#222]"
                      key={i}
                    >
                      {tool}
                    </li>
                  );
                })}
              </ul>
              <div className="links flex gap-1 justify-end">
                {box.gitHub !== "" && (
                  <Link to={box.gitHub} className="text-sm w-[30px] h-[30px] border-[1px] border-[var(--main-border-color)] rounded-[3px] flex justify-center items-center duration-300 hover:bg-[var(--alt-color)]">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </Link>
                )}
                {box.preview !== "" && (
                  <Link to={box.preview} className="text-sm w-[30px] h-[30px] border-[1px] border-[var(--main-border-color)] rounded-[3px] flex justify-center items-center duration-300 hover:bg-[var(--alt-color)]">
                    <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
