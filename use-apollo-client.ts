import { IApolloClient } from '@deep-foundation/hasura/client.js';
import { useApolloClient as _useApolloClient } from '@apollo/client';

export function useApolloClient(): IApolloClient<any> {
  return _useApolloClient();
}
