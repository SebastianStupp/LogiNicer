import styled from '@emotion/styled';
import React from 'react';

const Dropdown = styled.select`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  min-width: 254px;
  min-height: 34px;
  font-size: 1.3rem;
`;

const options = ['Example One', 'Example Two', 'Example Three', 'Example Four'];

const CreateOptions = () => {
  return options.map((options) => <option key={options}>{options}</option>);
};

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
      <CreateOptions></CreateOptions>
    </Dropdown>
  );
}
