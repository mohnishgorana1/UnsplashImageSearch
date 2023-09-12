import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Context.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>    
   
  </AppProvider>
  
)
