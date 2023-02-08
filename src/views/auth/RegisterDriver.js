import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { registerDriver } from "../../api";
import { Messaege } from "../../helper/helper";

export default function RegisterDriver() {
  const history = useHistory();
  const [preview, setPreview] = useState("");
  const [dataFormDriver, setdataFormDriver] = useState({
    noKenderaan: "",
    nama: "",
    phone: "",
    password: "",
    idnumber: "",
    role: "",
    image: null,
  });
  const handleChangeInput = (e) => {
    setdataFormDriver({ ...dataFormDriver, [e.target.name]: e.target.value });
  };
  const inputFile = useRef(dataFormDriver.image);
  const onClickInput = () => {
    inputFile.current.click();
  };
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
    setdataFormDriver({ ...dataFormDriver, image: selectedFile });
  };
  const RegisterDriver = async (e) => {
    try {
      e.preventDefault();
      const { noKenderaan, nama, phone, password, image, idnumber } = dataFormDriver;
      const setDataForm = {
        noKenderaan,
        nama,
        phone,
        password,
        image,
        idnumber,
        role: "driver",
      };
      const formImage = new FormData();
      for (const driver in setDataForm) {
        formImage.append(driver, setDataForm[driver]);
      }
      for (const data in setDataForm) {
        if (setDataForm[data] === "") {
          alert("Lengkapi Form yang kosong!");
          return false;
        }
      }
      const response = await registerDriver(formImage);
      Messaege("Succes", "Success Register", "success");
      setTimeout(() => {
        history.push("/auth/login");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };

  // useEffect(() => {
  //   dispatch(GetUser());
  //   // eslint-disable-next-line no-unused-expressions
  //   image ? changeFile() : null;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [image]);

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-2/4 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-20 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-black font-bold  text-xl">
                    Fight FLW (Food Loss Waste) with Lebih{" "}
                  </h6>
                </div>
              </div>
              {/* body */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={RegisterDriver}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      No Kenderaan
                    </label>
                    <input
                      type="text"
                      name="noKenderaan"
                      onChange={handleChangeInput}
                      className="px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="no kendaraan"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      onChange={handleChangeInput}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="nama"
                      onChange={handleChangeInput}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChangeInput}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block text-black text-xs font-bold mb-2">
                      Foto
                    </label>
                    <div className="border-2 rounded-md block border-white w-1/2 h-56 ">
                      {dataFormDriver.image && (
                        <img
                          src={preview}
                          alt={''}
                          className="mb-3 h-40"
                        />
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
                          !dataFormDriver.image && "mt-40"
                        }`}
                        type="button"
                        onClick={onClickInput}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      National Id Number
                    </label>
                    <input
                      type="text"
                      name="idnumber"
                      onChange={handleChangeInput}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="national id number"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link to="/auth/login" className="text-black">
                  <small className="text-xs">Login Account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
