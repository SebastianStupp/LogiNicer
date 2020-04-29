import React from 'react';
import { deleteClient } from '../api/clients';

export default function useDeleteClient(clientId) {
  const [deletedClient, setDeletedClient] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doDeleteClient() {
    try {
      setLoading(true);
      const deletedClient = await deleteClient(clientId);
      setDeletedClient(deletedClient);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ deletedClient, error, loading }, doDeleteClient];
}
