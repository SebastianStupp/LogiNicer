export async function getArticles() {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  console.log(articles);
  return articles;
}

export async function postArticle(articlenumber, client, bbd, pzn, ean) {
  const response = await fetch('/api/articles/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ articlenumber, client, bbd, pzn, ean }),
  });
  const createArticle = await response.json();
  return createArticle;
}
