import React from "react";
import { InputComponent } from "../../styeledComponent";
import PropTypes from "prop-types";
import "./input.css";
const Input = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  errMsg,
  className
}) => {
  return (
    <div style={{ width: "100%" }}>
      <InputComponent
        type={type}
        name={name}
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        required
      />
      <span className="err-msg">{errMsg}</span>
    </div>
  );
};

Input.defaultProps = {
  errMsg: ""
};

// Checking for the value of the props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errMsg: PropTypes.string,
  value: PropTypes.string
};

export default Input;
