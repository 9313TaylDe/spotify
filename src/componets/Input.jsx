import { useState } from "react";

const Input = ({ border, placeholder }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          border: border || "2px solid red", // Se 'border' não for passado, use o valor padrão
        }}
      />
    </>
  );
};

export default Input;
