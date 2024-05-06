import NextLink from 'next/link'

import {Box, Text, LinkBox, LinkOverlay, Image , useColorModeValue} from '@chakra-ui/react'

export const GridThing = ({ children, id, title, image }) => (
    <Box w="100%" textAlign="center"
         borderWidth="3px"
         borderColor={useColorModeValue('#553C9A','pink')}
         overflow="hidden"
    borderRadius="lg">
        <NextLink href={`/projects/${id}`}
                  scroll={false}
                  legacyBehavior

        >
            <LinkBox cursor="pointer">
                <Image
                    src={image}
                    alt="Project image"

                />


                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={25} fontWeight="bold">
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14} mt={2} mb={2}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)
