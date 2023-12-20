'use client';

import {
  initializeKiltExtensionAPI,
  watchExtensions,
  getExtensions,
  Types
} from 'kilt-extension-api';
import { createContext, useContext, useEffect, useState } from 'react';

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
