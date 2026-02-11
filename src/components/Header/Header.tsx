import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../AppContext';
import {Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false);
    navigate('/')
  }
  return(
    <Flex backgroundColor="#807215" padding='5px' alignItems='center'>
      <Box>
        <Center>
          <Text fontFamily="Arial, sans-serif" fontSize="3xl" color="#171400">
            🏦 DIO Bank 🏦
          </Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={logout}>Logout</Button>
          </>
        )
      }
    </Flex>
  )
}
