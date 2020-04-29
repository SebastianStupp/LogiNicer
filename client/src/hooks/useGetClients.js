import React from 'react';
import { getClients } from '../api/clients';

export default function useGetClients() {
  const [clients, setClients] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doGetClients() {
    try {
      const clientList = await getClients();
      setClients(clientList);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doGetClients();
  }, []);

  return [{ clients, error, loading }, doGetClients];
}
