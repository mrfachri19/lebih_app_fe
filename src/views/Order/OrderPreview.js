import React, { useState } from "react";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
import Select from "react-dropdown-select";
import { useHistory } from "react-router-dom";
import { postTransaksi } from "../../api";
import { Messaege } from "../../helper/helper";

function OrderPreview() {
  const history = useHistory();
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

  function submitOrder() {
    let data = {
      nomor: localStorage.getItem("akun"),
      payment: localStorage.getItem("payment"),
      total: localStorage.getItem("harga"),
    };
    postTransaksi(data).then((res) => {
      Messaege("Succes", "Success order", "success");
      setTimeout(() => {
        history.push("/admin/order");
      }, 2000);
    });
  }
  return (
    <>
      <div className="flex flex-wrap pb-10">
        <div className="w-1/2 xl:w-1/2 mb-12 xl:mb-0 mt-20 ml-5">
          <h1 className="font-bold text-base text-green-20 mb-3">
            PIN POINT YOUR LOCATION
          </h1>
          <div className="border-green-20 border-2">
            <iframe
              title="STIE Mahardika"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.187376755455!2d112.72354862657848!3d-7.320515015468321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb6e5d46a71f%3A0xcee5826bf72578a8!2sSTIE%20Mahardika!5e0!3m2!1sid!2sid!4v1667284089526!5m2!1sid!2sid"
              className={"w-full h-98"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex xl:w-1/2 mb-12 xl:mb-0 px-4 mt-40 pl-16 -ml-10">
          <div className="bg-green-50 h-24 w-24 rounded-md mr-3"></div>
          <div className="block">
            <h1 className="font-semibold text-base text-green-20 mb-1 uppercase">
              Driver 1
            </h1>
            <p className="font-semibold text-sm text-green-20 mb-1">
              {localStorage.getItem("namaResto")}
            </p>
            <p className="font-semibold text-sm text-green-20 mb-1">
              {localStorage.getItem("alamat")}
            </p>
          </div>
        </div>
      </div>{" "}
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
              Metode Pembayaran: {localStorage.getItem("payment")} |{" "}
              {localStorage.getItem("akun")}
            </p>
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
                Rp.{Number(localStorage.getItem("harga")) + 11000}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={() => submitOrder()}
      >
        Complate Order
      </button>
    </>
  );
}

export default OrderPreview;
