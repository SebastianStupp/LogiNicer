import React from 'react';
import { patchArticle } from '../api/articles';

export default function usePatchArticle() {
  const [article, setArticle] = React.useState(null);
  const [errorArticle, setErrorArticle] = React.useState(false);
  const [loadingArticle, setLoadingArticle] = React.useState(true);

  async function doPatchArticle(
    articleId,
    articleNumber,
    client,
    bbd,
    pzn,
    ean
  ) {
    try {
      const article = await patchArticle(
        articleId,
        articleNumber,
        client,
        bbd,
        pzn,
        ean
      );
      setArticle(article);
    } catch (errorArticle) {
      setErrorArticle(true);
    } finally {
      setLoadingArticle(false);
    }
  }

  return [{ article, errorArticle, loadingArticle }, doPatchArticle];
}
