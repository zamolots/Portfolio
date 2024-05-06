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
    <Layout title="Remback">
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
                Remback
            </Heading>
            <Center>
            <Stack mb={2} direction="row"  textAlign="center" alignContent="center" >

                <Badge alignItems="center" textAlign="center"  colorScheme={useColorModeValue('purple','pink')}>
                    React
                </Badge>
                <Badge colorScheme={useColorModeValue('purple','pink')}>
                    Django REST
                </Badge>
                <Badge colorScheme={useColorModeValue('purple','pink')}>
                    Redux
                </Badge>
                <Badge colorScheme={useColorModeValue('purple','pink')}>
                    Axios
                </Badge>
                <Badge colorScheme={useColorModeValue('purple','pink')}>
                    AI
                </Badge>

            </Stack>

            </Center>
            <Box >
                <SimpleGrid columns={[2]} gap={6}>
                <LSection delay={0.5} >
                    <Box align="end">
                        <Link isExternal="true" href="https://github.com/Zampilled/Remback" legacyBehavior>
                    <Button  variant="outline"
                             rightIcon={<ExternalLinkIcon />}
                             borderColor={useColorModeValue('#553C9A','pink')}
                             color={useColorModeValue('#553C9A','pink')}
                             >Source</Button>
                        </Link>
                    </Box>
                </LSection>
                {/* <RSection delay={0.5}>
                    <Link isExternal="true" href="https://zampilled.netsoc.ie/">
                    <Button variant="outline" rightIcon={<ExternalLinkIcon />} borderColor={useColorModeValue('#553C9A','pink')} color={useColorModeValue('#553C9A','pink')}>Demo</Button>
                    </Link>
                </RSection> */}
                </SimpleGrid>
            </Box>
            <Section delay={0.1}>
                <Center>
                    <Text textAlign="justify">
                        Remback is an image matting AI that uses React/Redux/Django Rest/Axios.
                        The AI used is ZHKKKE’s MODNet.
                        The image is processed on a Django REST backend and returned via an API Response
                        which is then processed on the React Frontend.


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
                                src="/images/before.PNG"/>
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
                                        src="/images/after.PNG"/>
                        </Box>
                    </RSection>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'