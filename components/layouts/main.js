import Head from 'next/head'
import {Box, Container} from "@chakra-ui/react";
import Navbar from "../navbar";



const Main = ({children , router}) =>{

    return(

        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <title>Alex Zamolotskikh - Homepage</title>

            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>

                {children}
            </Container>

        </Box>

    )
}

export default Main