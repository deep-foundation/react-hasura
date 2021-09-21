import React, { memo, useState, useMemo, useEffect, useRef, useContext, useCallback } from 'react';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { generateApolloClient, IApolloClientGeneratorOptions } from '@deepcase/hasura/client';

export interface IApolloClientRegenerator {
  options: IApolloClientGeneratorOptions;
  children?: any;
  useStateApolloClient?: (defaultValue: ApolloClient<any>) => [ApolloClient<any>, (apolloClient: ApolloClient<any>) => any];
  regenerateApolloClient?: (options: IApolloClientGeneratorOptions) => ApolloClient<any>;
}

export const defaultRegenerateApolloClient = (options: IApolloClientGeneratorOptions): ApolloClient<any> => {
  if (!generateApolloClient) throw new Error("!generateApolloClient");
  return generateApolloClient(options);
};

interface IApolloClientGeneratorContext {
  regenerate: () => any;
}

export const ApolloClientRegeneratorContext = React.createContext<IApolloClientGeneratorContext>({ regenerate: () => {} });

export function useApolloClientRegenerator() {
  return useContext(ApolloClientRegeneratorContext);
}

/**
 * Recreate ApolloClient on mount, and on each token or options changes. Make sure you memo it and dont update options object without need.
 */
export const ApolloClientRegenerator = memo<IApolloClientRegenerator>(function ApolloClientRegenerator({
  options,
  children = null,
  useStateApolloClient = useState,
  regenerateApolloClient = defaultRegenerateApolloClient,
}: IApolloClientRegenerator) {
  const initialApolloClient = useMemo(() => regenerateApolloClient(options), []);
  const [apolloClient, setApolloClient] = useStateApolloClient(initialApolloClient);
  const mountedRef = useRef<boolean>(false);
  useEffect(() => {
    if (!mountedRef.current) mountedRef.current = true;
    else setApolloClient(regenerateApolloClient(options));
  }, [options]);
  const context = useMemo(() => ({
    regenerate: () => {
      setApolloClient(regenerateApolloClient(options));
    },
  }), [options]);

  return <ApolloClientRegeneratorContext.Provider value={context}>
    <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
  </ApolloClientRegeneratorContext.Provider>;
});
