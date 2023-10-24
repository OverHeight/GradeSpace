import React from "react";

export const TextInput = (onChange, name, type) => {
  return (
    <input
      className="w-full focus:outline-none bg-neutral-100 border-b-2 px-2 rounded-t-sm"
      onChange={onChange}
      type={type}
      name={name}
    />
  );
};
