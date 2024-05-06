import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import {AnimatePresence} from "framer-motion";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function Website ({Component, pageProps, router}) {
    return(
        <Chakra cookies={pageProps.cookies}>
            <Layout router={router}>
                <AnimatePresence
                    mode={"wait"
                    }
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}
export default Website