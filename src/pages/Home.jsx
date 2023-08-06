import React, { useState,useEffect,useRef } from "react";
import { GrMail } from "react-icons/gr";
import { MdWhatsapp } from "react-icons/md";
import Musik from "../components/scrollMusik";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timer from "../components/Timer";
import Pawiwahan from "../components/Pawiwhan";
import Wedding from "../components/Wedding";
import Form from "../components/Form";
import "../plugin/css/Complit.css";
import WOW from "wowjs";
import "../../node_modules/wowjs/css/libs/animate.css"


function Home () {
  const [opened, setOpened] = useState(false);
  const [showUndangan,SetShowUndangan] =useState(true);
  const refBawah = useRef(null);

  const handleClick = () => {
    setOpened(!opened);
    SetShowUndangan(false)
  };

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  useEffect(() => {
    document.body.style.overflow = opened ? 'auto' : 'hidden';    
    if (opened && refBawah.current) {
      // Start Wow.js animations for the newly visible elements
      const wow = new WOW.WOW();
      wow.init({ live: true });
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  useEffect(() => {
    if (opened && refBawah.current) {
      // Scroll ke elemen refBawah dengan animasi smooth
      refBawah.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [opened]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  const settings = {
    dots: false,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="bg-coklat overflow-x-hidden scroll-smooth">
      <div className="h-screen">
        {/* Komponen untuk undangan yang belum di klik */}
        <Slider {...settings} className="z-10">
          <div className="bg-1 h-screen bg-cover bg-center"></div>
          <div className="bg-2 h-screen bg-cover bg-center"></div>
          <div className="bg-3 h-screen bg-cover bg-center"></div>
          <div className="bg-4 h-screen bg-cover bg-center"></div>
        </Slider>
        <div className="absolute z-20 bg-black opacity-50 text-white h-screen  top-0 w-full text-center "></div>
        <div className="absolute z-30 bottom-[7rem] sm:bottom-[10rem] lg:bottom-[12rem] text-white w-full text-center">
          <div className="w-full mx-auto">
            <p className="italic ">The Weeding Of</p>
            <h2 className="font-sambung font-bold text-5xl mt-2">Romeo & Julied </h2>
            <div className="text-[13px] italic">
              <p className="mt-7">Kepada Yth.</p>
              <p>Bapak/ ibu/ Saudara/ i</p>
            </div>
            <h2 className="text-3xl font-bold font-sambung italic">Nama Tamu</h2>
            {showUndangan && (
              <div  className="mt-5 gap-2 w-[40%] sm:w-[30%] md:w-[20%] lg:w-[12%] py-1 rounded-xl mx-auto bg-white text-black flex justify-center items-center"
                    onClick={handleClick}>
                <GrMail/>
                <button className="text-center scroll-smooth">
                  Buka Undangan
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20">
      <img src={require ("../plugin/img/gelombang.png")} 
               alt="" 
               className=" rotate-180 -scale-x-[1] w-full absolute -bottom-2 z-40"
          />
        {/* Komponen untuk undangan yang sudah di klik */}
        {opened &&  (
          <div 
          ref={refBawah}
          >
            <div className="text-center overflow-hidden text-white lg:w-[45%] md:w-[70%] sm:px-3 px-5 lg:px-0 mx-auto pb-4 wow slideInLeft">
              <h2 className="font-sambung capitalize text-4xl sm:text-5xl lg:text-6xl md:text-6xl font-bold py-2">
                om swastiastu
              </h2>
              <p className=" lg:leading-7 text-xs sm:text-[13px] lg:text-base md:text-xl ">Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang  Maha Esa, kami bermaksud mengundang Bapak/Ibu/Saudara/i, pada Acara  Pawiwahan (Pernikahan) kami</p>
              <div className="grid lg:grid-cols-2 md:grid-cols-2  lg:py-10 gap-10 lg:gap-32 scroll-smooth mt-8 lg:mt-10">
                <div className="wow slideInLeft">
                  <img src={require("../plugin/img/pengantin-laki.jpg")}
                       alt="gojo-1"
                       className="h-[17rem] sm:h-[23rem] md:h-[15rem] lg:w-full md:w-[80%] sm:w-[60%] rounded-xl mx-auto" />
                  <h4 className=" leading-9 capitalize text-4xl font-nama mt-5 tracking-wider">Putra Romeo </h4>
                  <p className="italic text-sm">
                    Anak Pertama Dari Pasangan <br />
                    Bapak Romeo & Ibu Romeo 
                  </p>
                </div>
                <div className="lg:hidden font-sambung text-7xl md:hidden">
                  &
                </div>
                <div className="wow slideInLeft">
                  <img src={require("../plugin/img/pengantin-perempuan.jpg")} 
                       alt="makima"
                       className="h-[17rem] md:h-[15rem] sm:h-[23rem] sm:w-[60%] md:w-[80%] lg:w-full rounded-xl mx-auto" />
                  <h4 className=" leading-9 capitalize text-4xl font-nama mt-5 tracking-wider">Putri Julied </h4>
                  <p className="italic text-sm">
                    Anak Pertama Dari Pasangan <br />
                    Bapak Julied & Ibu Julied 
                  </p>
                </div>
              </div>
            </div>
            <Timer/>
            
            <div className="bg-[#f0e4d3]">
              <img src={require ("../plugin/img/gelombang.png")} alt="image" className="w-full left-0 z-40 bottom-0" />
              <Pawiwahan/>
              <div className="wow fadeIn"
                  data-wow-duration="3s" 
                  data-wow-offset="210"  
              >
                <p className="lg:w-[73%] md:w-[88%] mx-auto text-center mt-20 px-10 text-[11px] sm:text-sm md:text-lg">
                  Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do'a restu kepada putra-putri kami.
                  Atas kehadiran dan do'a restu Bapak/Ibu/Saudara/i kami ucapkan terima kasih.
                </p>
                <p className=" capitalize text-center text-2xl md:text-4xl lg:text-4xl font-bold mt-7 overflow-y-hidden font-sambung italic">om, shanti, shanti, shanti,om</p>
              </div>
              {/* reg weda */}
              <div className="bg-5 relative bg-cover bg-center bg-no-repeat h-[48vh] sm:h-[44vh] md:h-[50vh] lg:h-[70vh] mt-20">
                <div className="absolute lg:h-[70vh] sm:h-[44vh] md:h-[50vh] h-[48vh] bg-black w-full opacity-50"></div>
                <div className=" bg-[#f0e4d3] absolute opacity-80 top-[3rem] md:top-[4rem] lg:top-[9rem] sm:top-[5rem] md:left-[6rem] left-[3rem] lg:left-[22rem]  w-[80%]  lg:w-[50%] text-center  p-7 rounded-3xl  wow slideInLeft md:py-20"
                  data-wow-offset="250"
                >
                  <p className="italic text-xs lg:text-base leading-5">
                    Ya Tuhanku Yang Maha Pengasih, anugrahkanlah kepada pasangan ini senantiasa kebahagiaan, kesehatan, tetap bersatu, dan tidak pernah terpisahkan. Panjang umur dan tinggal dirumah yang penuh dengan kegembiraan bersama seluruh keturunannya.
                  </p>
                  <p className="font-bold md:mt-5 ">RgVeda : X.85.42</p>
                </div>
              </div>
              {/* wedding galeery */}
              <Wedding/>
            </div>
            <Form/>
            <footer className="bg-[#2e2f39] text-center  capitalize text-white py-5">
              <a href="https://mengundangmu.my.id/">my photograph bali</a>
              <a href="https://api.whatsapp.com/send?phone=628123953644&text=Hai+Admin+Boleh+Minta+Info+price+list+Undangan+Onlinenya">
                <MdWhatsapp className="mx-auto text-6xl my-5"/>
                <p>Whatsapp us</p>
              </a>
            </footer>
            <Musik/>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home