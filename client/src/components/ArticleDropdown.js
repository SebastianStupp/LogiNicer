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

export default function ArticleDropdown({ optionTitle, value, onChange }) {
  const [{ articles, loading, error }] = useGetArticles();

  const handleChange = (event) => {
    const article = articles.find(
      (article) => article.articleNumber === event.target.value
    );
    onChange(article);
  };

  return (
    <DropdownSelection
      value={value ? value.articleNumber : ''}
      onChange={handleChange}
    >
      <option value="" defaultValue disabled>
        {optionTitle}
      </option>
      {loading && 'loading...'}
      {error && 'Fehler'}
      {articles &&
        articles.map((data) => (
          <option value={data.articleNumber} key={data._id}>
            {data.articleNumber}
          </option>
        ))}
    </DropdownSelection>
  );
}
ArticleDropdown.propTypes = {
  optionTitle: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
};
