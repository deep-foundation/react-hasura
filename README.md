[![npm](https://img.shields.io/npm/v/@deep-foundation/react-hasura.svg)](https://www.npmjs.com/package/@deep-foundation/react-hasura)
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/react-hasura) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

# Usage
## Library
See [Documentation] for examples and API

## usage

import providers and hooks
```tsx
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
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

[Documentation]: https://deep-foundation.github.io/react-hasura/

## Maintenance

### Refresh package-lock.json

This command deletes `node_modules`, `package-lock.json` and runs `npm i`. So everything is refreshed.

```bash
npm run package:refresh
```

### Release a new version

```bash
npm run package:release
```

After that it might be required to release new versions of:
1. https://github.com/deep-foundation/deeplinks

