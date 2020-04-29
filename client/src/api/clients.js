export async function getClients() {
  const response = await fetch('/clients');
  const clients = await response.json();
  return clients;
}

export async function deleteClient(clientId) {
  const response = await fetch(`/clients/${clientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const deletedClient = await response.json();
  return deletedClient;
}
