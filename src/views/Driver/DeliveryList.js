import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; 
import { getAllOrder } from "../../api";
function DeliveryList() {
  const history = useHistory()
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
  return (
    <div className="bg-white py-10 mb-5">
      <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
        Delivery List
      </h1>
      {data.map((item, idx) => (
        <>
          <div className="w-full mx-36 py-10 cursor-pointer" onClick={() => history.push(`/admin/driver/delivery/${item.id}`)}>
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
                  Distance: 2.4 Km{" "}
                </h1>
                <p className="font-normal text-3xl text-green-20 mt-3">
                  Payment: {item.harga}
                </p>
                <p className="font-normal text-3xl text-green-20 mt-3">
                  Point: 10 poin
                </p>
              </div>
            </div>
          </div>
          <hr className="border border-green-20" />
        </>
      ))}
    </div>
  );
}

export default DeliveryList;
