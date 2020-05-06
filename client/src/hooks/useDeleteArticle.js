import React from 'react';
import { deleteArticle } from '../api/articles';

export default function useDeleteClient(articleId) {
  const [deletedArticle, setDeletedArticle] = React.useState(null);
  const [errorArticle, setErrorArticle] = React.useState(false);
  const [loadingArticle, setLoadingArticle] = React.useState(true);

  async function doDeleteArticle() {
    try {
      setLoadingArticle(true);
      const deletedArticle = await deleteArticle(articleId);
      setDeletedArticle(deletedArticle);
    } catch (error) {
      setErrorArticle(true);
    } finally {
      setLoadingArticle(false);
    }
  }

  return [{ deletedArticle, errorArticle, loadingArticle }, doDeleteArticle];
}
