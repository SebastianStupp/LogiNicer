export async function getClient() {
  const clientList = await fetch('/client/clients');
  const response = await clientList.json();
  const client = response.map((client) => client.clientname);
  return client;
}
