import React, { useEffect, useState } from "react";
import { getmenuIdMerchant, getListRestaurantId } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import food1 from "../../assets/img/shop.jpg";
import food2 from "../../assets/img/food-2.png";
import food3 from "../../assets/img/Chickenwings.png";
import OrderForms from "./OrderForms";

function OrderCusrtomer() {
  const { id } = useParams();
  const history = useHistory();
  const [dataResto, setDataResto] = useState();
  const [datameu, setDataMenu] = useState([]);
  const [jumlah, setJumlah] = useState("");
  function getRestaurant() {
    getListRestaurantId(`/${id}`).then((res) => {
      console.log("List Data detail => ", res.data.data[0]);
      setDataResto(res.data.data[0]);
    });
  }
  function getMenu() {
    getmenuIdMerchant(`/${id}`).then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data menu => ", tempList);
      setDataMenu(tempList);
    });
  }

  useEffect(() => {
    getRestaurant();
    getMenu();
  }, []);
  return (
    <>
      <OrderForms />
      <div className="bg-green-20 py-10">
        <h1 className="font-semibold text-5xl text-white text-center mb-9">
          Categories{" "}
        </h1>
        <div className="flex flex-row gap-14 mx-28">
          <div className="block">
            <img
              src={food1}
              alt="img"
              style={{ width: "350px", height: "370px" }}
            />
            <h1 className="font-normal text-4xl text-white text-center my-9">
              Rice{" "}
            </h1>
          </div>
          <div className="block">
            <img
              src={food2}
              alt="img"
              style={{ width: "350px", height: "370px" }}
            />
            <h1 className="font-normal text-4xl text-white text-center my-9">
              Noodles{" "}
            </h1>
          </div>
          <div className="block">
            <img
              src={food3}
              alt="img"
              style={{ width: "350px", height: "370px" }}
            />
            <h1 className="font-normal text-4xl text-white text-center my-9">
              Bakery{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 mb-5">
        <div className="flex border-y-2 border-green-20 pl-10 py-10">
          <div className="block rounded-xl p-5 w-1/2">
            <img
              src={food1}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl border-2 m-auto"
            />
            <h1 className="font-semibold text-base text-center text-green-20 uppercase">
              {dataResto?.namaResto}
            </h1>
            <p className="font-semibold text-base text-center text-green-20">
              {dataResto?.alamat}
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-3xl text-green-20 py-20">
              Menu{" "}
            </h1>
          </div>
        </div>
        <div className="grid-cols-3 gap-4 grid mx-10 py-10 ">
          {datameu.map((item, idx) => (
            <div key={idx} className="flex rounded-xl p-5 border">
              <img
                src={`https://apilebihapp-production.up.railway.app/uploads/movie/${item.image}`}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl border-2 m-auto"
              />
              <div className="block ml-3">
                {" "}
                <h1 className="font-semibold text-base text-green-20 mb-1 uppercase">
                  {item.nama}
                </h1>
                <p className="font-semibold text-sm text-green-20 mb-1">
                  Harga: Rp.{item.harga}
                </p>
                <p className="font-semibold text-sm text-green-20 mb-1">
                  diskon: {item.diskon}%
                </p>
                <div className="flex mb-3">
                  <label
                    className="block font-semibold text-sm text-green-20 mt-3 mr-2"
                    htmlFor="grid-password"
                  >
                    Jumlah:
                  </label>
                  <input
                    onChange={(e) => setJumlah(e.target.value)}
                    className="px-3 py-3 placeholder-slate-300 text-black bg-white text-sm rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="jumlah"
                  />
                </div>
                <button
                  type="button"
                  className="text-white mt-3 bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mb-2 dark:bg-green-20 focus:outline-none"
                  onClick={() => {
                    history.push(`/admin/order/detail`);
                    localStorage.setItem("image", item.image);
                    localStorage.setItem("harga", item.harga);
                    localStorage.setItem("diskon", item.diskon);
                    localStorage.setItem("namamenu", item.nama);
                    localStorage.setItem("namaResto", dataResto?.namaResto);
                    localStorage.setItem("jumlah", jumlah);
                  }}
                >
                  add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderCusrtomer;
