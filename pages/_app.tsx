import ThemeContext from '@/components/plasmic/17_sds_foundation_global/PlasmicGlobalVariant__Theme';
import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { DataProvider } from '@plasmicapp/react-web/lib/host';
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DataProvider 
    name='darkModeData'
    data={{
      darkMode,
      toggleDarkMode
    }}
    >
      <ThemeContext.Provider value={darkMode ? "dark" : undefined}>
    <PlasmicRootProvider Head={Head} Link={Link}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
    </ThemeContext.Provider>
    </DataProvider>
  );
}
