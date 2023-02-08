import React from "react";

// components

export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">Maps Poliklinik</h6>
            <button
              className=" bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Maps Poliklinik
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className={"mt-4"}>
            <iframe title='STIE Mahardika' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.951395788114!2d106.84287581455511!3d-6.2701225954616735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f26c7bf4e5fd%3A0x52ec054280886588!2sDitjen%20Bina%20Pemerintahan%20Desa!5e0!3m2!1sid!2sid!4v1672060722230!5m2!1sid!2sid" className={"w-full h-64"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
