import {Container, Heading, Box} from "@chakra-ui/react";

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="orange" p={3} mb={6} align="center">
                Im a Full Stack Developer based out of Dublin, Ireland.
            </Box>
            <Box display={{md:'flex'}} >
                <Box flexGrow={1} alignItems="center">
                    <Heading as="h1" variant="page-title">
                        Alex Zamolotskikh
                    </Heading>
                    <p>Full Stack Developer</p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page