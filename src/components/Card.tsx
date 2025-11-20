import { Box, Center, Input, Text } from "@chakra-ui/react"
import { SButton } from "./SButton";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { login } from "../services/login";

interface IUserData {
  email: string;
  password: string;
  Name: string;
}

export const LoginCard = () => {
const [ email, setEmail ] = useState<string>('');
const [ password, setPassword ] = useState<string>('');
const [userData, SetUserData] = useState<null | IUserData>();

useEffect(() => {
  const getData = async () => {
    const data: any | IUserData = await api 
    SetUserData(data as IUserData)
  }

  getData()

}, [])

  return (
    <Box minHeight='100vh' backgroundColor='#060010' padding='25px'>
      
      {/* {
      userData === null || userData === undefined ?
       <h1 style={{ color: "white" }}>Loading ...</h1> :
       <h1 style={{ color: "white" }}>Loaded !</h1>
      } */}
      
      <Box backgroundColor='#191919'  padding='15px' >
        <Center mb="20px" >
        <Text fontSize="2xl" fontWeight="normal" color="#998e43">
          Login
        </Text>
        </Center>
      <p style={{ color: "#998e43" }}>{userData?.Name}</p>
      <Input 
        placeholder="e-Mail"
        type="email"
        marginBottom="10px"
        backgroundColor="#323232"
        color="white"
        borderColor="gray.600"
        _placeholder={{ color: "gray.400" }}
        focusBorderColor="gray.500"
        //value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input 
        placeholder="Password"
        type="password"
        backgroundColor="#323232"
        color="white"
        borderColor="gray.600"
        _placeholder={{ color: "gray.400" }}
        focusBorderColor="gray.500"
        //value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Center marginTop="20px">
        <SButton 
          onClick={() => login(email, password)}
        />
      </Center>
      </Box>
    </Box>
  )
}