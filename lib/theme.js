
import {mode} from '@chakra-ui/theme-tools'
import {extendTheme} from "@chakra-ui/react";

const styles = {
    global: props => ({
        body: {
                bg: mode("")(props),
        }
    })
}


const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}



const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,

            }
        }
    },
}

const theme = extendTheme({components, styles,config})
export default theme