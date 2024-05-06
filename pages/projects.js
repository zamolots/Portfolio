import {
    Container,
    Heading,
    SimpleGrid,

    Box,
    useColorModeValue,
    Image,

} from '@chakra-ui/react'
import Layout from '../components/layouts/articleList'
import RSection from "../components/rsection";
import LSection from "../components/lsection";
import Section  from "../components/section"

import {GridThing} from "../components/grid"
import React from "react";

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Box>
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
                </Box>
                <Heading variant="section-title"  textAlign="center"  fontSize={35} mb={4} color={useColorModeValue('#553C9A','pink')}>
                    Projects
                </Heading>
                <Section>
                <SimpleGrid mt={5} columns={[1, 1, 2]} gap={6}>

                        <LSection delay={0.5}>
                        <GridThing
                                  id="ordeo"
                                  title="Ordeo"
                                  image="/images/ordeo3.PNG">
                            An inventory stocking Full Stack App using React/Redux/Django-Rest-Framework.
                        </GridThing>
                        </LSection>
                    <RSection delay={0.5}>
                        <GridThing
                            id="remback"
                            title="Remback"
                            image="/images/after2.PNG"

                        >
                            Web App that Removes the Backgrounds of Images using React/Django-Rest-Framework.
                        </GridThing>
                    </RSection>
                    <LSection delay={1}>
                        <GridThing
                            id="spiffy"
                            title="Spiffy"
                            image="/images/spiffydemo.PNG">
                            A Top Song Comparor using Nextjs / Framer Motion / Chakra UI and the Spotify Web API.
                        </GridThing>
                    </LSection>

                </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Projects
