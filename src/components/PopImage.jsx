import React,{useEffect} from "react";
import Slider from "react-slick";
import { FaXmark,FaChevronRight,FaChevronLeft} from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Weding } from "./Galery";

const PopImage = ({ selectedItem, isOpen, handleCloseModal }) => {

  useEffect(()=>{
    if(isOpen == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },[isOpen])
  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[5rem] md:top-[18rem] left-10  cursor-pointer z-10  hidden lg:block  `}
      onClick={props.onClick}
    >
      <i className="text-2xl text-white"><FaChevronLeft/></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-20 top-[5rem] md:top-[18rem] cursor-pointer z-10 hidden lg:block `}
      onClick={props.onClick}
    >
      <i className="text-2xl text-white"><FaChevronRight/></i>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div >
      {isOpen && (
        <div className="bg-black text-white flex justify-end fixed w-full top-0 h-full z-50 opacity-90" onClick={handleCloseModal}>
           <p className="text-2xl me-12 mt-8 cursor-pointer"><FaXmark className="spinn"/></p>
           {/* <p className="bg-red-500">dfadsfasfdsf</p> */}
        </div>
      )}
      {isOpen && (
        <div>
          <div className="z-50 w-[100%] inset-0 mt-20 mx-auto fixed  ">
            {Weding.map((item) => {
              if (item.id === selectedItem) {
                const imageKeys = Object.keys(item).filter((key) =>
                  key.startsWith("image")
                );
                return (
                  <div key={item.id}>
                    <Slider {...settings}>
                      {imageKeys.map((key) => (
                        <img key={key} src={item[key]} alt="" className="h-[80vh] object-contain" loading="lazy" />
                      ))}
                    </Slider>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopImage;
