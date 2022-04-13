import { motion } from 'framer-motion'
import Head from 'next/head'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title ,href ,thumbnail}) => (
    <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
        <>
            {title && (
                <Head>
                    <title>Alex Zamolotskikh - {title}</title>
                </Head>
            )}
            {children}


            <Box w="100%" textAlign="center">
                <NextLink href={`/projects/`} scroll={false}>
                    <LinkBox cursor="pointer">
                        <Image
                            src={thumbnail}
                            alt={title}
                            className="grid-item-thumbnail"
                            placeholder="blur"
                        />
                        <LinkOverlay href={`/projects/`}>
                            <Text mt={2} fontSize={20}>
                                {title}
                            </Text>
                        </LinkOverlay>
                        <Text fontSize={14}>{children}</Text>
                    </LinkBox>
                </NextLink>
            </Box>
        </>
    </motion.article>
)

export default Layout