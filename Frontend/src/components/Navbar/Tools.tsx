import { Box, BoxProps } from '@chakra-ui/react'
import { LiaToolsSolid } from 'react-icons/lia'

interface Props extends BoxProps {}

const Tools = (props: Props) => {
  return (
    <Box {...props}>
        <LiaToolsSolid size={"full"} color="#009688" />
    </Box>
  )
}

export default Tools