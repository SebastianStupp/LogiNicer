import React from 'react';
import { patchClient } from '../api/clients';

export default function usePatchClient() {
  const [clientName, setClientName] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doPatchClient(clientId, clientname) {
    try {
      const clientName = await patchClient(clientId, clientname);
      setClientName(clientName);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ clientName, error, loading }, doPatchClient];
}
