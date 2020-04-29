import React from 'react';
import { postClient } from '../api/clients';

export default function usePostClient() {
  const [client, setClient] = React.useState(null);
  const [errormsg, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doPostClient(name) {
    try {
      const client = await postClient(name);
      setClient(client);
    } catch (errormsg) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ client, errormsg, loading }, doPostClient];
}
