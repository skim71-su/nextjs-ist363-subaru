import Image from 'next/image';

const Logo = () => {
    return <Image 
        src="/image/subaru-logo.webp"
        alt="Subaru Logo"
        width={250}
        height={63}
    />
}
export default Logo;