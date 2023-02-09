import React, { useEffect, useState } from "react";
import { getListRestaurant } from "../../api";
import { useHistory } from "react-router-dom";
import food1 from "../../assets/img/food-1.png";
function Chat() {

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
      <div className="py-7">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Live Chat
        </h1>
      </div>
      <div className="py-7">
        <h1 className="font-semibold text-lg text-green-20 ml-8 text-left mb-2">
          Live Chat with merchant
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
                onClick={() => history.push(`/admin/livechat`)}
              >
                Chat
              </button>
            </div>
          ))}
        </div>
      </div>

   
    </>
  );
}

export default Chat;
