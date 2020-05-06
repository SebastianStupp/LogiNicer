import React from 'react';
import { patchStorage } from '../api/storages';

export default function usePatchStorage() {
  const [storageName, setStorageName] = React.useState(null);
  const [errorStorage, setErrorStorage] = React.useState(false);
  const [loadingStorage, setLoadingStorage] = React.useState(true);

  async function doPatchStorage(storageId, storage) {
    try {
      const storageName = await patchStorage(storageId, storage);
      setStorageName(storageName);
    } catch (errormsg) {
      setErrorStorage(true);
    } finally {
      setLoadingStorage(false);
    }
  }

  return [{ storageName, errorStorage, loadingStorage }, doPatchStorage];
}
