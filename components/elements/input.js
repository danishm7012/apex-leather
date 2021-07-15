import React from "react";

const Input = ({
  Label,
  type,
  name,
  placeholder,
  required,
  onChange,
  onBlur,
  value,
}) => {
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
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </div>
  );
};

// Input.defaultProps = {
//   required: "*",
// };

export default Input;
