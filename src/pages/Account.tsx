import { Box, Center, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";


interface IUserData {
    Name: string;
    balance: number;
    id: number;
  }
  

const Account = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [userData, SetUserData] = useState<null | IUserData>();
    
    const { isLoggedIn }  = useContext(AppContext)

    useEffect(() => {
      if (!isLoggedIn) navigate('/')
    }, [isLoggedIn, navigate])
  
    useEffect(() => {
      const getData = async () => {
        const data: any | IUserData = await api 
        SetUserData(data as IUserData)
      }
    
      getData()
    
    }, [])

    if(userData && id && Number(id) !== userData.id){
        navigate('/')
    }
    
    const balance = userData?.balance || 0;

    // Format as USD
    const formattedBalance = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(balance);
    
    const currentDay = new Date();

    // Full date and time
    const cDayformatted = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(currentDay);

    const cHourformatted = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(currentDay);

    return (
            <Box minHeight='100vh' backgroundColor='#060010' padding='25px'>
                  <Box backgroundColor='#191919'  padding='15px' >
                    <Center mb="20px" >
                    <Text fontSize="2xl" fontWeight="bold" color="#bca643">
                      My Account
                    </Text>
                    </Center>
                    <Text color="#bca643">Welcome <Text as="span" fontWeight="bold" color="white">{userData?.Name}</Text> !</Text>
                    <Text color="#bca643">Your Current Balance is: <Text as="span" fontWeight="bold" color="white">{formattedBalance}</Text></Text>
                    <Text color="#bca643" mt="2">Current date (M/D/Y): <Text as="span" fontWeight="bold" color="white">{cDayformatted}</Text></Text>
                    <Text color="#bca643">Current time (h:m:s): <Text as="span" fontWeight="bold" color="white">{cHourformatted}</Text></Text>
                    <ChakraLink as={RouterLink} to="/accountinfo" color="#eae4c6" mt={4} display="inline-block" fontSize="12px">Account Info</ChakraLink>
                </Box>
            </Box>
    )
}

export default Account;