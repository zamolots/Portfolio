"use client"
import {
    Container,
    Heading,
    Box,
    chakra,
    Image,
    Text,
    Badge,
    useColorModeValue, Button, SimpleGrid, Link, List, ListItem, UnorderedList,
} from "@chakra-ui/react";
import LSection from "../components/lsection";
import RSection from "../components/rsection";
import Layout from "../components/layouts/articleList";

import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";

import React from "react";

const About = () => {

    return(
        <Layout title="About Me">
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
                            <Heading as="h1" align="center" variant="page-title" color={useColorModeValue('#553C9A','pink')} >
                                Alex Zamolotskikh
                            </Heading>
                            <p align="center">Student</p>
                        </Box>


                    </Box>


                        <Box>
                            <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                                Professional Experience
                            </Heading>

                            <RSection delay={0}>
                                <Container mt={2}>
                                    <chakra.span fontSize={"18px"} fontWeight="bold">Software Development Intern</chakra.span>
                                    <p>JetBrains</p>
                                    <Badge>May 2025 - August 2025</Badge>
                                    <UnorderedList mt={2} fontSize="sm" >
                                        <ListItem>
                                        Designed and deployed LLM pipeline to convert structured word documents into
                                        publish-ready web pages
                                        </ListItem>
                                        <ListItem>
                                        Built a RAG system by indexing large internal technical documentation with
                                        embeddings and metadata search
                                        </ListItem>
                                        <ListItem>
                                        Developed API and infrastructure for cron-like scheduling of agentic tasks backed by
                                        PostgreSQL
                                        </ListItem>
                                    </UnorderedList>
                                </Container>
                            </RSection>

                            <LSection delay={0.1}>
                            <Container mt={2}>
                                <chakra.span fontSize={"18px"} fontWeight="bold">Software Engineering Intern</chakra.span>
                                <p>Health Beacon</p>
                                <Badge>October 2024 - March 2025</Badge>
                                <UnorderedList mt={2} fontSize="sm" >
                                    <ListItem>
                                        Developed AWS-based processing of IOT device packets.
                                    </ListItem>
                                    <ListItem>
                                        Worked on core React Web App refactor.
                                    </ListItem>
                                </UnorderedList>
                            </Container>
                            </LSection>
                            <RSection delay={0.2}>

                            <Container mt={2}>
                                <chakra.span fontSize={"18px"} fontWeight="bold">Intern @ ICTL Research Lab</chakra.span>
                                <p>JetBrains</p>
                                <Badge>June 2023 - June 2024</Badge>
                                <UnorderedList mt={2} fontSize="sm" >
                                    <ListItem>
                                    Created a neural network that predicts emoji reactions to chat messages based on
                                    the sentiment of messages.
                                    </ListItem>
                                    <ListItem>
                                    Ran a study of people's use of reactions in messages and their tendencies to use
                                    them depending on other people's reactions.
                                    </ListItem>
                                    <ListItem>
                                    Compiled this model and study into a research paper.
                                    </ListItem>
                                    <ListItem>
                                    Worked on a RAG approach for finding relevant people in a corporate structure for a
                                    certain problem.
                                    </ListItem>
                                </UnorderedList>
                            </Container>
                            </RSection>
                            <LSection delay={0.3}>

                            <Container >
                                <chakra.span fontSize={"18px"} fontWeight="bold">Full Stack Developer Intern </chakra.span>
                                <p>Ambisense</p>
                                <Badge>June 2022 - September 2022</Badge>
                                <Text mt={2} fontSize="sm" >

                                    <UnorderedList>
                                        <ListItem>
                                        Automated analytics on client data.
                                        </ListItem>
                                        <ListItem>
                                        Managed the backend development of a service.
                                        </ListItem>
                                        <ListItem>
                                        Created artificial data for script testing.
                                        </ListItem>
                                    </UnorderedList>
                                </Text>
                            </Container>
                            </LSection>
                        </Box>

                    <RSection delay={0.4}>
                        <Box>
                            <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                                Higher Education
                            </Heading>
                            <Container >
                                <chakra.span fontSize={"18px"} fontWeight="bold">BA in Computer Science</chakra.span>
                                <p>Trinity College Dublin</p>
                                <Badge>2022 - May 2026</Badge>
                            </Container>


                        </Box>
                    </RSection>
                    <LSection delay={0.5}>
                        <Box>
                            <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                                Extra-Curricular
                            </Heading>
                            <Container >
                                <chakra.span fontSize={"18px"} fontWeight="bold">Rower</chakra.span>
                                <p>Dublin University Boat Club</p>
                                <Badge>September 2024 - Present</Badge>
                                <List mt={2} fontSize="sm" >
                                    <ListItem>I row at Dublin University Boat Club and use it to balance to mental load of my work.</ListItem>
                                </List>
                            </Container>

                            <Container >
                                <chakra.span fontSize={"18px"} fontWeight="bold">Committee Member</chakra.span>
                                <p>The Internet Society</p>
                                <Badge>January 2023 - January 2025</Badge>
                                <UnorderedList mt={2} fontSize="sm" >
                                    <ListItem>Oversaw managment of society servers
                                        Helped with society events and operations</ListItem>
                                    <ListItem>Helped with society events and operations</ListItem>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    As Chairperson of Trinity's Internet Society, I oversee the day-to-day management of our servers and events, providing free hosting for student projects on physical servers within the university.
                                </UnorderedList>
                            </Container>


                        </Box>
                    </LSection>
                </Box>
                <RSection delay={0.6}>
                    <Heading as="h3" variant="section-title" color={useColorModeValue('#553C9A','pink')}>
                        Contact me
                    </Heading>
                    <Box w="100%" textAlign="center"
                         overflow="hidden" p={3}>
                        <SimpleGrid columns={[2]} gap={2} >


                            <Link isExternal="true"  href="https://github.com/zamolots"
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