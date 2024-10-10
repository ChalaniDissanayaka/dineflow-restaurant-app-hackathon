import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Register from './pages/Register';
import Login from './pages/Login';
import GlobalProvider from './GlobalContext';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <Toaster position='bottom-right' />
    </ChakraProvider>
  );
}

export default App;
