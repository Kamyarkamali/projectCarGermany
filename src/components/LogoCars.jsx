import React from "react";

import { logocars } from "../data/localData";

function LogoCars() {
  return (
    <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-4">
      {logocars.map((image) => (
        <img
          key={image.id}
          src={image.image}
          alt="logoCars"
          className="md:w-[157px] w-[90px]"
        />
      ))}
    </div>
  );
}

export default LogoCars;
