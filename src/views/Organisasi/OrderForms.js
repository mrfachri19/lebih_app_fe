import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { postOrganisasi } from "../../api";
import { Messaege } from "../../helper/helper";
import Select from "react-dropdown-select";

function OrderForms() {
  const history = useHistory();
  const [preview, setPreview] = useState("");
  const [formMenu, setDataFormmenu] = useState({
    address: "",
    nama: "",
    phone: "",
    pic: "",
    idNumber: "",
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
      const { address, nama, phone, pic, idNumber, image } = formMenu;
      const setDataForm = {
        address,
        nama,
        phone,
        pic,
        idNumber,
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
      const response = await postOrganisasi(formImage);
      Messaege("Succes", "Success add menu", "success");
      localStorage.setItem("type", select.label)
      setTimeout(() => {
        history.push("/admin");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  const [select, setSelect] = useState("");
  let dataBank = [
    { id: 1, login: "Recycle" },
    { id: 2, login: "Sharing" },
  ];
  const items = dataBank?.map((item) => {
    const data = {};
    data.label = item.login;
    data.value = item.id;
    return data;
  });
  return (
    <div className="flex flex-wrap pb-10">
      <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 mt-20 pl-16">
        <div className="relative w-2/3 mb-3">
          <input
            type="text"
            placeholder="Enter Your address"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="address"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="nama"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="pic"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="pic"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="phone"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="phone"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="idNumber"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="idNumber"
            onChange={handleChangeInput}
          />
               <Select
                placeholder="Select type"
                className="w-full border-2 px-3 py-3 my-5 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                options={items}
                hideSelectedOptions={false}
                value={dataBank}
                onChange={(selected) => setSelect(selected)}
              />
          <div className="relative w-full mb-3 border">
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
        </div>
        <button
          type="button"
          className="text-white ml-auto text bg-green-20 hover:bg-green-700 focus:ring-4 focus:bg-green-20 font-medium rounded-lg text-xl m px-12 py-2.5 mr-2 mb-2 dark:bg-green-20 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-700"
          onClick={postDataMenu}
        >
          Save
        </button>
      </div>
      <div className="w-full xl:w-1/2 mb-12 xl:mb-0 -ml-16 mt-20">
        <h1 className="font-bold text-base text-green-20 mb-3">
          PIN POINT YOUR LOCATION
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
    </div>
  );
}

export default OrderForms;
