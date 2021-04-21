import { StarComponent } from './StarComponent';
import { createArray } from '../utilities/createArray';
import { useState } from 'react';

const Star = ({totalStars}) => {
    const [selectedStars, setSelectedStars] = useState(false);
    return createArray(totalStars).map((n, i) => {
       return  <StarComponent selected={selectedStars > i} key={i} onClick={() => setSelectedStars(i + 1)}/>
    });
}

Star.defaultProps = {
    totalStars : 5,
}

export default Star;

