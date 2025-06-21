import { Athiti } from "next/font/google";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useState, useEffect } from "react";

const athiti = Athiti({
  subsets: ['latin'],
  weight: '400'
})

// Colors

let bg = '#d5def7ff'
let menu = '#6478b4ff'
let menubg = '#495d99ff'
let footer = '#293455ff'


export default function Home() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [mouseColor, setMouseColor] = useState(menubg)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const getMouse = (e) => {
      const cursorDiv = document.getElementById('mouse-circle')
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      cursorDiv.style.left = `${e.clientX + scrollX}px`
      cursorDiv.style.top = `${e.clientY + scrollY}px`
      setX(e.clientX)
      setY(e.clientY)
    }

    window.addEventListener('mousemove', getMouse)
    return () => window.removeEventListener('mousemove', getMouse)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const cursorDiv = document.getElementById('mouse-circle')
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      cursorDiv.style.left = `${x + scrollX}px`
      cursorDiv.style.top = `${y + scrollY}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [x, y])

  const play_with_me = () => {
    const meDiv = document.getElementById('me')

    if (x < 1600) {
      meDiv.style.rotate = '22.5deg'
    } else {
      meDiv.style.rotate = '-22.5deg'
    }
  }

  console.log(x, y)

  return (
    <div
      className={`${athiti.className} transition-opacity page-transition duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="fixed p-10 w-30 left-10 h-70 rounded-full z-20 flex-wrap items-center" style={{ backgroundColor: menu }} onMouseOver={() => setMouseColor(bg)} onMouseLeave={() => setMouseColor(menubg)}>
        <a href="#">
          <Image
            src={require('../public/Intro.png')}
            width={50}
            height={50}
            alt='Intro'
            className="py-3 cursor-none"
          ></Image>
        </a>
        <a href="#activities">
          <Image
            src={require('../public/Certificate.png')}
            width={50}
            height={50}
            alt='Certificate'
            className="py-3 cursor-none"
          ></Image>
        </a>
        <a href="#footer">
          <Image
            src={require('../public/Footer.png')}
            width={50}
            height={50}
            alt='Footer'
            className="py-3 cursor-none"
          ></Image>
        </a>
      </div>
      <div className="fixed p-10 w-30 left-11 top-31 h-70 z-10 rounded-full" style={{ backgroundColor: menubg }}></div>

      <div className="h-12 rounded-full absolute w-12 items-center justify-center text-bold flex z-50 transition text-xl"
        style={{
          backgroundColor: mouseColor,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
        id="mouse-circle">
      </div>
      <p className={`p-5 m-30 ml-80 w-100 text-white text-6xl font-bold mb-2`} style={{ backgroundColor: menu }}>CHAOWAKON</p>
      <p className={`p-5 m-30 ml-80 w-100 text-white text-6xl font-bold my-5`} style={{ backgroundColor: menu }}>GUNPAI</p>
      <p className={`p-5 ml-80 text-3xl`} style={{ color: menu }}>Hello, I'm a junior developer.<br /> I am always open to learning <br /> new knowledge and techniques!</p>
      <Image onMouseOver={play_with_me} onMouseLeave={() => {
        const meDiv = document.getElementById('me')

        meDiv.style.rotate = '0deg'
      }} src={require('../public/me.png')} width={300} height={300} className='absolute right-50 top-29 transition' id='me' />
      <div className={`p-51 h-[80vw] rounded-t-[10%] mt-50`} style={{ backgroundImage: `linear-gradient(to top left, ${menubg}, #a6b3d3ff)` }} id='activities' onMouseEnter={() => setMouseColor(bg)} onMouseLeave={() => setMouseColor(menubg)}>
        <p className={`text-7xl p-5 text-center`} style={{ color: menubg, backgroundColor: bg }} onMouseEnter={() => setMouseColor(menubg)} onMouseLeave={() => setMouseColor(bg)}>CERTIFICATE</p>
        <Marquee className="my-20">
          <Image
            src={require('../public/Certificate_silapa.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_A.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_B.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_1.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_2.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_3.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_4.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Certificate_5.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
        </Marquee>
        <p className={`text-7xl p-5 text-center`} style={{ color: menubg, backgroundColor: bg }} onMouseOver={() => setMouseColor(menubg)} onMouseLeave={() => setMouseColor(bg)}>ACTIVITY</p>
        <Marquee className="my-20">
          <Image
            src={require('../public/Activity_1.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Activity_2.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Activity_3.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Activity_4.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
          <Image
            src={require('../public/Activity_5.png')}
            width={500}
            height={500}
            alt="Certificate image"
            className="px-10"
            loading='lazy'
          />
        </Marquee>
      </div>
      <footer className="w-full py-8 cursor-none" style={{ backgroundColor: footer }} onMouseOver={() => setMouseColor(menubg)} onMouseLeave={() => setMouseColor(bg)} id="footer">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com/pxiaccount" target="_blank" rel="noopener noreferrer" className="cursor-none text-white hover:text-gray-300">
                GitHub
              </a>
              <a href="https://medium.com/@kengunpai8855" target="_blank" rel="noopener noreferrer" className="cursor-none text-white hover:text-gray-300">
                Medium
              </a>
            </div>
            <div className="text-white text-center">
              <div>Website created by Chaowakon Gunpai</div>
              <div><a href="https://fonts.google.com/specimen/Athiti" className="cursor-none hover:text-gray-300">Athiti</a> is a font used on this website</div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}