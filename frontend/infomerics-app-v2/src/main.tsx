import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from '@mui/material';
import { theme } from './themes/AppTheme';

import { PublicRouter } from './routers/Public';
import PrivateRouter from './routers/Private';

import './index.css';
import './custom-mui.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <PublicRouter />
          <PrivateRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
