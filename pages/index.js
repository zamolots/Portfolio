import {

    Heading,
    Box,
    Stack,
    Button,
    useColorModeValue, Text, Center
} from "@chakra-ui/react";
import Section from "../components/section"
import NextLink from 'next/link'
import Layout from "../components/layouts/articleList";


const Page = () => {
    return(
        <Layout>
        <Center>
        <Box>

            <Box
                display={{md:'flex'}} alignItems="center" alignContent="center" mt={{md:0}}>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md:0 }}
                    ml={{ md: 6}}
                    mr={{md:6}}
                    textAlign="start"
                >
                    <Section flexGrow={1} alignItems="start" delay={0.5}>
                        <Heading as="h3" size="xl" >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hey, I'm
                        </Heading>
                        <Heading as="h1" size="3xl"  variant="page-title" color={useColorModeValue('#553C9A','pink', )} >
                            Alex Zamolotskikh
                        </Heading>
                    </Section>
                    <Section flexGrow={1} alignItems="" delay={1}>
                        <Text fontSize="2xl">I am a ML Developer based out of Dublin, Ireland.</Text>
                    </Section>
                    <Section flexGrow={1} alignItems="" delay={1.5}>
                        <Stack spacing={4} align='start'>

                                <NextLink href="/about" passHref legacyBehavior>
                                    <Button colorScheme={useColorModeValue('purple','pink', )} size='lg' variant="outline">
                                            About Me
                                    </Button>
                                </NextLink>

                        </Stack>
                    </Section>

                </Box>

            </Box>

        </Box>
        </Center>
        </Layout>
    )
}
export default Page