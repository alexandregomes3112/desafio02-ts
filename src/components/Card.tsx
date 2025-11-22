import { Box } from "@chakra-ui/react"

export const LoginCard = ({ children }: any) => {

  return (
      <Box backgroundColor='#191919'  padding='15px' >
        { children }
      </Box>
  )
}