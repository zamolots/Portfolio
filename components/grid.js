import NextLink from 'next/link'

import {Box, Text, LinkBox, LinkOverlay, useColorModeValue} from '@chakra-ui/react'

export const GridThing = ({ children, id, title }) => (
    <Box w="100%" textAlign="center"
         borderWidth="3px"
         borderColor={useColorModeValue('#553C9A','pink')}
         p={2}
    borderRadius="lg">
        <NextLink href={`/projects/${id}`}
                  scroll={false}

        >
            <LinkBox cursor="pointer">

                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={25} fontWeight="bold">
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14} mt={2}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)
