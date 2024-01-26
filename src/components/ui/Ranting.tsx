import React from "react";
import { FaStar } from "react-icons/fa";

const ranting = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Ranting = () => {
  return (
    <>
      {ranting.map((item, index) => (
        <div key={item.id} className="flex items-center mt-2 h-4 w-4">
          <FaStar key={index} color="#FDCC0D" />
        </div>
      ))}
    </>
  );
};

export default Ranting;
