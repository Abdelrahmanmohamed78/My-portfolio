/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import {
  faBars,
  faGlobe,
  faHouse,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import {
  faCircleUser,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons/faFile";

export default function Header({
  handleBody,
  setShowOverlay,
  showHeaderAside,
  setShowHeaderAside,
}) {
  function handleLinkClick() {
    setShowHeaderAside(false);
    handleBody();
    setShowOverlay(false);
  }
  return (
    <header className="mb-5 md:my-5 md:mx-3 p-2 px-7 md:rounded-full border-l-0 border-r-0 md:border-l-[1px] md:border-r-[1px]">
      <nav className="flex items-center justify-between">
        <ul className="links hidden  md:flex items-center gap-1">
          <li>
            <NavLink to={"/"}>
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/cv"}>CV</NavLink>
          </li>
        </ul>
        <Link to={"/"}>
          <img
            loading="lazy"
            className="duration-500 hover:opacity-70 w-[50px]"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="controls hidden md:flex gap-2">
          <Link to={"/contact"}>
            <button className="main-btn rounded-[8px] main-bg py-[6px] px-5 font-semibold text-medium relative overflow-hidden z-[1]">
              Let's Work Together!
            </button>
          </Link>
        </div>
        <div
          onClick={() => {
            setShowHeaderAside(true);
            setShowOverlay(true);
            handleBody();
          }}
          className="aside-icon main-btn overflow-hidden relative md:hidden w-[36px] h-[36px] flex items-center cursor-pointer justify-center rounded-[5px]"
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
        <aside
          className={`fixed w-[90%] max-w-[385px] ${
            showHeaderAside && "show"
          } top-0 right-0 p-5 h-screen bg-[#111] z-10 duration-500 translate-x-full`}
        >
          <button
            onClick={() => {
              setShowHeaderAside(false);
              setShowOverlay(false);
              handleBody();
            }}
            className="absolute top-[10px] right-[10px] text-slate-500 duration-500 hover:text-slate-50"
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
          <Link to={"/"} onClick={() => handleLinkClick()}>
            <img
              loading="lazy"
              className="mx-auto duration-500 hover:opacity-70 w-[50px]"
              src={logo}
              alt="logo"
            />
          </Link>
          <ul className="aside-links my-7 border-b-[2px] border-b-[#222] pb-4">
            <li>
              <NavLink
                onClick={() => handleLinkClick()}
                to={"/"}
                className="flex gap-4 items-center text-white font-semibold text-sm py-1.5 px-4 mb-1 duration-500 rounded-md hover:bg-[#222]"
              >
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleLinkClick()}
                to={"/about"}
                className="flex gap-4 items-center text-white font-semibold text-sm py-1.5 px-4 mb-1 duration-500 rounded-md hover:bg-[#222]"
              >
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleLinkClick()}
                to={"/projects"}
                className="flex gap-4 items-center text-white font-semibold text-sm py-1.5 px-4 mb-1 duration-500 rounded-md hover:bg-[#222]"
              >
                <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleLinkClick()}
                to={"/contact"}
                className="flex gap-4 items-center text-white font-semibold text-sm py-1.5 px-4 mb-1 duration-500 rounded-md hover:bg-[#222]"
              >
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleLinkClick()}
                to={"/cv"}
                download={"../assets/Abdelrahman Mohamed CV.pdf"}
                className="flex gap-4 items-center text-white font-semibold text-sm py-1.5 px-4 duration-500 rounded-md hover:bg-[#222]"
              >
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                CV
              </NavLink>
            </li>
          </ul>
          {/* <ul className="aside-controls py-5 border-y-[2px] border-y-[#222]">
            <li className="flex items-center gap-4 text-white text-sm py-1.5 px-4 mb-1 duration-500 rounded-md hover:bg-[#222] font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
              Switch Language
            </li>
            <li className="flex items-center gap-4 text-white text-sm py-1.5 px-4 duration-500 rounded-md hover:bg-[#222] font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
              Switch Theme
            </li>
          </ul> */}
          <Link onClick={() => handleLinkClick()} to={"/contact"}>
            <button className="main-btn rounded-[5px] main-bg py-[6px] px-5 font-bold w-full text-sm text-medium relative overflow-hidden z-[1]">
              Let's Work Together
            </button>
          </Link>
        </aside>
      </nav>
    </header>
  );
}
