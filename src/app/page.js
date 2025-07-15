"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "@/styles/Hero.css";
import Navbar from "@/components/Navbar";
import services from "@/utils/services";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoLogoSnapchat,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";
import Marquee from "@/components/Marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MyScene() {
  const [activeServ, setActiveServ] = useState(0);
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <main id="Hero" className="">
        <div className="slab scrollable trans">
          <Navbar />
          <div className="hero">
            <img className="" src={"/img/medium.jpg"} alt="" />
            <div className="text">
              <h1 className="title">
                Seye's <br /> <span>designs</span>
              </h1>

              <ul>
                {services?.map((serv, index) => (
                  <ServCom
                    key={index}
                    serv={serv}
                    index={index}
                    activeServ={activeServ}
                    setActiveServ={setActiveServ}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="about">
            <div className="text">
              <p>Let our fabrics tell your story</p>
              <h1>
                look <span>good</span>. feel <br /> <span>great</span>. every{" "}
                <span>time</span>
              </h1>
            </div>
            <ul>
              <li>
                <img src="/img/medium.jpg" alt="" />
              </li>
              <li>
                <img src="/img/medium.jpg" alt="" />
              </li>
              <li>
                <img src="/img/medium.jpg" alt="" />
              </li>
              <li>
                <img src="/img/medium.jpg" alt="" />
              </li>
            </ul>
          </div>
          <div className="caro">
            <div className="left">
              <div className="cover">
                <div className="top">
                  <h1>Endless Catalogue of excellently designed two-pieces</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae temporibus dignissimos.
                  </p>
                </div>
                <div className="bottom">
                  <motion.button whileTap={{scale: 0.95}} className="prev">P</motion.button>
                  <motion.button whileTap={{scale: 0.95}} className="next">N</motion.button>
                </div>
              </div>
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={100}
                loop={true}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                  clickable: true,
                }}
                autoplay={false}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 2,
                  depth: 125,
                  modifier: 2,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
                className="swiper-container"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SwiperSlide key={num} className="swiper-slide">
                    <img src={`/img/pic4.png`} alt={`Model ${num}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="right">
              <Swiper
                direction="vertical"
                slidesPerView={1}
                effect="slide"
                grabCursor={true}
                spaceBetween={0}
                loop={true}
                autoplay={true}
                className="swiper-container"
                modules={[Autoplay, Navigation, Pagination]}
              >
                {[{}, {}, {}, {}, {}].map((_, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="top">
                      <img src="/img/dress1.png" alt="" />
                    </div>
                    <div className="bot">
                      <img src="/img/dress2.png" alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="abVideo">
            <div className="img">
              <img src="/img/medium.jpg" alt="" />
            </div>
            <div className="top">
              <h1>
                Seye <sup>©</sup>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nostrum nam ad recusandae. Nostrum odio maxime necessitatibus
                vel, aliquid tenetur?
              </p>
            </div>
            <div className="bottom">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nostrum nam ad recusandae. Nostrum odio maxime necessitatibus
                vel, aliquid tenetur?
              </p>
              <div>
                <div className="img">
                  <img src="/img/medium.jpg" alt="" />
                </div>
                <div className="info">
                  <p>
                    Team Lead <span>@ Seye's</span>
                  </p>
                  <h4>Seye Full Name</h4>
                  <div className="buttons">
                    <button>O</button>
                    <button>O</button>
                    <button>O</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Marquee /> */}
          <div className="serve">
            <div className="top">
              <div className="left-1">
                <p>Seye's</p>
              </div>
              <div className="left-2">
                <p>Where Form and Fabric Unite!</p>
              </div>
              <div className="right">
                <h1>elevating comfort with every curve</h1>
                <button>Contact Us</button>
              </div>
            </div>
            <ul className={activeService !== null ? "clicked" : ""}>
              <AnimatePresence>
                {[{}, {}, {}, {}]?.map((tab, index) => (
                  <motion.li
                    key={index}
                    className={activeService === index ? "" : "unset"}
                    onClick={() => {
                      activeService === index
                        ? setActiveService(null)
                        : setActiveService(index);
                    }}
                  >
                    <Slab
                      activeService={activeService}
                      index={index}
                      key={index}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
          <footer>
            <h1>Seye's</h1>
            <div className="slab">
              <div className="text">
                <h3>Seye Full Name </h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  debitis eaque a quasi commodi itaque!
                </p>
              </div>
              <div className="h4">
                <h4>S</h4>
                <h4>E</h4>
                <h4>Y</h4>
                <h4>E</h4>
              </div>
              <div className="img">
                <img src="/img/medium.jpg" alt="" />
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

const ServCom = ({ serv, index, activeServ, setActiveServ }) => {
  return (
    <li
      key={index}
      onClick={() => {
        activeServ === index ? setActiveServ(null) : setActiveServ(index);
      }}
      style={{
        background:
          activeServ === index ? `white` : `var(--text-color-secondary)`,
      }}
    >
      <div className="top">
        <h1
          style={{
            color: activeServ === index ? `var(--text-color)` : `white`,
          }}
        >
          <span>0{index + 1}</span> Title of bar
        </h1>
        <button>{activeServ === index ? "-" : "+"}</button>
      </div>
      <AnimatePresence>
        {activeServ === index && (
          <motion.div
            className="bottom"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati molestiae corrupti unde iusto, est quasi facilis totam
              dolor saepe dolore?
            </p>
            <ul>
              <li>Brand Strategy</li>
              <li>Visual Identity Design</li>
              <li>Brand Guidelines</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Slab = ({ activeService, index }) => {
  return (
    <div className="slab">
      <h1>
        Our <br /> Service
      </h1>
      <div className="img">
        <img src="/img/medium.jpg" alt="" />
        {activeService !== index && <div className="cover"></div>}
      </div>
    </div>
  );
};
