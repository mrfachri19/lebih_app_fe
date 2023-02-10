import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../api";
import { Messaege } from "../../helper/helper";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginAuth = async (e) => {
    try {
      e.preventDefault();
      const response = await login({
        email: email,
        password: password,
      });
      localStorage.setItem("role", response.data.data.role);
      localStorage.setItem("token", response.data.data.token);
      Messaege("Succes", "Success Login", "success");
      setTimeout(() => {
        if (localStorage.getItem("role") === "costumer") {
          history.push("/admin/order");
        } else if (localStorage.getItem("role") === "merchant") {
          localStorage.setItem("idUse", response.data.data.idUse);
          history.push("/admin/daftar-order");
        } else if (localStorage.getItem("role") === "driver") {
          history.push("/admin/driver");
        } else if (localStorage.getItem("role") === "organization") {
          history.push("/admin/organisasi");
        }else if (localStorage.getItem("role") === "admin") {
          history.push("/admin/approval");
        }
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
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
                <form onSubmit={LoginAuth}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-black text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email or Phone Number
                    </label>
                    <input
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
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-black bg-white rounded-2xl  text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/3">
                <Link to="/auth/register" className="text-black">
                  <small className="text-xs">Create new account</small>
                </Link>
              </div>
              <div className="w-1/3 text-right">
                <Link to="/auth/register-driver" className="text-black ">
                  <small className="text-xs ">Create new account driver</small>
                </Link>
              </div>
              <div className="w-1/3 text-right">
                <Link to="/auth/login-driver" className="text-black ">
                  <small className="text-xs ">Login Driver</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
