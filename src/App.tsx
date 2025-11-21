import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import Account from './pages/Account';
import AccountInfo from './pages/AccountInfo';
import { AppContextProvider } from './components/AppContext';
  
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
