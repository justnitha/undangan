import { AiFillHeart } from "react-icons/ai";
import { BiCalendar, BiTimeFive, BiSolidMap } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
const Pawiwahan = () => {
    return (
        <div className="bg-white lg:w-[40%] sm:w-[80%] md:w-[50%] w-[90%]  mt-16 px-10 rounded-3xl py-10 mx-auto overflow-y-hidden shadoww wow fadeIn"
            data-wow-duration="3s" 
            data-wow-offset="210"   
        >
            <p className="font-nama text-center text-6xl italic">Pawiwahan</p>
            <div className="flex items-center justify-center gap-5 py-3">
                <div className="w-[40%] h-[1px] bg-black"></div>
                <div className="text-3xl text-[#55595e]"><AiFillHeart/></div>
                <div className="w-[40%] h-[1px] bg-black"></div>
            </div>
            <div className="flex items-center gap-2 italic leading-7 text-base lg:text-lg mt-3 sm:mt-0">
                <i><BiCalendar/></i>
                <p>Rabu, 32 Februari 2023</p>
            </div>
            <div className="flex items-center gap-2 italic leading-7 text-base lg:text-lg mt-3">
                <i><BiTimeFive/></i>
                <p>Pukul 11.00 Wita s/d Selesai</p>
            </div>
            <div className="flex items-center gap-2 italic leading-7 text-base lg:text-lg mt-3">
                <i><BiSolidMap/></i>
                <p>Warung Mek Edo  Abiansemal Badung</p>
            </div>
            <div className="bg-coklat text-center mx-auto w-[50%] sm:w-[36%] lg:w-[35%] py-2 mt-7 rounded-xl text-white">
                <button className="flex items-center justify-center w-full gap-2">
                    <i><FaMapMarkedAlt/></i>
                    <p>Buka Map</p>
                </button>
            </div>
        </div>
    )
}
export default Pawiwahan