import Layout from "../components/layouts/articleList";
import {Box, Button, Container, Heading, Image, Link, useColorModeValue} from "@chakra-ui/react";

import Section from "../components/section";
import {  IoLogoGithub } from 'react-icons/io5'


const Page = () =>(
    <Layout title="Contact Me">
        <Container>
            <Box display={{md:'flex'}} mt={{md:6}} >
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6}}
                    mr={{md:6}}
                    textAlign="center"
                >
                    <Box
                        borderColor={useColorModeValue('#553C9A','pink')}
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow='hidden'
                    >
                        <Image
                            src="/images/me.jpeg"
                            alt="Profile image"
                            borderRadius='full'
                            width="100%"
                            height="100%"

                        />
                    </Box>
                </Box>
                <Box flexGrow={1} alignItems="center">
                    <Heading as="h1" variant="page-title" color={useColorModeValue('#553C9A','pink')} >
                        Alex Zamolotskikh
                    </Heading>
                    <p>Full Stack Developer</p>
                </Box>
            </Box>
            <Heading variant="section-title" textAlign="center" fontSize={35} mb={4} color={useColorModeValue('#553C9A','pink')}>
                Contact Me
            </Heading>
            <Section>
                <Box w="100%" textAlign="center"
                     borderWidth="3px"
                     borderColor={useColorModeValue('black','white')}
                     borderRadius="lg"
                     overflow="hidden"

                     p={3}>
                    <Link href="https://github.com/zampilled"
                    >
                    <Button
                        size={"xlg"}
                        fontSize="40px"
                        variant="outline"
                        borderWidth={"5px"}
                        borderColor={useColorModeValue('#553C9A','pink')}
                        color={useColorModeValue('#553C9A','pink')} leftIcon={<IoLogoGithub/>}>@Zampilled</Button>
                    </Link>
                </Box>

            </Section>
            
        </Container>
    </Layout>
)

export default Page
