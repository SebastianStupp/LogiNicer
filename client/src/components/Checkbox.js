import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxLabel = styled.label`
  color: ${(props) => props.theme.colors.texttertiary};
  font-size: 1.3rem;
  padding: 10px;
`;

const CheckboxInput = styled.input`
  color: #0d3955;
  height: 20px;
  width: 20px;
`;

export default function Checkbox({ option, checked, checkStatus }) {
  return (
    <CheckBoxLabel>
      <CheckboxInput
        type="checkbox"
        onClick={checked}
        defaultChecked={checkStatus}
      />
      {option}
    </CheckBoxLabel>
  );
}

Checkbox.propTypes = {
  option: PropTypes.string,
  checked: PropTypes.func,
  checkStatus: PropTypes.string,
};
