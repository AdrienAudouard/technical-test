import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from 'components/App'

import 'styles/index.scss'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
)
