import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import App from './App';
import { Wallet as WalletProvider } from './components';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 60 } },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{ removeDefaultsFromUrl: true }}
      >
        <QueryClientProvider client={queryClient}>
          <WalletProvider>
            <App />
          </WalletProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </BrowserRouter>
  </StrictMode>,
);
