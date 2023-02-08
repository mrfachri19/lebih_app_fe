import React, { useState } from "react";
import { merchantPost } from "../../api";
import { Messaege } from "../../helper/helper";

function OrderMerchant() {
  const [namaresto, setNamaresto] = useState("");
  const [alamat, setalamat] = useState("");
  const [phone, setphone] = useState("");
  const [detailGedung, setdetailGedung] = useState("");
  const [jamOprasi, setjamOprasi] = useState("");
  const [kategori, setkategori] = useState("");

  function submitOrder() {
    let data = {
      namaResto: namaresto,
      alamat: alamat,
      phone: phone,
      detailGedung: detailGedung,
      jamOprasi: jamOprasi,
      kategori: kategori,
    };
    merchantPost(data).then((res) => {
      console.log(res);
      Messaege("Succes", "Success order", "success");
      localStorage.setItem("idMerchant", res.data.data.id)
    });
  }
  return (
    <div className="flex flex-wrap pb-10">
      <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 mt-20 pl-16">
        <h1 className="font-bold text-base text-green-20">
          Join As Merchant ?
        </h1>

        <div className="relative w-2/3 my-3">
          <input
            type="text"
            placeholder="Enter Your address"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setalamat(e.target.value)}
          />
          <input
            type="text"
            placeholder="Restaurant Name"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setNamaresto(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setphone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Building Details"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setdetailGedung(e.target.value)}
          />
          <input
            type="text"
            placeholder="operation hours"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setjamOprasi(e.target.value)}
          />
          <input
            type="text"
            placeholder="food category"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            onChange={(e) => setkategori(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="text-white ml-auto text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
          onClick={submitOrder}
        >
          Save
        </button>
      </div>
      <div className="w-full xl:w-1/2 mb-12 xl:mb-0 -ml-16 mt-20">
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
    </div>
  );
}

export default OrderMerchant;
