import React from "react";
import food1 from "../../assets/img/food-1.png";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
import poster1 from "../../assets/img/Food Sale Poster.svg";
import poster2 from "../../assets/img/Food  (Poster).svg";
function Recycle() {
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
      <div className="flex flex-wrap pb-10">
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 mt-52 pl-16">
          <h1 className="font-normal text-6xl bg-white text-green-20">
            Say No To <span className="block">Food Waste</span>
          </h1>
          <div className="py-3 px-6 bg-green-20 text-white w-fit rounded-3xl mt-6">
            Get Started
          </div>
        </div>
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 -ml-28 flex">
          <img src={poster2} alt="img" className="mt-52 z-5" />
          <img src={poster1} alt="img" className="-mt-52 -ml-28" />
        </div>
      </div>
      <div className="py-7 border-y-2 border-t-4 border-green-20">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Artikel
        </h1>
      </div>
      {dataArtikel.map((item, idx) => (
        <div className="flex border-t-2 border-green-20">
          <div className="py-9 pl-9">
            <div className="flex mt-20">
              <img
                src={food1}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl mr-10"
              />
              <div className="block">
                <h1 className="font-semibold text-3xl text-green-20">
                  {item.nama}
                </h1>
                <p className="font-normal text-3xl text-green-20 mt-5">
                  {item.deskripsi}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recycle;
