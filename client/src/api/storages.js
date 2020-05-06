export async function getStorages() {
  const response = await fetch('/api/storages');
  const storages = await response.json();
  return storages;
}

export async function deleteStorage(storageId) {
  const response = await fetch(`/api/storages/${storageId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const deletedStorage = await response.json();
  return deletedStorage;
}

export async function postStorage(storage) {
  const response = await fetch('/api/storages/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ storage }),
  });
  const createStorage = await response.json();
  return createStorage;
}

export async function patchStorage(storageId, storage) {
  const response = await fetch(`/api/clients/${storageId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ storage }),
  });
  const patchStorage = await response.json();
  return patchStorage;
}
