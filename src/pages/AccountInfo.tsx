import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AccountInfo = () => {
    return (
        <Box>
            <Text>Account Info Page</Text>
            <Link to="/">Go to Home</Link><br />
            <Link to="/account/1">Go to Account 1</Link>
        </Box>
    )
}

export default AccountInfo;