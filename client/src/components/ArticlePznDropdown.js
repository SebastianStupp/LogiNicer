import styled from '@emotion/styled';
import React from 'react';
import useGetArticles from '../hooks/useGetArticles';
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

export default function ArticleDropdown({ optionTitle, onContentChange }) {
  const [dropdownValue, setDropdownValue] = React.useState('');
  const [{ articles, loading, error }] = useGetArticles();
  React.useEffect(() => {
    if (dropdownValue) {
      onContentChange(dropdownValue);
    }
  }, [dropdownValue, onContentChange]);

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
      {articles &&
        articles.map((data) => (
          <option value={data.pzn} key={data._id}>
            {data.pzn}
          </option>
        ))}
      ;
    </DropdownSelection>
  );
}
ArticleDropdown.propTypes = {
  optionTitle: PropTypes.string,
  onContentChange: PropTypes.func,
};
