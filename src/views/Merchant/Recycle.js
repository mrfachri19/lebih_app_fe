import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { postArtikel, getArtikel } from "../../api";
import { Messaege } from "../../helper/helper";
import poster1 from "../../assets/img/Food Sale Poster.svg";
import poster2 from "../../assets/img/Food  (Poster).svg";
function Recycle() {
  const history = useHistory();
  const [preview, setPreview] = useState("");
  const [formMenu, setDataFormmenu] = useState({
    nama: "",
    sinopsis: "",
    deskripsi: "",
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
      const { nama, sinopsis, deskripsi, image } = formMenu;
      const setDataForm = {
        nama,
        sinopsis,
        deskripsi,
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
      const response = await postArtikel(formImage);
      getArtikelAll();
      Messaege("Succes", "Success add menu", "success");
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  const [data, setData] = useState([]);
  function getArtikelAll() {
    getArtikel().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data menu => ", tempList);
      setData(tempList);
    });
  }
  useEffect(() => {
    getArtikelAll();
  }, []);
  return (
    <>
      <div className="flex flex-wrap pb-10">
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 mt-52 pl-16">
          <h1 className="font-normal text-6xl bg-white text-green-20">
            Say No To <span className="block">Food Waste</span>
          </h1>
          <div className="py-3 px-6 bg-green-20 text-white w-fit rounded-3xl mt-6">
            Get Started
          </div>
        </div>
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4 -ml-28 flex">
          <img src={poster2} alt="img" className="mt-52 z-5" />
          <img src={poster1} alt="img" className="-mt-52 -ml-28" />
        </div>
      </div>
      <div className="py-7 border-y-2 border-t-4 border-green-20">
        <h1 className="font-semibold text-5xl text-green-20 text-center">
          Artikel
        </h1>
      </div>
      <div className="flex mx-10 py-10 ">
        <div className="relative w-1/2 mb-3 ">
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
        <div className="block w-1/2">
          <input
            type="text"
            placeholder="nama"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="nama"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="sinopsis"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="sinopsis"
            onChange={handleChangeInput}
          />
          <textarea
            type="text"
            placeholder="deskripsi"
            className="border-2 border-green-20 rounded-2xl px-3 py-3 mb-5 placeholder-slate-300 text-slate-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="deskripsi"
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
      {data.map((item, idx) => (
        <div className="flex border-t-2 border-green-20">
          <div className="py-9 pl-9">
            <div className="flex mt-20">
              <img
                src={`https://apilebihapp-production.up.railway.app/uploads/movie/${item.image}`}
                alt="img"
                style={{ width: "150px", height: "170px" }}
                className="rounded-xl mr-10"
              />
              <div className="block">
                <h1 className="font-semibold text-3xl text-green-20 ml-4">
                  {item.nama}
                </h1>
                <p className="font-normal text-3xl text-green-20 mt-5 mx-4">
                  {item.sinopsis}{" "}
                </p>
                <h1
                  className="font-semibold text-base text-white text-center rounded-md w-32 mt-4 py-3 px-3 bg-green-20 cursor-pointer"
                  onClick={() => history.push(`/admin/artikel/${item.id}`)}
                >
                  Detail
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recycle;
