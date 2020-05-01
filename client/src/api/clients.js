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

export async function postClient(clientname) {
  const response = await fetch('/api/clients/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clientname }),
  });
  const createClient = await response.json();
  return createClient;
}

export async function patchClient(clientId, clientname) {
  const response = await fetch(`/api/clients/${clientId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ clientname }),
  });
  const createClient = await response.json();
  return createClient;
}
