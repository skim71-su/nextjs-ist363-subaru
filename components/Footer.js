import Nav from './Nav';
import Paragraph from './Paragraph';

import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <Paragraph>Connect with us</Paragraph>
        <Nav.SocialMedia />
        <Paragraph>Copyright 2023 Subaru.</Paragraph>
    </footer>
}
export default Footer