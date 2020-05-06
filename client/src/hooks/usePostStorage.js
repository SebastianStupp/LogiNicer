import React from 'react';
import { postStorage } from '../api/storages';

export default function usePostClient() {
  const [storage, setStorage] = React.useState(null);
  const [errorStorage, setErrorStorage] = React.useState(false);
  const [loadingStorage, setLoadingStorage] = React.useState(true);

  async function doPostStorage(storageValue) {
    try {
      const storage = await postStorage(storageValue);
      setStorage(storage);
    } catch (errormsg) {
      setErrorStorage(true);
    } finally {
      setLoadingStorage(false);
    }
  }

  return [{ storage, errorStorage, loadingStorage }, doPostStorage];
}
