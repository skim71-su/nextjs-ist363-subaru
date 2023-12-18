import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import styles from './header.module.scss';
import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import Row from './Row';
import ButtonUI from './ButtonUI';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return <header className= {styles.header}>
         <Container>
            <Row justifyContent="space-between">
                <Logo />
                <Nav.Desktop />
                <ButtonUI icon="menu" 
                          clickHandler={() => {
                            setIsMobileNavOpen(true);
                        }}
                />
                <AnimatePresence>
                    {isMobileNavOpen && <Nav.Mobile closeHandler={() => {
                        setIsMobileNavOpen(false);
                    }}/>}
                </AnimatePresence>
            </Row>
        </Container>

    </header>
}
export default Header;