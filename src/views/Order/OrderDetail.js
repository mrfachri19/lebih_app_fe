import React, { useState } from "react";
import OrderForms from "./OrderForms";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
import Select from "react-dropdown-select";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modals";

function OrderDetail() {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [select, setSelect] = useState("");
  let dataBank = [
    { id: 1, login: "BCA Virtual Account" },
    { id: 2, login: "BRI" },
    { id: 2, login: "Mandiri" },
    { id: 2, login: "Mandiri Syariah" },
  ];
  const items = dataBank?.map((item) => {
    const data = {};
    data.label = item.login;
    data.value = item.id;
    return data;
  });
  return (
    <>
      <OrderForms />
      <div className="py-7 border-y-2 border-green-20">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Order Detail{" "}
        </h1>
      </div>
      <div className="py-8 pl-9">
        <div className="flex">
          <img src={iconMaps} alt="img" className="mr-4" />
          <div className="block">
            <p className="font-normal text-base text-green-20 mt-2">
              Alamat Pengiriman:
            </p>
            <p className="font-normal text-base text-green-20 mt-2">
              {localStorage.getItem("nama")} | {localStorage.getItem("phone")}
            </p>
            <p className="font-normal text-base text-green-20 mt-2">
              {localStorage.getItem("alamat")}
              <span className="block">{localStorage.getItem("building")}</span>
            </p>
          </div>
        </div>
        <div className="flex">
          <img src={iconClock} alt="img" className="mr-4" />
          <p className="font-normal text-base text-green-20 mt-2">
            Estimasi Waktu Pengiriman : 23 menit (4.2 km){" "}
          </p>
        </div>
      </div>
      <div className="flex border-t-2 border-green-20">
        <div className="py-9 pl-9">
          <div className="flex">
            <img src={iconToko} alt="img" className="mr-4" />
            <p className="font-semibold text-4xl text-green-20 mt-2">
              {localStorage.getItem("namamenu")}
            </p>
          </div>
          <div className="flex mt-20">
            <img
              src={`https://apilebihapp-production.up.railway.app/uploads/movie/${localStorage.getItem(
                "image"
              )}`}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl mr-10"
            />
            <div className="block">
              <h1 className="font-semibold text-3xl text-green-20">
                {localStorage.getItem("jumlah")}{" "}
                {localStorage.getItem("namamenu")}
              </h1>
              <p className="font-normal text-3xl text-green-20 mt-5">
                Rp {localStorage.getItem("harga")}
              </p>
              <p className="font-normal text-3xl text-green-20 mt-5">
                Notes:-{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="py-9">
          <p className="font-semibold text-4xl text-green-20 mt-2 ml-9 ">
            Payment{" "}
          </p>
          <div className="flex my-10 mx-9">
            <p className="font-medium text-3xl text-green-20 ">
              Metode Pembayaran{" "}
            </p>
            <div className="w-1/2">
              <Select
                placeholder="Select Bank"
                className="w-full border-2 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                options={items}
                hideSelectedOptions={false}
                value={dataBank}
                onChange={(selected) => setSelect(selected)}
              />
            </div>
          </div>
          <div className="block mb-2 ml-9">
            <div className="flex flex-row gap-9">
              <p className="font-medium text-3xl text-green-20">
                Subtotal Pesanan{" "}
              </p>
              <p className="font-medium text-3xl text-green-20">
                Rp.{localStorage.getItem("harga")}
              </p>
            </div>
          </div>
          <div className="block mb-2 ml-9">
            <div className="flex flex-row gap-9">
              <p className="font-medium text-3xl text-green-20">
                Biaya Pengiriman{" "}
              </p>
              <p className="font-medium text-3xl text-green-20">Rp 10.000,-</p>
            </div>
          </div>
          <div className="block mb-2 ml-9">
            <div className="flex flex-row gap-20">
              <p className="font-medium text-3xl text-green-20">
                Biaya Layanan{" "}
              </p>
              <p className="font-medium text-3xl text-green-20">Rp 1.000,-</p>
            </div>
          </div>
          <hr className="w-full ml-9 border-2 border-green-20" />
          <div className="block mb-2 ml-9">
            <div className="flex flex-row gap-52">
              <p className="font-medium text-3xl text-green-20">Total</p>
              <p className="font-medium text-3xl text-green-20">
                Rp.{Number(localStorage.getItem("harga")) * Number(localStorage.getItem("jumlah")) + 11000}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={() => setShowModal(!showModal)}
      >
        Pesan Sekarang
      </button>
      <Modal isShow={showModal} />
    </>
  );
}

export default OrderDetail;
