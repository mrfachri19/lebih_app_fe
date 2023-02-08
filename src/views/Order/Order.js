import React, { useEffect, useState } from "react";
import { getListRestaurant } from "../../api";
import { useHistory } from "react-router-dom";
import food1 from "../../assets/img/shop.jpg";
import food2 from "../../assets/img/food-2.png";
import food3 from "../../assets/img/Chickenwings.png";
import OrderForms from "./OrderForms";

function Order() {
  const history = useHistory();
  const [dataResto, setDataResto] = useState([]);
  function getRestaurant() {
    getListRestaurant().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setDataResto(tempList);
    });
  }

  useEffect(() => {
    getRestaurant();
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
        <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
          Restaurant List
        </h1>
        <div className="grid-cols-3 grid gap-20 mx-36 py-10">
          {dataResto.map((item, idx) => (
            <div key={idx} className="block border-green-20 rounded-xl border-2 p-5">
              <img
                src={food1}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl border-2 m-auto"
              />
              <h1 className="font-semibold text-base text-center text-green-20 uppercase">
                {item.namaResto}
              </h1>
              <p className="font-semibold text-base text-center text-green-20">
                {item.alamat}
              </p>
              <button
                type="button"
                className="text-white mt-3 bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mb-2 dark:bg-green-20 focus:outline-none mx-10"
                onClick={() => history.push(`/admin/order-customer/${item.id}`)}
              >
                Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
