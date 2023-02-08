import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../api";
import { Messaege } from "../../helper/helper";
import Select from "react-dropdown-select";

export default function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [select, setSelect] = useState("");

  let dataLogin = [
    { id: 1, login: "costumer" },
    { id: 2, login: "merchant" },
    { id: 3, login: "organization" },
    { id: 4, login: "admin" },
  ];
  const items = dataLogin?.map((item) => {
    const data = {};
    data.label = item.login;
    data.value = item.id;
    return data;
  });

  const Registeruser = async (e) => {
    if (repassword !== password) {
      Messaege("Failed", "password tidak sama", "error");
    } else {
      try {
        e.preventDefault();
        const response = await register({
          name: name,
          phone: phone,
          email: email,
          password: password,
          role: select.label,
        });
        Messaege("Succes", "Success Register", "success");
        setTimeout(() => {
          // history.push("/admin/dashboard");
        }, 2000);
        console.log(response);
      } catch (error) {
        console.log(error);
        Messaege("Failed", `${error}`, "error");
      }
    }
  };

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
                <form onSubmit={Registeruser}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
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
                      onChange={(e) => setPhone(e.target.value)}
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
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Re-Enter Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setRePassword(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Join As
                    </label>
                    <Select
                      placeholder="Select join"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      options={items}
                      hideSelectedOptions={false}
                      value={dataLogin}
                      onChange={(selected) => setSelect(selected[0])}
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
