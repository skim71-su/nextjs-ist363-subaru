import classnames from 'classnames/bind';
import Image from 'next/image';
import styles from './btnui.module.scss'

const cx = classnames.bind(styles);
const ButtonUI = ({ clickHandler, icon }) => {
    const btnClasses = cx({
        btnui: true,
        close: icon ==='close',
        menu: icon === 'menu'
    });
    return <button 
        className= {btnClasses}
        onClick= {clickHandler}
        >
        <Image 
            src={`/image/icons/${icon}.svg`}
            alt={`${icon} icon`}
            width={12}
            height={16}
        />
        
    </button>
}
export default ButtonUI;