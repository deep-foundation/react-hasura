import { IApolloClient } from '@deepcase/hasura/client';
import { useApolloClient as _useApolloClient } from '@apollo/react-hooks';

export function useApolloClient(): IApolloClient<any> {
  return _useApolloClient();
}
