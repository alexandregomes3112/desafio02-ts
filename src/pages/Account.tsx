import { Box, Center, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Link, useNavigate, useParams } from "react-router";
import { AppContext } from "../components/AppContext";


interface IUserData {
    Name: string;
    balance: number;
    id: number;
  }
  
  // AccountCard removed — unused. Account component below handles data fetching.

const Account = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [userData, SetUserData] = useState<null | IUserData>();
    
    const { isLoggedIn }  = useContext(AppContext)
    // console.log('account page', isLoggedIn);

    !isLoggedIn && navigate('/')
  
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
                    <Text fontSize="2xl" fontWeight="normal" color="#bca643">
                      My Account
                    </Text>
                    </Center>
                    <p style={{ color: "#bca643" }}>Welcome <b style={{ color: "white" }}>{userData?.Name}</b> !</p>
                    <p style={{ color: "#bca643" }}>Your Current Balance is: <b style={{ color: "white" }}>{formattedBalance}</b></p>
                    <p style={{ color: "#bca643", marginTop: "10px" }}>Current date: <b style={{ color: "white" }}>{cDayformatted}</b></p>
                    <p style={{ color: "#bca643" }}>Current time: <b style={{ color: "white" }}>{cHourformatted}</b></p>
                    <Link to="/">
                        <p style={{ color: "#bca643", marginTop: "20px", fontSize: "12px" }}>Go to Home</p>
                    </Link>
                    <Link to="/accountinfo">
                        <p style={{ color: "#bca643", marginTop: "20px", fontSize: "12px" }}>Account Info</p>
                    </Link>
                </Box>
            </Box>
    )
}

export default Account;