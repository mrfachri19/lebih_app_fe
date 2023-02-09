import React from "react";
import food1 from "../../assets/img/food-1.png";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
import { Messaege } from "../../helper/helper";
import { useHistory } from "react-router-dom";

function SharingDelivery() {
  const history = useHistory()
  const handleDonation = () => {
    Messaege("Succes", "Success", "success");
    history.push("/admin/sharing");
  };
  return (
    <>
      <div className="flex pb-10">
        <div className="w-1/2 mb-12 xl:mb-0 ml-5 mt-20">
          <h1 className="font-bold text-base text-green-20 mb-3">
            Driver Location
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
        <div className="w-1/2 mb-12 xl:mb-0 mt-20 ml-5 block">
          <div className="flex">
            <div className="w-36 h-36 mt-10 bg-green-50 rounded-lg"></div>
            <div className="block ml-10 mt-10">
              <h5 className="font-semibold text-xl text-green-50 mb-1">
                Agus D.
              </h5>
              <p className="font-semibold text-xl text-green-50 mb-1">
                B 3823 VCD
              </p>
              <p className="font-semibold text-xl text-green-50 mb-1">
                0853444434
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 border-y-2 border-t-4 border-green-20">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Donation Detail
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
              {localStorage.getItem("namaOrganisasi")}
            </p>
          </div>
          <div className="flex mt-20">
            <img
              src={food1}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl mr-10"
            />
            <div className="block">
              <h1 className="font-semibold text-3xl text-green-20">
                {localStorage.getItem("jumlahsharing")}x{" "}
                {localStorage.getItem("kategorisharing")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-t-2 border-green-20 mt-10">
        <div className="py-9 pl-9">
          <div className="flex">
            <p className="font-semibold text-4xl text-green-20 mt-2">
              Organization
            </p>
          </div>
          <div className="flex mt-20">
            <img
              src={food1}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl mr-10"
            />
            <div className="block">
              <h1 className="font-semibold text-3xl text-green-20">
                {localStorage.getItem("nama")}
              </h1>
              <h1 className="font-semibold text-3xl text-green-20">
                {localStorage.getItem("alamat")}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={handleDonation}
      >
        Donation Received
      </button>
    </>
  );
}

export default SharingDelivery;
