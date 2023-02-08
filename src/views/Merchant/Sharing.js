import React, { useState } from "react";
import food1 from "../../assets/img/food-1.png";
import food2 from "../../assets/img/food-2.png";
import OrderForms from "../Order/OrderForms";
import { Messaege } from "../../helper/helper";
import { useHistory } from "react-router-dom";

function Sharing() {
  const history = useHistory();
  const dataOrganisasi = [
    {
      id: 1,
      nama: "organisasi 1",
      alamat: "jalan kencana 87b",
    },
    {
      id: 2,
      nama: "organisasi 12",
      alamat: "jalan Merah 87b",
    },
    {
      id: 3,
      nama: "organisasi 31",
      alamat: "jalan Lempah biru 87b",
    },
  ];
  const [kategori, setkategori] = useState("");
  const [berat, setBerat] = useState("");
  const [jumlah, setJumlah] = useState("");
  const handlesave = () => {
    localStorage.setItem("kategorisharing", kategori);
    localStorage.setItem("beratsharing", berat);
    localStorage.setItem("jumlahsharing", jumlah);
    Messaege("Succes", "Success sharing", "success");
  };
  return (
    <>
      <OrderForms />
      <div className="bg-green-20 py-10">
        <h1 className="font-semibold text-5xl text-white text-center mb-9">
          Food Form
        </h1>
        <div className="flex mx-10 py-10 ">
          <div className="block mr-5">
            <img
              src={food2}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl ml-10"
            />
            <button
              type="button"
              className="mt-9 ml-10 text-green-20 bg-white hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
            >
              Upload
            </button>{" "}
          </div>
          <div className="block">
            <input
              type="text"
              placeholder="kategori"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={(e) => setkategori(e.target.value)}
            />
            <input
              type="text"
              placeholder="berat"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={(e) => setBerat(e.target.value)}
            />
            <input
              type="text"
              placeholder="jumlah"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={(e) => setJumlah(e.target.value)}
            />
            <button
              type="button"
              className="ml-auto text-green-20 bg-white hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
              onClick={handlesave}
            >
              Save
            </button>{" "}
          </div>
        </div>
      </div>

      <div className="bg-white py-10 mb-5">
        <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
          Charity Organization List
        </h1>
        <div className="grid-cols-3 grid gap-20 mx-36 py-10 ">
          {dataOrganisasi.map((item, idx) => (
            <div className="block border-r-2 border-green-20">
              <img
                src={food1}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl"
              />
              <h1 className="font-semibold text-sm text-green-20 mt-9">
                {item.nama}{" "}
              </h1>
              <p className="font-normal text-sm text-green-20 mt-5">
                {item.alamat}{" "}
              </p>
              <button
                type="button"
                className="ml-auto mt-4 text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
                onClick={() => history.push("/admin/sharing-delivery")}
              >
                donate
              </button>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sharing;
