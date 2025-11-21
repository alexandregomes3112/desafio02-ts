import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, ReactNode } from 'react';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import Account from './pages/Account';
import AccountInfo from './pages/AccountInfo';
  
export const AppContext = createContext({});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

function App() {
  
  return (
    <BrowserRouter>
      <AppContextProvider>  
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/account/:id' element={<Account />} />
              <Route path='/account/info' element={<AccountInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
  
</BrowserRouter>
  
  );
}

export default App;
