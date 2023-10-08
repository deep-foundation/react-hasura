import React, { createContext, useContext } from 'react';

export const TokenContext = createContext<string | void | null>(null);
export function useToken() {
  return useContext(TokenContext);
};
