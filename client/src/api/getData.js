export async function getClient() {
  const clientList = await fetch('/get/client');
  const response = await clientList.json();
  const client = response.map((client) => client.clientname);
  return client;
}
