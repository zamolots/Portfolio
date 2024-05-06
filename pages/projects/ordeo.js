import Layout from "../../components/layouts/articleList";
import {
    Badge,
    Box, Button,
    Center,
    Container,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack, Text,
    useColorModeValue
} from "@chakra-ui/react";
import LSection from "../../components/lsection";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import RSection from "../../components/rsection";
import Section from "../../components/section";


const Project = () =>(
    <Layout title="Ordeo">
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
                Ordeo
            </Heading>
            <Center>
                <Stack mb={2} direction="row"  textAlign="center" alignContent="center" >
                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Django REST
                    </Badge>
                    <Badge alignItems="center" textAlign="center"  colorScheme={useColorModeValue('purple','pink')}>
                        React
                    </Badge>

                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Redux
                    </Badge>
                    <Badge colorScheme={useColorModeValue('purple','pink')}>
                        Axios
                    </Badge>
                </Stack>
            </Center>
            <Box >
                <SimpleGrid columns={[2]} gap={6}>
                    <LSection delay={0.5} >
                        <Box align="end">
                            <Link isExternal="true" href="https://github.com/Zampilled/Ordeo" legacyBehavior>
                                <Button  variant="outline"
                                         rightIcon={<ExternalLinkIcon />}
                                         borderColor={useColorModeValue('#553C9A','pink')}
                                         color={useColorModeValue('#553C9A','pink')}
                                >Source</Button>
                            </Link>
                        </Box>
                    </LSection>
                    <RSection delay={0.5}>
                        <Link isExternal="true" href="https://zamolo.herokuapp.com/" legacyBehavior>
                            <Button variant="outline" rightIcon={<ExternalLinkIcon />} borderColor={useColorModeValue('#553C9A','pink')} color={useColorModeValue('#553C9A','pink')}>Demo</Button>
                        </Link>
                    </RSection>
                </SimpleGrid>
            </Box>
            <Section delay={0.1}>
                <Center>
                    <Text textAlign="justify">
                        Ordeo is an inventory ordering system. It has a React Frontend and a Django REST
                        REST API. It uses Knox for authentication. Ordeo keeps cart and order information
                        on the backend which is then accessed and altered either through the frontend or
                        API calls. The Admin accounts allows you to add and delete products and track
                        orders made by regular users.
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
                                src="/images/ordeo1.PNG"/>
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
                                src="/images/ordeo2.PNG"/>
                        </Box>
                    </RSection>
                    <LSection delay={0.5}>
                        <Box w="100%"
                             borderWidth="3px"
                             borderColor={useColorModeValue('#553C9A','pink')}
                             p={0}
                             borderRadius="lg"
                             overflow="hidden">
                            <Image
                                src="/images/ordeo3.PNG"/>
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
                                src="/images/ordeo4.PNG"/>
                        </Box>
                    </RSection>
                    <LSection delay={0.5}>
                        <Box w="100%"
                             borderWidth="3px"
                             borderColor={useColorModeValue('#553C9A','pink')}
                             p={0}
                             borderRadius="lg"
                             overflow="hidden">
                            <Image
                                src="/images/ordeo5.PNG"/>
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
                                src="/images/ordeo6.PNG"/>
                        </Box>
                    </RSection>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'