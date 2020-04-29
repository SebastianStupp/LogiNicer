export async function getClients() {
  const response = await fetch('/api/clients');
  const clients = await response.json();
  return clients;
}

export async function deleteClient(clientId) {
  const response = await fetch(`/api/clients/${clientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const deletedClient = await response.json();
  return deletedClient;
}

export async function postClient(name) {
  const response = await fetch('/api/clients/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clientname: name }),
  });
  const createClient = await response.json();
  return createClient;
}
