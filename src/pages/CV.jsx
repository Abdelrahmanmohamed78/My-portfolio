import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import cvFile from "../assets/Abdelrahman Mohamed CV.pdf";
import cvLanding from "../assets/cv landing.svg"

export default function CV() {
  return (
    <main className='flex justify-center items-center'>
      <div className="parent text-center mt-24">
        <h3 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Download My Resume From Here</h3>
        <a className='py-2 px-5 rounded-full duration-300 mt-6 mx-auto bg-[var(--main-color)] flex gap-2 w-fit items-center' href={cvFile} download={'cvFile'}>
          Download
          <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
        </a>
        <img className='mt-10 w-[400px] max-w-full mx-auto' src={cvLanding} alt="cv landing image" />
      </div>
    </main>
  )
}
