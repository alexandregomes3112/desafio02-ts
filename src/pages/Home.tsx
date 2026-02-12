import { Box, Center, Input, Text } from "@chakra-ui/react";
import { LoginCard } from "../components/Card";
import { SButton } from "../components/SButton";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password);
        if (!loggedIn) {
            return alert("Invalid email or password.");
        }

        setIsLoggedIn(true);
        changeLocalStorage({login: true})
        navigate("/account/1");

    }

    return (
        <Box minHeight='100vh' backgroundColor='#060010' padding='25px'>
            <LoginCard>
                <Center mb="20px" >
                    <Text fontSize="2xl" fontWeight="normal" color="#BCA643">
                        Login
                    </Text>
                </Center>
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
                        onClick={() => validateUser(email, password)}
                        />
                </Center>
            </LoginCard>
        </Box>
    )
}

export default Home;