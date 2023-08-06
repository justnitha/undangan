import React, { useState } from "react";
import { Weding } from "./Galery.js";
import PopImage from "./PopImage";

const Wedding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (itemId) => {
    setSelectedItem(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div className="pt-10">
      <h1 className="text-center font-nama tracking-wider text-5xl py-10 italic wow fadeIn text-coklat-100"   
          data-wow-offset="180"
      >
        Wedding Galery
      </h1>
      <div className="grid grid-cols-2  px-2 lg:w-[60%] md:w-[60%] gap-3  mx-auto cursor-pointer ">
        {Weding.map((item) => (
          <div key={item.id} className="wow slideInLeft" data-wow-offset="185">
            <div
              className={`lg:h-[22rem] h-[13rem] sm:h-[19rem]  blur-none  sm:blur-[1px] md:blur-[1px] lg:blur-[1px] rounded-xl hover:bg-black ${item.bg}`}
              onClick={() => handleOpenModal(item.id)}
            ></div>
          </div>
        ))}
      </div>
      <PopImage
        selectedItem={selectedItem}
        handleCloseModal={handleCloseModal}
        isOpen={isModalOpen}
      />
        <img src={require("../plugin/img/gelombang.png")} alt="gambar" className=" rotate-180 -scale-x-[1] w-full mt-8" />
    </div>
  );
};

export default Wedding;
