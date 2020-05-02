import React from 'react';
import { getArticles } from '../api/articles';

export default function useGetArticles() {
  const [articles, setarticles] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doGetArticles() {
    try {
      const articleList = await getArticles();
      console.log(articleList);
      setarticles(articleList);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doGetArticles();
  }, []);

  return [{ articles, error, loading }, doGetArticles];
}
