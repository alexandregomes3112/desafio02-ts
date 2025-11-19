import { Button } from "@chakra-ui/react"
import { login } from "../services/login"

export const Send = () => {
  return (
    <Button 
    onClick={login} 
    bg={'#807215'}
    size='sm' 
    width='50%'>
        Login
    </Button>
  )
}