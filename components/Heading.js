import classnames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classnames.bind(styles);
const Heading = ({ children, color, level, textAlign, 
                marginBottom, marginTop, marginLeft, marginRight,
                paddingBottom, paddingTop, paddingLeft, paddingRight }) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;
    const headingClasses = cx({
        heading: true,
        [`heading${level}`] : level,
        [`font-color-${color}`] : color,
        [`margin-bottom-${marginBottom}`]: marginBottom,
        [`margin-top-${marginTop}`]: marginTop,
        [`margin-right-${marginRight}`]: marginRight,
        [`margin-left-${marginLeft}`]: marginLeft,
        [`padding-bottom-${paddingBottom}`]: paddingBottom,
        [`padding-top-${paddingTop}`]: paddingTop,
        [`padding-right-${paddingRight}`]: paddingRight,
        [`padding-left-${paddingLeft}`]: paddingLeft,
        [`text-align-${textAlign}`] : textAlign
        
    });
    return <Tag className={headingClasses}>{children}</Tag>
}
export default Heading;