import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { postFood, getAllORganisasi } from "../../api";
import { Messaege } from "../../helper/helper";
import OrderForms from "../Order/OrderForms";

function Sharing() {
  const history = useHistory();
  const [dataResto, setDataResto] = useState([]);
  function getRestaurant() {
    getAllORganisasi().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      let temps = tempList.filter((item) => {
        return item.type === "Sharing";
      });
      setDataResto(temps);
      console.log("List Data => ", temps);
    });
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  const [preview, setPreview] = useState("");
  const [formMenu, setDataFormmenu] = useState({
    nama: "",
    berat: "",
    kategori: "",
    total: "",
    image: null,
  });
  const handleChangeInput = (e) => {
    setDataFormmenu({ ...formMenu, [e.target.name]: e.target.value });
  };
  const inputFile = useRef(formMenu.image);
  const onClickInput = () => {
    inputFile.current.click();
  };
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
    setDataFormmenu({ ...formMenu, image: selectedFile });
  };
  const postDataMenu = async (e) => {
    try {
      e.preventDefault();
      const { nama, kategori, total, berat, image } = formMenu;
      const setDataForm = {
        nama,
        berat,
        kategori,
        total,
        image,
      };
      const formImage = new FormData();
      for (const menu in setDataForm) {
        formImage.append(menu, setDataForm[menu]);
      }
      for (const data in setDataForm) {
        if (setDataForm[data] === "") {
          alert("Lengkapi Form yang kosong!");
          return false;
        }
      }
      const response = await postFood(formImage);
      Messaege("Succes", "Success add menu", "success");
      localStorage.setItem("idFood", response.data.data.id)
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  return (
    <>
      <OrderForms />
      <div className="bg-green-20 py-10">
        <h1 className="font-semibold text-5xl text-white text-center mb-9">
          Food Form
        </h1>
        <div className="flex mx-10 py-10 ">
          <div className=" rounded-md block  w-1/2 h-56 ">
            {formMenu.image && (
              <img src={preview} alt={""} className="mb-3 h-40" />
            )}
            <input
              type="file"
              onChange={handleChange}
              name="image"
              ref={inputFile}
              style={{ display: "none" }}
            />
            <button
              className={`bg-white text-black active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mx-4 ${
                !formMenu.image && "mt-40"
              }`}
              type="button"
              onClick={onClickInput}
            >
              Upload
            </button>
          </div>
          <div className="block">
            <input
              type="text"
              placeholder="nama"
              name="nama"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="kategori"
              name="kategori"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={handleChangeInput}
            />
            <input
              placeholder="total"
              name="total"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={handleChangeInput}
            />
            <input
              placeholder="berat"
              name="berat"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              onChange={handleChangeInput}
            />
            <button
              type="button"
              className="ml-auto text-green-20 bg-white hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
              onClick={postDataMenu}
            >
              Save
            </button>{" "}
          </div>
        </div>
      </div>

      <div className="bg-white py-10 mb-5">
        <h1 className="font-bold text-5xl text-green-20 text-center pb-12 border-b-2 border-green-20">
          Charity Organization List
        </h1>
        <div className="grid-cols-3 grid gap-20 mx-36 py-10 ">
          {dataResto.map((item, idx) => (
            <div className="block ">
              <img
                src={`https://apilebihapp-production.up.railway.app/uploads/movie/${item.image}`}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl"
              />
              <h1 className="font-semibold text-sm text-green-20 mt-9">
                {item.nama}{" "}
              </h1>
              <p className="font-normal text-sm text-green-20 mt-5">
                {item.address}{" "}
              </p>
              <button
                type="button"
                className="ml-auto mt-4 text-white bg-blue-500 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
                onClick={() => {
                  history.push(`/admin/sharing-delivery/${item.id}`);
                  localStorage.setItem("namaOrganisasi", item.nama);
                }}
              >
                donate
              </button>{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sharing;
