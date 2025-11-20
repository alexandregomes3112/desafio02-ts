import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import Account from './pages/Account';

function App() {
  
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account/:id' element={<Account />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  
  );
}

export default App;
