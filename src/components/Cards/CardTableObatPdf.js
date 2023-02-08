import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { getAllObat } from "../../api";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
export default function CardTable({ color }) {
  const [allObat, setAllObat] = useState([]);
  const [search, setSearch] = useState("");
  function obatAll() {
    getAllObat(`/dataObat?search=${search}`).then((res) => {
      console.log(res, "obat");
      var tempList = [];
      tempList = res.data.data;
      setAllObat(tempList);
    });
  }

  useEffect(() => {
    obatAll();
  }, [search]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-slate-700" : "text-white")
                }
              >
                Laporan Obat
              </h3>
            </div>
     
            <button
              className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-auto"
              type="button"
              onClick={handlePrint}
            >
              Cetak Pdf
            </button>
     
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table
            className="items-center w-full bg-transparent border-collapse"
            ref={componentRef}
          >
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 "
                    : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Nama Obat
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                    ? "bg-slate-50 text-slate-500 "
                    : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Stock
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-slate-50 text-slate-500 "
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Kategori Obat
                </th>

              </tr>
            </thead>
            <tbody>
              {allObat.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light" ? "text-slate-600" : "text-white")
                      }
                    >
                      {item.nama_obat}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.stok}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {/* <i className="fas fa-circle text-teal-500 mr-2"></i> on */}
                    {item.category}
                  </td>
            
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
