export async function getArticles() {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  return articles;
}

export async function postArticle(articleNumber, client, bbd, pzn, ean) {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ articleNumber, client, bbd, pzn, ean }),
  });
  const createdArticle = await response.json();
  return createdArticle;
}

export async function deleteArticle(articleId) {
  const response = await fetch(`/api/articles/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const deletedArticle = await response.json();
  return deletedArticle;
}

export async function patchArticle(
  articleId,
  articleNumber,
  client,
  bbd,
  pzn,
  ean
) {
  const response = await fetch(`/api/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ articleNumber, client, bbd, pzn, ean }),
  });
  const patchedArticle = await response.json();
  return patchedArticle;
}
