export async function getArticleStock() {
  const response = await fetch('/api/articleStock');
  const articleStock = await response.json();
  return articleStock;
}

export async function postArticleStock(
  clientId,
  articleId,
  stock,
  storageId,
  bbd,
  pzn,
  ean
) {
  const response = await fetch('/api/articleStock/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      clientId,
      articleId,
      stock,
      storageId,
      bbd,
      pzn,
      ean,
    }),
  });
  const createdArticleStock = await response.json();
  return createdArticleStock;
}
