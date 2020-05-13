import styled from '@emotion/styled';
import React from 'react';
import useGetClients from '../hooks/useGetClients';
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

export default function ClientDropdown({ optionTitle, onChange, value }) {
  const [{ clients, loading, error }] = useGetClients();

  const handleChange = (event) => {
    const client = clients.find(
      (client) => client.clientname === event.target.value
    );
    onChange(client);
  };
  return (
    <DropdownSelection
      value={value ? value.clientname : ''}
      onChange={handleChange}
    >
      <option value="" defaultValue disabled>
        {optionTitle}
      </option>
      {loading && 'loading...'}
      {error && 'Fehler'}
      {clients &&
        clients.map((data) => (
          <option value={data.clientname} key={data._id}>
            {data.clientname}
          </option>
        ))}
      ;
    </DropdownSelection>
  );
}
ClientDropdown.propTypes = {
  optionTitle: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.object,
};
