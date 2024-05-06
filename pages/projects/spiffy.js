import Layout from "../../components/layouts/articleList";
import {
    Badge,
    Box,
    Container,
    Heading,
    Image,
    SimpleGrid, Stack,
    Text,
    Center,
    Link,
    useColorModeValue, Button
} from "@chakra-ui/react";

import LSection from "../../components/lsection";
import RSection from "../../components/rsection";
import Section from "../../components/section";

import {  ExternalLinkIcon } from "@chakra-ui/icons"

const Project = () =>(
    <Layout title="Spiffy">
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
                    <p>Software Developer</p>
                </Box>
            </Box>
            <Heading variant="section-title" textAlign="center" fontSize={35} mb={4} color={useColorModeValue('#553C9A','pink')}>
                Spiffy
            </Heading>
            <Center>
                <Stack mb={2} direction="row"  textAlign="center" alignContent="center" >

                    <Badge alignItems="center" textAlign="center"  colorScheme={useColorModeValue('purple','pink')}>
                        Nextjs
                    </Badge>
                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Chakra UI
                    </Badge>
                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Framer Motion
                    </Badge>
                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Spotify Api
                    </Badge>
                </Stack>

            </Center>
            <Box >
               <SimpleGrid columns={[2]} gap={6}>
                    <LSection delay={0.5} >
                        <Box align="end">

                            <Link isExternal="true" href="https://github.com/Zampilled/Spiffy">
                                <Button  variant="outline"
                                         rightIcon={<ExternalLinkIcon />}
                                         borderColor={useColorModeValue('#553C9A','pink')}
                                         color={useColorModeValue('#553C9A','pink')}
                                >Source</Button>
                            </Link>
                        </Box>
                    </LSection>
                    <RSection delay={0.5}>
                        <Link isExternal="true" href="https://spifffy.netlify.app/" legacyBehavior>
                            <Button variant="outline" rightIcon={<ExternalLinkIcon />} borderColor={useColorModeValue('#553C9A','pink')} color={useColorModeValue('#553C9A','pink')}>Demo</Button>
                        </Link>
                    </RSection>
                </SimpleGrid>
            </Box>
            <Section delay={0.1}>
                <Center>
                    <Text textAlign="justify">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Spiffy is an extension of Spotify's Web API that allows spotify users to view their top song data
                        in a user friendly way. It uses a Nextjs Frontend with Chakra UI and Framer motion to create a seamless
                        experience for the user.
                    </Text>
                </Center>
            </Section>
            <Section>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>

                    <LSection delay={0.5}>
                        <Box w="100%"
                             borderWidth="3px"
                             borderColor={useColorModeValue('#553C9A','pink')}
                             p={0}
                             borderRadius="lg"
                             overflow="hidden">
                            <Image
                                src="/images/spiffy1.PNG"/>
                        </Box>
                    </LSection>
                    <RSection delay={0.5}>
                        <Box w="100%" textAlign="center"
                             borderWidth="3px"
                             borderColor={useColorModeValue('#553C9A','pink')}
                             p={0}
                             borderRadius="lg"
                             overflow="hidden">
                            <Image
                                src="/images/spiffy2.PNG"/>
                        </Box>
                    </RSection>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'
