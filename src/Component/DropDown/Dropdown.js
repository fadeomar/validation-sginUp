import React from "react";
import PropTypes from "prop-types";
import {
  Select,
  Option,
  Description,
  Label,
  SelectContainer
} from "../../styeledComponent";

const Dropdown = ({ labelText, name, options, value, ...rest }) => {
  return (
    <SelectContainer>
      <Label>
        <Description>{labelText}</Description>
        <Select name={name} aria-label={labelText} value={value} {...rest}>
          {options.map((option, id) => {
            return (
              <Option key={id} value={option}>
                {option}
              </Option>
            );
          })}
        </Select>
      </Label>
    </SelectContainer>
  );
};

Dropdown.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
