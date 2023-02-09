import React, { useEffect, useState } from "react";
import { getListRestaurant } from "../../api";
import { useHistory, useParams } from "react-router-dom";
import food1 from "../../assets/img/food-1.png";
import { Messaege } from "../../helper/helper";

function ApproverMerchant() {
  const { id } = useParams();
  const history = useHistory();
  const [dataResto, setDataResto] = useState("");
  function getRestaurant() {
    getListRestaurant(`/${id}`).then((res) => {
      var tempList;
      tempList = res.data.data[0];
      console.log("List Data => ", tempList);
      setDataResto(tempList);
    });
  }

  useEffect(() => {
    getRestaurant();
  }, []);
  
  const handleApprove = () => {
    Messaege("Succes", "Success Approve", "success");
  }
  const handleReject = () => {
    Messaege("Succes", "Success Reject", "success");
  }
  return (
    <>
      <div className="bg-white py-10 mb-5">
        <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
          Apporval
        </h1>
        <div className="grid grid-cols-3 gap-20 mx-28 py-10 ">
          <div className="flex">
            <img
              src={food1}
              alt="img"
              style={{ width: "150px", height: "170px" }}
              className="rounded-xl"
            />
            <div className="block ml-10">
              <h1 className="font-semibold text-sm text-green-20 mt-9">
              {dataResto.namaResto}
              </h1>
              <p className="font-normal text-sm text-green-20">Type: Merchant</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="text-white mt-5 text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl  px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
            >
              Download
            </button>
          </div>

          <div className="block ml-auto">
            <button
              type="button"
              className="text-white mt-5 text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl  px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
              onClick={handleApprove}
            >
              Approve
            </button>
            <button
              type="button"
              className="text-white mt-5 text bg-green-20 w-44 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        </div>
        <button
          type="button"
          className="text-white mt-5 text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl ml-20  px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
          onClick={() => history.push("/admin/approval")}
        >
          Back to list
        </button>
      </div>
    </>
  );
}

export default ApproverMerchant;
