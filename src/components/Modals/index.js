import React, { useState } from "react";
import Select from "react-dropdown-select";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
export default function Modal(props) {
  const { className, closeModal, isShow } = props;
  const history = useHistory();
  const [select, setSelect] = useState("");
  const [nama, setnama] = useState("");
  const [account, setAccount] = useState("700016754352");

  let dataLogin = [
    { id: 1, login: "BRI" },
    { id: 2, login: "Mandiri" },
    { id: 3, login: "Mandiri Syariah" },
    { id: 4, login: "BCA" },
  ];
  const items = dataLogin?.map((item) => {
    const data = {};
    data.label = item.login;
    data.value = item.id;
    return data;
  });
  const save = () => {
    localStorage.setItem("virtual", nama);
    localStorage.setItem("akun", account);
    localStorage.setItem("payment", select.label);
    history.push("/admin/order/preview");
  };
  return (
    <>
      {isShow ? (
        <>
          {" "}
          <div
            className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${className}`}
            onClick={closeModal}
          >
            <div className="relative my-6 mx-auto w-1/2">
              <div className="border-0 rounded-lg shadow-e3 relative px-12 flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="text-center mt-8 font-bold text-green-500 text-2xl">
                  Payment Method
                </div>
                <div className="relative w-full mb-3 mt-5">
                  <label
                    className="block text-black text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Virtual Account / Gopay / Dana / OVO number
                  </label>
                  <input
                    className="px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Virtual"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
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
                    className="px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="name"
                    onChange={(e) => setnama(e.target.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block text-black text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Payment Type
                  </label>
                  <Select
                    placeholder="Payment Type"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    options={items}
                    hideSelectedOptions={false}
                    onChange={(selected) => setSelect(selected[0])}
                  />
                </div>
                <div className="w-full mb-8 grid justify-items-center">
                  <button
                    type="button"
                    className=" bg-green-600 w-32 h-9 px-2 py-1 rounded-lg"
                    onClick={save}
                  >
                    <span className="text-white font-bold text-base">OK</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-neutral-900"></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

Modal.defaultProps = {
  className: "",
  closeModal: () => {},
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeModal: PropTypes.func,
};
