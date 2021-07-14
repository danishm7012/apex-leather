import React from "react";

const Input = ({ Label, type, name, placeholder, required }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          {Label} <span className="text-danger">{required}</span>
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </div>
  );
};

// Input.defaultProps = {
//   required: "*",
// };

export default Input;
