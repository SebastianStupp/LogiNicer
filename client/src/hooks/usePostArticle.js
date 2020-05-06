import React from 'react';
import { postArticle } from '../api/articles';

export default function usePostClient() {
  const [article, setArticle] = React.useState(null);
  const [errorArticle, setError] = React.useState(false);
  const [loadingArticle, setLoadingArticle] = React.useState(true);

  async function doPostArticle(articleNumber, client, bbd, pzn, ean) {
    try {
      const article = await postArticle(articleNumber, client, bbd, pzn, ean);
      setArticle(article);
    } catch (errormsg) {
      setError(true);
    } finally {
      setLoadingArticle(false);
    }
  }

  return [{ article, errorArticle, loadingArticle }, doPostArticle];
}
