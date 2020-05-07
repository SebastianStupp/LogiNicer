import styled from '@emotion/styled';
import React from 'react';
import useGetStorages from '../hooks/useGetStorages';
import PropTypes from 'prop-types';

const DropdownSelection = styled.select`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  min-width: 254px;
  min-height: 45px;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 10px;
  text-align-last: center;
`;

export default function StorageDropdown({ optionTitle, onContentChange }) {
  const [dropdownValue, setDropdownValue] = React.useState('');
  const [{ storages, loading, error }] = useGetStorages();

  React.useEffect(() => {
    if (dropdownValue) {
      onContentChange(dropdownValue);
    }
  }, [dropdownValue]);

  const handleChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <DropdownSelection value={dropdownValue} onChange={handleChange}>
      <option value="" defaultValue disabled>
        {optionTitle}
      </option>
      {loading && 'loading...'}
      {error && 'Fehler'}
      {storages &&
        storages.map((data) => (
          <option value={data.storage} key={data._id}>
            {data.storage}
          </option>
        ))}
      ;
    </DropdownSelection>
  );
}
StorageDropdown.propTypes = {
  optionTitle: PropTypes.string,
  onContentChange: PropTypes.func,
};
