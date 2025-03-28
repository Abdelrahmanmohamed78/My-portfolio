/* eslint-disable no-unused-vars */
import PageTitle from "../components/PageTitle";
import personalImg from "../assets/personal.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <main className="py-10 grid gap-5 xl:gap-1 grid-cols-6 items-center">
      <div className="details-content col-span-6 xl:col-span-3">
        <div className="image">
          <img
            className="w-[200px] h-[200px] rounded-[50%] object-cover"
            loading="lazy"
            src={personalImg}
          ></img>
        </div>
        <PageTitle center={false}>
          Let's chat. <br /> Tell me about your <br /> project.
        </PageTitle>
        <ul className="contact-info grid grid-cols-1 md:grid-cols-2 gap-3 justify-center mt-10">
          <li>
            <Link to={'mailto:abdomohamed782002@gmail.com'} target="_blank" className="flex gap-2 items-center font-semibold text-gray-300 text-[15px] group">
              <div className="icon w-[40px] h-[40px] rounded-[5px] bg-[#222] text-white flex justify-center items-center text-sm duration-300 group-hover:bg-[var(--alt-color)]">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              abdomohamed782002@gmail.com
            </Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center font-semibold text-gray-300 text-[15px] group">
              <div className="icon w-[40px] h-[40px] rounded-[5px] bg-[#222] text-white flex justify-center items-center text-sm duration-300 group-hover:bg-[var(--alt-color)]">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              +20 1001520321
            </Link>
          </li>
          <li>
            <Link to={'https://wa.me/+201001520321'} target="_blank" className="flex gap-2 items-center font-semibold text-gray-300 text-[15px] group">
              <div className="icon w-[40px] h-[40px] rounded-[5px] bg-[#222] text-white flex justify-center items-center text-sm duration-300 group-hover:bg-[var(--alt-color)]">
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
              </div>
              WhatsApp
            </Link>
          </li>
          <li>
            <Link to={'https://t.me/abdelrahmanmohamed78'} target="_blank" className="flex gap-2 items-center font-semibold text-gray-300 text-[15px] group">
              <div className="icon w-[40px] h-[40px] rounded-[5px] bg-[#222] text-white flex justify-center items-center text-sm duration-300 group-hover:bg-[var(--alt-color)]">
                <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
              </div>
              Telegram
            </Link>
          </li>
        </ul>
      </div>
      <div className="form-holder relative p-[1px] rounded-[8px] col-span-6 xl:col-span-3 z-[1] overflow-hidden">
        <form onSubmit={(e) => e.preventDefault()} className="form p-5 lg:pt-11 lg:px-10 pb-6 bg-[#101010] rounded-[8px]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 first-letter:text-[var(--alt-color)]">
            I'll get back to you soon.
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Would you like me to respond immediately, Send me{" "}
            <Link to={'https://wa.me/+201001520321'} className="font-semibold underline">WhatsApp</Link> Message
          </p>
          <div className="inputs mt-5">
            <div className="input flex flex-col gap-3 mb-7">
              <label
                htmlFor="name"
                className="text-sm text-slate-50 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="username"
                className="bg-transparent border-[#333] border-[1px] text-sm p-2 rounded-[5px] ring-0 ring-[var(--alt-color)] outline-none focus-visible:ring-[3px]"
              />
            </div>
            <div className="input flex flex-col gap-3 mb-7">
              <label
                htmlFor="subject"
                className="text-sm text-slate-50 font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="bg-transparent border-[#333] border-[1px] text-sm p-2 rounded-[5px] ring-0 ring-[var(--alt-color)] outline-none focus-visible:ring-[3px]"
              />
            </div>
            <div className="input flex flex-col gap-3 mb-7">
              <label
                htmlFor="email"
                className="text-sm text-slate-50 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent border-[#333] border-[1px] text-sm p-2 rounded-[5px] ring-0 ring-[var(--alt-color)] outline-none focus-visible:ring-[3px]"
              />
            </div>
            <div className="input flex flex-col gap-3 mb-7">
              <label
                htmlFor="message"
                className="text-sm text-slate-50 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-transparent border-[#333] border-[1px] text-sm p-2 rounded-[5px] h-[150px] resize-none ring-0 ring-[var(--alt-color)] outline-none focus-visible:ring-[3px]"
              />
            </div>
            <button
              className="text-sm font-semibold bg-[var(--main-color)] w-full py-2 px-4 rounded-[5px] duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
