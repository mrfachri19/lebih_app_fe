import React, { useEffect, useState } from "react";
import { getListRestaurant } from "../../api";
import { useHistory } from "react-router-dom";
import food1 from "../../assets/img/food-1.png";

function Approval() {
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

  const dataDriver = [
    {
      id: 1,
      nama: "Driver1",
    },
    {
      id: 2,
      nama: "Driver 54",
    },
    {
      id: 3,
      nama: "Driver 31",
    },
  ];
  return (
    <>
      <div className="bg-white py-10 mb-5">
        <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
          Apporval
        </h1>
        <div className="grid-cols-3 grid gap-20 mx-36 py-10 ">
          <div className="block">
            <h1 className="font-semibold text-3xl text-green-20 mb-5">
              Organization
            </h1>
            {dataOrganisasi.map((item, idx) => (
              <div
                key={idx}
                className="block border-green-20 rounded-xl mb-2 border-2 p-5"
              >
                <img
                  src={food1}
                  alt="img"
                  style={{ width: "150px", height: "170px" }}
                  className="rounded-xl border-2 m-auto"
                />
                <h1 className="font-semibold text-base text-center text-green-20 uppercase">
                  {item.nama}
                </h1>
                <p className="font-semibold text-base text-center text-green-20">
                  {item.alamat}
                </p>
                <button
                  type="button"
                  className="text-white mt-3 bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mb-2 dark:bg-green-20 focus:outline-none mx-10"
                  onClick={() =>
                    history.push(`/admin/approval/detail/${item.id}`)
                  }
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
          <div className="block">
            <h1 className="font-semibold text-3xl text-green-20 mb-5">
              Driver
            </h1>
            {dataDriver.map((item, idx) => (
              <div
                key={idx}
                className="block border-green-20 rounded-xl mb-2 border-2 p-5"
              >
                <img
                  src={food1}
                  alt="img"
                  style={{ width: "150px", height: "170px" }}
                  className="rounded-xl border-2 m-auto"
                />
                <h1 className="font-semibold text-base text-center text-green-20 uppercase">
                  {item.nama}
                </h1>
       
                <button
                  type="button"
                  className="text-white mt-3 bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mb-2 dark:bg-green-20 focus:outline-none mx-10"
                  onClick={() =>
                    history.push(`/admin/approval/detail/${item.id}`)
                  }
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
          <div className="block">
            <h1 className="font-semibold text-3xl text-green-20 mb-5">
              Merchant
            </h1>
            {dataResto.map((item, idx) => (
              <div
                key={idx}
                className="block border-green-20 rounded-xl mb-2 border-2 p-5"
              >
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
                  onClick={() =>
                    history.push(`/admin/approval/detail/${item.id}`)
                  }
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Approval;
