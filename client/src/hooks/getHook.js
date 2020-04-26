import React from 'react';
import { getClient } from '../api/getData';

export default function useGetClients() {
  const [clients, setClient] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doGetClients() {
    try {
      const clientList = await getClient();
      setClient(clientList);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doGetClients();
  }, []);

  return [{ clients, error, loading }];
}
