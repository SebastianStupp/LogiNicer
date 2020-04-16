import styled from '@emotion/styled';
import React from 'react';

const Dropdown = styled.select`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  min-width: 254px;
  min-height: 34px;
`;

export default function DefaultDropdown() {
  const [dropdownValue, setdropdownValue] = React.useState('');

  const handleChange = (event) => {
    setdropdownValue(event.target.value);
  };

  return (
    <Dropdown value={dropdownValue} onChange={handleChange}>
      <option value="" defaultValue disabled>
        Choose Example
      </option>
      <option value="Example One">Example One</option>
      <option value="Example Two">Example Two</option>
      <option value="Example Three">Example Three</option>
      <option value="Example Four">Example Four</option>
    </Dropdown>
  );
}
