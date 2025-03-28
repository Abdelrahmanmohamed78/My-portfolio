import logoImg from "../assets/logo.svg"
export default function LoadingPage() {
  return (
    <div className="loading-page flex text-[100px] justify-center items-center h-screen fixed top-0 left-0 w-full bg-[var(--bg-color)] select-none z-[4]">
      <div className="holder">
        <img src={logoImg} alt="loading image" />
      </div>
    </div>
  )
}
