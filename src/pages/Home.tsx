import { Box, Center, Input, Text } from "@chakra-ui/react";
import { LoginCard } from "../components/Card";
import { SButton } from "../components/SButton";
import { login } from "../services/login";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface IUserData {
  email: string;
  password: string;
  Name: string;
}

const Home = () => {
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
            <LoginCard>
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
            </LoginCard>
        </Box>
    )
}

export default Home;