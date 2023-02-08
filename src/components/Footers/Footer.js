import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="py-10" style={{ backgroundColor: "#3F3A3A" }}>
          <h2 className="text-center text-white text-xl font-normal">
            Copyright © {new Date().getFullYear()}{" "}
          </h2>
        </div>
      </footer>
    </>
  );
}
