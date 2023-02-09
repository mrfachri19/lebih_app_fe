import React, { useState } from "react";
import Modal from ".";
import { Info24Regular } from "@fluentui/react-icons";

export default function SuccessModal({isShow}) {
  return (
    <>
      <Modal closeModal={isShow}>
        <div className="relative my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-e3 relative px-12 flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="text-center mt-8 font-bold text-green-500 text-2xl">
              <span className="pr-5">
                <Info24Regular color="#38B2AC" />
              </span>
              Pembatalan permohonan berhasil dilakukan !
            </div>

            <div className="w-full mb-8 grid justify-items-center">
              <button
                type="button"
                className=" bg-green-600 w-32 h-9 px-2 py-1 rounded-lg"
              >
                <span className="text-white font-bold text-base">OK</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
