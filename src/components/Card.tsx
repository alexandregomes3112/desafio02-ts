import { Box, Center, Input, Text } from "@chakra-ui/react"
import { SButton } from "./SButton";
import { login } from "../services/login";

interface LoginCardProps {
  id: string;
  email: string;
  password: string;
}

export const LoginCard = ({ id, email, password }: LoginCardProps) => {
  return (
    <Box minHeight='100vh' backgroundColor='#060010' padding='25px'>
      <Box backgroundColor='#191919'  padding='15px' >
        <Center mb="20px" >
        <Text fontSize="2xl" fontWeight="normal" color="#998e43">
          {id}
        </Text>
        </Center>
      <Input 
        placeholder={email}
        type="email"
        marginBottom="10px"
        backgroundColor="#323232"
        color="white"
        borderColor="gray.600"
        _placeholder={{ color: "gray.400" }}
        focusBorderColor="gray.500"
      />
      <Input 
        placeholder={password}
        type="password"
        backgroundColor="#323232"
        color="white"
        borderColor="gray.600"
        _placeholder={{ color: "gray.400" }}
        focusBorderColor="gray.500"
      />
      <Center marginTop="20px">
        <SButton 
          onClick={login}
        />
      </Center>
      </Box>
    </Box>
  )
}