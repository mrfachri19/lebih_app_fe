import React, { useState, useRef } from "react";
import {  useHistory } from "react-router-dom";
import { PostMenu } from "../../api";
import { Messaege } from "../../helper/helper";
import OrderMerchant from "./OrderForms";

function DaftarOrder() {
  const history = useHistory();
  const [preview, setPreview] = useState("");
  const [formMenu, setDataFormmenu] = useState({
    id_merchant: "",
    nama: "",
    harga: "",
    diskon: "",
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
      const {  nama, harga, diskon, image } = formMenu;
      const setDataForm = {
        id_merchant: localStorage.getItem("idUse"),
        nama,
        harga,
        diskon,
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
      const response = await PostMenu(formImage);
      Messaege("Succes", "Success add menu", "success");
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  return (
    <>
      <OrderMerchant />
      <div className="bg-white py-10 mb-10 border-2 border-green-20 w-2/3 ml-6 rounded-lg">
        <h1 className="font-semibold text-3xl text-center text-green-20">
          Add Menu
        </h1>
        <div className="flex mx-10 py-10 ">
          <div className="relative w-full mb-3 ">
            <div className="border-2 rounded-md block border-white w-1/2 h-56 ">
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
          </div>
          <div className="block">
            <input
              type="text"
              placeholder="nama"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              name="nama"
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="harga"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              name="harga"
              onChange={handleChangeInput}
            />
            <input
              type="text"
              placeholder="diskon"
              className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              name="diskon"
              onChange={handleChangeInput}
            />
            <button
              type="button"
              className="ml-auto text-white bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
              onClick={postDataMenu}
            >
              Save
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default DaftarOrder;
