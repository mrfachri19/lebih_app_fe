import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAllOrder } from "../../api";
import { Messaege } from "../../helper/helper";
import iconMaps from "../../assets/img/Vector.svg";
import iconClock from "../../assets/img/mdi_clock-time-eight-outline.svg";
import iconToko from "../../assets/img/material-symbols_table-restaurant-outline.svg";
function Driver() {
  const { id } = useParams();
  const history = useHistory()
  const [data, setData] = useState([]);
  function getOrder() {
    getAllOrder(`/${id}`).then((res) => {
      var tempList;
      tempList = res.data.data[0];
      console.log("List Data menu => ", tempList);
      setData(tempList);
    });
  }

  useEffect(() => {
    getOrder();
  }, []);

  const handleArrive = () => {
    Messaege("Succes", "arrived at location", "success");
  };

  const handleComplete = () => {
    Messaege("Succes", "Complate order", "success");
    history.push("/admin/driver/delivery")
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
            <div className="mt-10 border rounded-lg">
              <img
                src={`https://apilebihapp-production.up.railway.app/uploads/movie/${localStorage.getItem(
                  "imageDriver"
                )}`}
                alt="img"
                style={{ width: "170px", height: "170px" }}
                className="rounded-md"
              />
            </div>
            <div className="block ml-10 mt-10">
              <h5 className="font-semibold text-xl text-green-50 mb-1">
                {localStorage.getItem("namaDriver")}
              </h5>
              <p className="font-semibold text-xl text-green-50 mb-1">
                {localStorage.getItem("nokenderaan")}
              </p>
              <p className="font-semibold text-xl text-green-50 mb-1">
                {localStorage.getItem("phoneDriver")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 border-y-2 border-t-4 border-green-20">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Order Detail
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
              {data.nama} | {data.phone}
            </p>
            <p className="font-normal text-base text-green-20 mt-2">
              {data.alamat}
              <span className="block">{data.building}</span>
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
              {data.nama}
            </p>
          </div>
          <div className="flex mt-20">
            <img
              src={`https://apilebihapp-production.up.railway.app/uploads/movie/${data.image}`}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl mr-10"
            />
            <div className="block">
              <h1 className="font-semibold text-3xl text-green-20">
                {data.jumlah}x {data.namaMakanan}
              </h1>
              <p className="font-normal text-3xl text-green-20 mt-5">
                {data.harga}
              </p>
              <p className="font-normal text-3xl text-green-20 mt-5">
                Notes:-{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="py-9 mt-40">
          <p className="font-semibold text-xl text-green-20 mt-2 ml-9 ">
            Subtotal pesanan : Rp.{Number(data.harga) * Number(data.jumlah)}
          </p>
        </div>
      </div>

      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={handleArrive}
      >
        Arrived at pickup point
      </button>
      <div className="flex border-t-2 border-green-20 mt-10">
        <div className="py-9 pl-9 w-full mx-28">
          <div className="flex mt-20 border-2 border-green-20">
            {" "}
            <button
              type="button"
              className=" ml-auto mt-60 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={handleComplete}
      >
        Complate order
      </button>
    </>
  );
}

export default Driver;
