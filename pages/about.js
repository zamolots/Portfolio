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
                            src="/images/me.jpg"
                            alt="Profile image"
                            borderRadius='full'
                            width="100%"
                            height="100%"

                        />
                    </Box>
                </Box>
                <Box flexGrow={1} alignItems="center">
                    <Heading as="h1" align="center" variant="page-title" color={useColorModeValue('#553C9A','pink')} >
                        Alex Zamolotskikh
                    </Heading>
                    <p align="center">ML Developer</p>
                </Box>


            </Box>

            <RSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title"  color={useColorModeValue('#553C9A','pink')}>
                        About me
                    </Heading>
                    <Container>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Based in Dublin, Ireland, I am an experienced Developer with a background in both development and research. I am enthusiastic about pursuing more development opportunities, particularly in the field of LLM's.
                    </Container>

                </Box>
            </RSection>
            <LSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                        Professional Experience
                    </Heading>

                    <Container mt={2}>
                        <chakra.span fontSize={"18px"} fontWeight="bold">Intern @ ICTL Research Lab</chakra.span>
                        <p>JetBrains</p>
                        <Badge>June 2023 - June 2024</Badge>
                        <Text mt={2} fontSize="sm" >
                            During my internship at ICTL, I completed several projects:
                            I created a neural network that predicts emoji reactions based on the sentiment of messages.
                            I ran a study of peoples use of reactions in messages and their tendencies to use them depending on other peoples reactions.
                            I then turned this model and study into a research paper which is currently being considered for CSCW 2025.
                            I worked on a RAG approach for finding relevant people in a corporate structure for a certain problem.
                        </Text>
                    </Container>


                    <Container >
                        <chakra.span fontSize={"18px"} fontWeight="bold">Full Stack Developer Intern </chakra.span>
                        <p>Ambisense</p>
                        <Badge>June 2022 - September 2022</Badge>
                        <Text mt={2} fontSize="sm" >
                            Over my internship, at Ambisense I worked on a wide array of projects with varying technologies. I mostly used Python, Javascript, and Bash during my internship.
                            My projects include:
                            A script that could perform data analytics on client data to provide meaningful insights
                            I Managed the backend development of a service
                            I created artificial data for script testing.
                            While developing my coding skills I also developed key skills in communication and working with a team.

                        </Text>
                    </Container>

                </Box>
            </LSection>
            <RSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                        Higher Education
                    </Heading>
                    <Container >
                        <chakra.span fontSize={"18px"} fontWeight="bold">BA in Computer Science</chakra.span>
                        <p>Trinity College Dublin</p>
                        <Badge>2022 - 2026</Badge>
                        <Text mt={2} fontSize="sm" >
                            I am currently pursuing a degree in Computer Science. I am also class rep for my course and am part of a number of societies.

                        </Text>
                    </Container>


                </Box>
            </RSection>
            <LSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                        Volunteering
                    </Heading>
                    <Container >
                        <chakra.span fontSize={"18px"} fontWeight="bold">Committee Member</chakra.span>
                        <p>The Internet Society</p>
                        <Badge>January 2023 - Present</Badge>
                        <Text mt={2} fontSize="sm" >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                        As Chairperson of Trinity's Internet Society, I oversee the day-to-day management of our servers and events, providing free hosting for student projects on physical servers within the university.
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
                    <SimpleGrid columns={[2]} gap={2} >


                        <Link isExternal="true"  href="https://github.com/zampilled"
                              legacyBehavior>
                            <Button

                                size={"md"}
                                fontSize="20px"
                                variant="outline"
                                borderWidth={"5px"}
                                borderColor={useColorModeValue('#553C9A','pink')}
                                color={useColorModeValue('#553C9A','pink')} leftIcon={<IoLogoGithub/>} >Github</Button>
                        </Link>
                        <Link isExternal="true"  href="https://www.linkedin.com/in/zampilled/"
                              legacyBehavior>
                            <Button


                                size={"md"}
                                fontSize="20px"
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