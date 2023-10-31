
import { useState } from 'react';
import Swatches from './Swatches';

const colors = [
    "red", "yellow", "orange"
];


const CarColorPicker = () => {
    // [state variable, set state function]
    const [activeColor, setActiveColor] = useState("red");
    return <section>
        <div
            style={{ backgroundColor : activeColor}}
            >
            Large Car image goes here.
            </div>
        <Swatches data={colors} 
                  changeHandler={setActiveColor}
                  />
        <h3>{activeColor}</h3>
    </section>
}

export default CarColorPicker;