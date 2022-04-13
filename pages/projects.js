import {Container, Heading, SimpleGrid, Divider, Box, useColorModeValue, Image, Text} from '@chakra-ui/react'
import Layout from '../components/layouts/articleList'
import RSection from "../components/rsection";
import LSection from "../components/lsection";

const Projects = () => {
    return (
        <Container>
            <Box display={{md: 'flex'}} mt={{md: 6}}>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    mr={{md: 6}}
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
                    <Heading as="h1" variant="page-title">
                        Alex Zamolotskikh
                    </Heading>
                    <p>Full Stack Developer</p>
                </Box>
            </Box>
            <RSection delay={0.5}>
                <Box>
                    <Heading as="h3" variant="section-title">
                        About me
                    </Heading>
                    <Container>
                        Lorem ipsum dolor siat. Duis aute irure dolor in reprehendeid est laborum.{' '}
                        .
                    </Container>

                </Box>
            </RSection>
            <LSection delay={0.5}>
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

        </Container>
    )
}

export default Projects
