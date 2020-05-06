import React from 'react';
import { deleteStorage } from '../api/storages';

export default function useDeleteStorage(storageId) {
  const [deletedStorage, setDeletedStorage] = React.useState(null);
  const [errorStorage, setErrorStorage] = React.useState(false);
  const [loadingStorage, setLoadingStorage] = React.useState(true);

  async function doDeleteStorage() {
    try {
      setLoadingStorage(true);
      const deletedStorage = await deleteStorage(storageId);
      setDeletedStorage(deletedStorage);
    } catch (error) {
      setErrorStorage(true);
    } finally {
      setLoadingStorage(false);
    }
  }

  return [{ deletedStorage, errorStorage, loadingStorage }, doDeleteStorage];
}
