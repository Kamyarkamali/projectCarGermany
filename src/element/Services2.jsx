import React, { useContext } from "react";
import { services } from "../data/localData";
import { Link } from "react-router-dom";
import { context } from "../context/ContextProvider";

function Services2({ open, setOpen }) {
  const { service, setService } = useContext(context);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      className="bg-[#E00A0A] relative flex flex-col items-start p-3 rounded-2xl shadow-lg shadow-gray-600 h-[300px] w-[200px]"
    >
      <div className="absolute top-0 p-2 flex flex-col gap-5 text-sm">
        {services.map((item) => (
          <Link key={item.id} to={item.path}>
            <span onClick={() => setService(false)}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services2;
