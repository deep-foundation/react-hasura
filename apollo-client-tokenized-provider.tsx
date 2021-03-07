import React, { memo, useMemo, FC } from 'react';
import { ApolloClientRegenerator as _ApolloClientRegenerator } from './apollo-client-regenerator';
import { useToken } from './token-context';

export interface IApolloClientTokenizedProvider<T> {
  children?: any;
  options?: any;
  ApolloClientRegenerator?: FC;
  ApolloClientRegeneratorProps?: any;
}

export const ApolloClientTokenizedProvider = memo<IApolloClientTokenizedProvider<any>>(function ApolloClientTokenizedProvider({
  children = null,
  options = null,
  ApolloClientRegenerator = _ApolloClientRegenerator,
  ApolloClientRegeneratorProps = null,
}: IApolloClientTokenizedProvider<any>) {
  const token = useToken();
  const memoOptions = useMemo(() => ({ ...ApolloClientRegeneratorProps?.options, ...options, token }), [options, ApolloClientRegeneratorProps, token]);
  return <ApolloClientRegenerator {...ApolloClientRegeneratorProps} options={memoOptions}>{children}</ApolloClientRegenerator>
});
