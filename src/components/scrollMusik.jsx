import React, { useState, useEffect, useRef } from "react";
import { FaMusic,FaVolumeMute } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import lagu from "../plugin/mp3/cincin.mp3";

function Musik() {
  const [showMusik, setShowMusik] = useState(false);
  const [mute, setMute] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setMute(!mute);
    audioRef.current.muted = !mute;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0) {
        setShowMusik(true);
      } else {
        setShowMusik(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Autoplay lagu ketika komponen Musik dimount
    if (showMusik && !mute) {
      audioRef.current.play();
    }
  }, [mute]);

  return (
    <div className="fixed top-44 left-7 -z-0 cursor-pointer w-28">
        <div className=" text-[#696767] text-xl md:text-lg spin" onClick={toggleMute}>
            {mute ? (
                <FaVolumeMute className="bg-[#f3dbca] lg:w-[60%] w-[30%] h-[2rem] rounded-full lg:h-[4.2rem] lg:p-4 p-2 md:p-3 md:h-[3.3rem] md:w-[50%]"   />
               
            ) : (
                <>
                <FaMusic className="bg-[#f3dbca] lg:w-[60%] w-[30%] h-[2rem] rounded-full lg:h-[4.1rem] lg:p-4 p-2  md:p-3 md:h-[3.3rem] md:w-[50%] "/>
            </>
            )}
             <audio ref={audioRef} autoPlay loop>
                <source src={lagu} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
  );
}

export default Musik;
