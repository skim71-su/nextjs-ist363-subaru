
import { useState } from 'react';

import Heading from './Heading';
import Image from 'next/image';
import Swatches from './Swatches';
import styles from './colorpicker.module.scss';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Link from 'next/link';


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
        <Container>
            <div className={styles.colorpicker__calltoactionsreg}>
              <div className={styles.calltoactionsreg__flexbox}>
                  <Heading level={2}>Get Behind the Wheel</Heading>
                  <p className={styles.colorpicker__calltoactionsreg__paragraph}>
                      Start customizing your {vehicleName} today, or contact your local Subaru dealer to experience one in person.
                  </p>
                  <ButtonGroup>
                      <Link href="/vbuild-price">
                          <Button type="primary">
                            Build & Price
                          </Button>
                      </Link>
                      <Link href="/customer-support">
                          <Button type="secondary">
                            Contact Dealer
                          </Button>
                      </Link>
                  </ButtonGroup>
              </div>
            </div>
            
        </Container>
    
        
        
        
    </section>
}

export default ColorPicker;

