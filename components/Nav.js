//core import
import { motion } from "framer-motion"
import Image from 'next/image';

//custom components
import Link from 'next/link';
import ButtonUI from './ButtonUI';

//styles
import styles from './nav.module.scss';

//utility function
import { getDesktopNavItems, getMobileNavItems} from '../lib/nav';


const Nav = () => {
    return <nav className={styles.nav}>
        nav goes here
        </nav>
}
const Desktop = () => {
    const navItems = getDesktopNavItems();
    return <nav className={styles.nav__desktop}>
        <ul className={styles.nav__list}>
            {navItems.map((navItem, index) => {
                const { label, slug } = navItem;
                return <li key={index} className={styles.nav__list__item}>
                    <Link href= {`/${slug}`}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}
Nav.Desktop = Desktop;



const Mobile = ({ closeHandler }) => {
    const navItems = getMobileNavItems();
    const mobileNavVariants = {
        closed: { 
            left: '-100' 
        },
        open: { 
            left:0,
        }

    }
    const listVariants = {
        closed: { 
            opacity: 0 
        },
        open: { 
            opacity:1,
            transition: {
                staggerChildren:0.1
            }
        }

    }
    const itemVariants = {
        closed: {
            x: -50,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    }
    return <motion.nav 
            className={styles.nav__mobile}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavVariants}
        
        >
        <ButtonUI 
            icon="close"
            clickHandler= {closeHandler}
        />
         <motion.ul 
            className={styles.nav__list}
            variants={listVariants}
        >
            {navItems.map((navItem, index) => {
                const { label, slug } = navItem;
                return <motion.li
                            key={index} 
                            className={styles.nav__list__item}
                            variants={itemVariants}
                       >
                    <Link href= {`/${slug}`}>
                        {label}
                    </Link>
                </motion.li>
            })}
        </motion.ul>
    </motion.nav>
}
Nav.Mobile= Mobile;

//social media links

const socials = [
    {
        name: "Facebook",
        slug: "facebook",
        url: "https://www.facebook.com/subaruofamerica"
    },
    {
        name: "Twitter",
        slug: "twitter",
        url: "https://twitter.com/subaru_usa?lang=en"
    },
    {
        name: "Instagram",
        slug: "instagram",
        url: "https://instagram.com/subaru_usa"
    },
    {
        name: "YouTube",
        slug: "youtube",
        url: "https://www.youtube.com/user/Subaru"
    },
];

const SocialMedia = () => {
    
    return <nav>
        <ul className={styles.nav__socialmedia}>
            {socials.map((social, index) => {
                const { slug, url } = social;
                return <li key={`socialMediaLink${index}`}>
                    <a href={url} target="_blank">
                        <Image 
                            src={`/image/icons/${slug}.svg`}
                            alt={`${slug} icon`}
                            width={20}
                            height={20}
                        />
                    </a>
                </li>
            })}
        </ul>
    </nav>
}
Nav.SocialMedia= SocialMedia;

export default Nav;