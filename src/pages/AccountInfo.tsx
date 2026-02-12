import { Box, Table, TableContainer, Text, Tr, Td, Link as ChakraLink } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../services/api";

interface IUserData {
    Name: string;
    id: number;
    SSN: string;
    address: string;
    phone: string;
    transactions: { id: number; type: string; amount: number; date: string }[];
    accountType: string;
    openedDate: string;
    lastLogin: string;

}

const AccountInfo = () => {
    const { id } = useParams()
    const [userData, SetUserData] = useState<null | IUserData>();
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

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

    useEffect(() => {
        if (userData && id && Number(id) !== userData.id) {
            navigate('/')
        }
    }, [userData, id, navigate])

    return (
        <Box minHeight='100vh' backgroundColor='#060010' padding='25px'>
            <Text fontSize="2xl" fontWeight="bold" color="#bca643" marginBottom='20px'>Account Info Page</Text>
            <TableContainer>
                <Table variant="unstyled" size="sm" >
                    <tbody>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Name:</Td>
                            <Td color="white">{userData?.Name}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">ID:</Td>
                            <Td color="white">{userData?.id}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">SSN:</Td>
                            <Td color="white">{userData?.SSN}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Address:</Td>
                            <Td color="white">{userData?.address}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Phone:</Td>
                            <Td color="white">{userData?.phone}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Account Type:</Td>
                            <Td color="white">{userData?.accountType}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Opened Date:</Td>
                            <Td color="white">{userData?.openedDate}</Td>
                        </Tr>
                        <Tr _hover={{ backgroundColor: "#1e1927", color: "black" }} transition="0.3s">
                            <Td color="#bca643">Last Login:</Td>
                            <Td color="white">{userData?.lastLogin}</Td>
                        </Tr>
                    </tbody>
                </Table>
            </TableContainer>
            <ChakraLink as={RouterLink} color="#eae4c6" to="/account/1" mt={4} display="inline-block" fontSize="12px">Return to Account Page</ChakraLink>
        </Box>
    )
}

export default AccountInfo;