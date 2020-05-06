import React from 'react';
import { getStorages } from '../api/storages';

export default function useGetStorages() {
  const [storages, setStorages] = React.useState(null);
  const [errorStorage, setErrorStorage] = React.useState(false);
  const [loadingStorage, setLoadingStorage] = React.useState(true);

  async function doGetStorages() {
    try {
      const storageList = await getStorages();
      setStorages(storageList);
    } catch (error) {
      setErrorStorage(true);
    } finally {
      setLoadingStorage(false);
    }
  }

  React.useEffect(() => {
    doGetStorages();
  }, []);

  return [{ storages, errorStorage, loadingStorage }, doGetStorages];
}
