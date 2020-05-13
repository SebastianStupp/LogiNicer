import React from 'react';
import { postArticleStock } from '../api/articleStock';

export default function usePostArticleStock() {
  const [articleStock, setArticleStock] = React.useState(null);
  const [errorArticleStock, setErrorArticleStock] = React.useState(false);
  const [loadingArticleStock, setLoadingArticleStock] = React.useState(true);

  async function doPostArticleStock(
    clientId,
    articleId,
    stock,
    storageId,
    bbd,
    pzn,
    ean
  ) {
    try {
      const articleStock = await postArticleStock(
        clientId,
        articleId,
        stock,
        storageId,
        bbd,
        pzn,
        ean
      );
      setArticleStock(articleStock);
    } catch (errorArticleStock) {
      setErrorArticleStock(true);
    } finally {
      setLoadingArticleStock(false);
    }
  }

  return [
    { articleStock, errorArticleStock, loadingArticleStock },
    doPostArticleStock,
  ];
}
