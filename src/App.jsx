/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import CV from "./pages/CV"
import { useEffect, useState } from "react"
import Error from "./pages/Error"
import LoadingPage from "./pages/LoadingPage"

function App() {
  const [showOverlay, setShowOverlay] = useState(false);

  function handleBody() {
    if(document.body.classList.contains("hide")) {
      document.body.classList.remove("hide");
    } else {
      document.body.classList.add("hide");
    }
  }

  const [showAside, setShowAside] = useState(false);
  const [showHeaderAside, setShowHeaderAside] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("hide");
    setIsLoading(true);
    setTimeout(() => {
      document.body.classList.remove("hide");
      setIsLoading(false);
    }, 5000)
  }, [])

  return (
    <>
      { isLoading && <LoadingPage></LoadingPage> }
      <div onClick={() => {
        setShowOverlay(false);
        handleBody();
        setShowAside(false);
        setShowHeaderAside(false);
      }} className={`overlay fixed top-0 left-0 w-full ${showOverlay && "show"} hidden h-screen bg-black opacity-80 z-[2]`}></div>
      <Header handleBody={handleBody} setShowOverlay={setShowOverlay} showHeaderAside={showHeaderAside} setShowHeaderAside={setShowHeaderAside}></Header>
      <Routes>
        <Route path="*" element={<Error></Error>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="projects" element={<Projects setShowOverlay={setShowOverlay} handleBody={handleBody} showAside={showAside} setShowAside={setShowAside}></Projects>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="cv" element={<CV></CV>}></Route>
      </Routes>
    </>
  )
}

export default App
