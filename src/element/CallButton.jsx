import React from "react";
import { FiPhoneCall } from "react-icons/fi";

function CallButton() {
  return (
    <div>
      <a
        href="tel:در اینجا شماره تماس قرار داده شود"
        className="bg-green-500 p-3 rounded-full inline-block"
      >
        <FiPhoneCall size={22} color="white" />
      </a>
    </div>
  );
}

export default CallButton;
