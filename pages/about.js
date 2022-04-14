import {
    Container,
    Heading,
    Box,
    chakra,
    Image,
    Text,
    Badge,
    useColorModeValue, Button, SimpleGrid, Link,
} from "@chakra-ui/react";
import LSection from "../components/lsection";
import RSection from "../components/rsection";
import NextLink from "next/link";
import Layout from "../components/layouts/articleList";

import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";

import React from "react";

const About = () => {

    return(
        <Layout title="About Me"
        >


        <Container >
            <Box >
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

            <RSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title"  color={useColorModeValue('#553C9A','pink')}>
                        About me
                    </Heading>
                    <Container>
                        I am Developer based out of Dublin, Ireland and am passionate about Web Development.
                        I use this passion in my projects.

                    </Container>
                    <NextLink href="projects" passHref>
                        <Button  ml={3.5} mt={2} color={useColorModeValue('#553C9A','pink')}>
                            View Projects
                        </Button>
                    </NextLink>
                </Box>
            </RSection>
            <LSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                        Professional Experience
                    </Heading>
                    <Container >
                        <chakra.span fontSize={"18px"} fontWeight="bold">Intern in Software Development </chakra.span><chakra.span> - mCognito Labs</chakra.span>
                        <Badge>July 2020 - Janurary 2021</Badge>
                        <Text mt={2} fontSize="sm" >
                            At mCognito Labs, I developed my understanding of coding
                            specifically Java, JavaScript, HTML/CSS with a focus on web
                            and mobile app development for eLearning.
                            My duties included working with others to develop software
                            development and independently reviewing code.

                        </Text>
                    </Container>

                </Box>
            </LSection>

            </Box>
            <RSection delay={0.5}>
                <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                    Contact me
                </Heading>
                <Box w="100%" textAlign="center"
                     overflow="hidden" p={3}>
                    <SimpleGrid columns={[1,1,2]} gap={2} >


                        <Link isExternal="true"  href="https://github.com/zampilled"
                        >
                            <Button

                                size={"lg"}
                                fontSize="30px"
                                variant="outline"
                                borderWidth={"5px"}
                                borderColor={useColorModeValue('#553C9A','pink')}
                                color={useColorModeValue('#553C9A','pink')} leftIcon={<IoLogoGithub/>} >Github</Button>
                        </Link>
                        <Link isExternal="true"  href="https://www.linkedin.com/in/zampilled/"
                        >
                            <Button


                                size={"lg"}
                                fontSize="30px"
                                variant="outline"
                                borderWidth={"5px"}
                                borderColor={useColorModeValue('#553C9A','pink')}
                                color={useColorModeValue('#553C9A','pink')} leftIcon={<IoLogoLinkedin/>} >Linkedin</Button>
                        </Link>
                    </SimpleGrid>
                </Box>

            </RSection>

        </Container>

        </Layout>
    )
}
export default About