import React from "react";
import food1 from "../../assets/img/food-1.png";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
import poster1 from "../../assets/img/Food Sale Poster.svg";
import poster2 from "../../assets/img/Food  (Poster).svg";
function LIveChat() {
  const dataArtikel = [
    {
      id: 1,
      nama: "Kesehatan jantung",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      nama: "Kesehatan Paru-paru",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et m",
    },
    {
      id: 3,
      nama: "Kesehatan Hidung",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    },
    {
      id: 4,
      nama: "Kesehatan Tenggorokan",
      deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscin",
    },
  ];
  return (
    <>
      <div className="py-7">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Live Chat
        </h1>
      </div>
      <div className="py-7">
        <h1 className="font-semibold text-lg text-green-20 ml-8 text-left mb-2">
          Customer service
        </h1>
        <div className="flex">
          <div className="w-32 h-32 bg-green-20 rounded ml-8"></div>
          <div className="block">
            {" "}
            <h1 className="font-semibold text-lg text-green-20 ml-8 text-left mb-2">
              Anjas mara dita
            </h1>
            <h1 className="font-semibold text-lg text-green-20 ml-8 text-left mb-2">
              PIC: Joko
            </h1>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-50 w-1/2 ml-8 mb-10">
        <h5 className="text-right font-semibold cursor-pointer mr-1 mt-60 mb-2 border-t-2 border-green-20">
          send
        </h5>
      </div>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
      >
        end chat
      </button>
    </>
  );
}

export default LIveChat;
