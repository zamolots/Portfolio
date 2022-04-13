import {Container,
    Heading,
    Box,
    chakra,
    Image,
    Link,
    useColorModeValue} from "@chakra-ui/react";
import LSection from "../components/lsection";
import RSection from "../components/rsection";


const About = () => {
    return(

        <Container>
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
                        borderColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
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

            <RSection>
                <Box>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Container>
                        I am Developer based out of Dublin, Ireland passionate in Web Development.
                        
                    </Container>

                </Box>
            </RSection>
            <LSection>
                <Box>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Container>
                        Lorem ipsum dolor siat. Duis aute irure dolor in reprehendeid est laborum.{' '}
                        .
                    </Container>

                </Box>
            </LSection>

            </Box>
        </Container>
    )
}
export default About