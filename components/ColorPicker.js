
import { useState } from 'react';

import Heading from './Heading';
import Image from 'next/image';
import Swatches from './Swatches';
import styles from './colorpicker.module.scss';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Paragraph from './Paragraph';


const ColorPicker = ({ colors, vehicleName }) => {
    // [state variable, set state function]
    const [activeColor, setActiveColor] = useState(0);

    return <section className={styles.colorpicker}>
        <Heading level={2} textAlign="center">Pick a color</Heading>
        <Image
          src={colors[activeColor].image.node.sourceUrl}
          alt={colors[activeColor].image.node.altText}
          width={colors[activeColor].image.node.mediaDetails.width}
          height={colors[activeColor].image.node.mediaDetails.height}
          className={styles.colorpicker__image}
        />
        <Swatches 
          colors={colors}
          setActiveColor={setActiveColor}
          activeColor={activeColor}
        />
        <Heading level={3} textAlign="center">{colors[activeColor].swatch.edges[0].node.name}</Heading>
        
        
        
    </section>
}

export default ColorPicker;

