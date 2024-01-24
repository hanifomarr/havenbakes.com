import React from "react";

const ranting = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Ranting = () => {
  return (
    <>
      {ranting.map(() => (
        <div className="flex items-center mt-2 h-4 w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FDCC0D"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 .75a.75.75 0 0 1 .592.284l1.902 2.469 4.527.698a.75.75 0 0 1 .416 1.279l-3.45 3.361.815 4.747a.75.75 0 0 1-1.088.791L8 12.347l-4.268 2.244a.75.75 0 0 1-1.088-.79l.815-4.748-3.45-3.36a.75.75 0 0 1 .416-1.28l4.526-.698L7.407.034A.75.75 0 0 1 8 .75z" />
          </svg>
        </div>
      ))}
    </>
  );
};

export default Ranting;
