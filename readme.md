# deepcase react-hasura

[![npm version](https://badge.fury.io/js/%40deepcase%2Freact-hasura.svg)](https://badge.fury.io/js/%40deepcase%2Freact-hasura) [![example](https://badgen.net/badge/example/gh-pages/gray)](https://deepcase.github.io/hasura/) [![develop deepcase](https://badgen.net/badge/develop/deepcase)](https://github.com/deepcase/deepcase)

## usage

import providers and hooks
```tsx
import { TokenProvider, useTokenController } from '@deepcase/deeplinks/imports/react-token';
import { ApolloClientTokenizedProvider } from '@deepcase/react-hasura/apollo-client-tokenized-provider';
```

control token
```tsx
const [token, setToken] = useTokenController();
// you can use any token source after it
```

wrap page
```tsx
// example from envs
export const GRAPHQL_PATH = `${process.env.NEXT_PUBLIC_HASURA_PATH}/v1/graphql`;
export const GRAPHQL_SSL = !!+process.env.NEXT_PUBLIC_HASURA_SSL;

return <TokenProvider>
  <ApolloClientTokenizedProvider options={{ client: 'app-name', path: GRAPHQL_PATH, ssl: !!GRAPHQL_SSL, ws: !!process?.browser }}>
    {children}
  </ApolloClientTokenizedProvider>
</TokenProvider>;
```
