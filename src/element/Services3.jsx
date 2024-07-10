import React, { useContext } from "react";
import { service2 } from "../data/localData";
import { Link } from "react-router-dom";
import { context } from "../context/ContextProvider";

function Services3() {
  const { setService } = useContext(context);

  return (
    <div className="bg-[#E00A0A] relative flex flex-col items-start p-3 rounded-2xl shadow-lg shadow-gray-600 h-[300px] w-[200px]">
      <div className="absolute top-0 p-2 flex flex-col gap-5 text-sm">
        {service2.map((item) => (
          <Link onClick={() => setService(false)} key={item.id} to={item.paths}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services3;
