import Link from 'next/link'

import { Text,Box , useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: top;
  
  height: 30px;
  line-height: 20px;
  transition: 200ms ease;
  &:hover {
    transform: scale(1.2)
  }
`

const Logo = () => {


    return (
        <Link href="/" scroll={false} legacyBehavior >
            <a>
                <LogoBox >
                    <Box
                        borderColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        borderWidth={3}
                        borderStyle="solid"
                        w="30px"
                        h="30px"
                        display="inline-block"
                        borderRadius="full"
                        overflow='hidden'


                    >
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight="bold"
                        align="top"
                        mt={0.4}
                        mr={0.99}

                    >AZ
                    </Text>
                    </Box>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo