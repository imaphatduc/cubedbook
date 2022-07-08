import type { AppProps } from 'next/app';

import { NodesProvider } from '../contexts/NodesContext';
import { CubedProvider } from '../contexts/CubedContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CubedProvider>
      <NodesProvider>
        <Component {...pageProps} />
      </NodesProvider>
    </CubedProvider>
  );
}

export default MyApp;
