import {
    Container,
    Heading,
    Box,
    chakra,
    Image,
    Link,
    Stack,
    Button,
    useColorModeValue, Text, Center
} from "@chakra-ui/react";
import LSection from "../components/lsection";
import RSection from "../components/rsection";
import Section from "../components/section"
import NextLink from 'next/link'

const Page = () => {
    return(
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
                            Heya, I'm
                        </Heading>
                        <Heading as="h1" size="3xl"  variant="page-title" color={useColorModeValue('#553C9A','pink', )} >
                            Alex Zamolotskikh
                        </Heading>
                    </Section>
                    <Section flexGrow={1} alignItems="" delay={1}>
                        <Text fontSize="2xl">I am Full Stack Developer based out of Dublin, Ireland</Text>
                    </Section>
                    <Section flexGrow={1} alignItems="" delay={1.5}>
                        <Stack spacing={4} align='start'>

                                <NextLink href="/about" passHref >
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
    )
}
export default Page