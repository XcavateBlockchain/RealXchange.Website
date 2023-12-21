'use client';

import { initializeKiltExtensionAPI } from '@kiltprotocol/kilt-extension-api';
import { createContext, useContext } from 'react';

if (typeof window !== 'undefined') {
  initializeKiltExtensionAPI();
}
// const { kilt } = typeof window !== 'undefined' ? window : {};
const SporranContext = createContext<any | null>(null);

export function useSporranContext() {
  return useContext(SporranContext);
}

export interface PageProps {
  children?: React.ReactNode;
}

export default function SporranContextProvider({ children }: PageProps) {
  return <SporranContext.Provider value={{}}>{children}</SporranContext.Provider>;
}
