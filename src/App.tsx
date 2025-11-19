import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { LoginCard } from "./components/Card"

function App() {
  return (
    <Layout>
    <ChakraProvider>
      <LoginCard id="Log In" email="email" password="password" />
    </ChakraProvider>
    </Layout>
  );
}

export default App;
