import './App.css';
import Header from './component/header/Header';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Service from './component/service/Service';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import NavBar from './component/NavBar/NavBar';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
gsap.registerPlugin(useGSAP,ScrollTrigger);


function App() {

  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);

      boxes.forEach(
        box => {
          gsap.fromTo(
            box,
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              delay: 1,
              duration: 2,
              y: 0,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: box,
                start: 'top bottom'
              }
            }
          )
        }
      )
    }
  )

  return (
    <div ref={scrollRef}>
      <Header/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <NavBar/>
    </div>
  )
}

export default App
