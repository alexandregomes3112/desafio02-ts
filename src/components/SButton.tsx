import { Button } from "@chakra-ui/react"

interface IDButton {
  onClick: () => void;
}

export const SButton = ({ onClick }: IDButton) => {
  return (
    <Button 
      onClick={onClick}
      bg={'#807215'}
      size='sm' 
      width='50%'
      _hover={{ bg: '#ccc6a1' }}
      >
        Login
    </Button>
  )
}