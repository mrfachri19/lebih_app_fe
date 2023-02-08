import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllOrder } from "../../api";
import { Messaege } from "../../helper/helper";

function ConfirmDetail() {
  const history = useHistory();
  const [data, setData] = useState([]);
  function getOrder() {
    getAllOrder().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data menu => ", tempList);
      setData(tempList);
    });
  }

  useEffect(() => {
    getOrder();
  }, []);

  const complate = () => {
    Messaege("Succes", "Success  order", "success");
  }
  const complateOrder = () => {
    Messaege("Succes", "Succes Recived payment", "success");
    history.push("/admin/daftar-order")
  }
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
          Order Detail{" "}
        </h1>
      </div>
      {data.map((item, idx) => (
        <>
          <div className="w-full mx-36 py-10 cursor-pointer">
            <h1 className="font-semibold text-3xl text-green-20 mb-5">
              Date: 22 juni 2022
            </h1>
            <div className="flex border-r-2 border-green-20">
              <img
                src={`https://apilebihapp-production.up.railway.app/uploads/movie/${item.image}`}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl"
              />
              <div className="block ml-10">
                <h1 className="font-semibold text-3xl text-green-20 mt-3">
                  {item.namaMakanan}{" "}
                </h1>
                <p className="font-normal text-3xl text-green-20 mt-3">
                  {item.alamat}{" "}
                </p>
                <p className="font-normal text-3xl text-green-20 mt-3">
                  {item.phone}{" "}
                </p>
              </div>
              <div className="block ml-10">
                <h1 className="font-semibold text-3xl text-green-20 mt-3">
                  Jumlah: {item.jumlah}
                </h1>
                <p className="font-normal text-3xl text-green-20 mt-3">
                  Subtotal: {item.harga}
                </p>
          
              </div>
            </div>
          </div>
          <hr className="border border-green-20" />
        </>
      ))}
      <button
        type="button"
        className=" mt-5 ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={complate}
      >
        Confirm Order
      </button>
      <button
        type="button"
        className=" ml-9 text-white text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
        onClick={complateOrder}
      >
        Order Complate
      </button>
    </>
  );
}

export default ConfirmDetail;
