import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from '@/routers'
import { Provider } from 'react-redux'
import store from '@/store'
import { WithAuthorized } from '@/components/Authorized'
import { SWRConfig } from 'swr'
import { localStorageProvider } from './utils/localStorageProvider'
import FallbackLoading from './components/FallbackLoading'

const App: React.FC = () => {
  return (
    <SWRConfig
      value={{
        provider: localStorageProvider,
        revalidateOnFocus: false,
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <WithAuthorized>
            <Suspense fallback={<FallbackLoading />}>
              <Router />
            </Suspense>
          </WithAuthorized>
        </BrowserRouter>
      </Provider>
    </SWRConfig>
  )
}

export default App
