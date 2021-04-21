import { StarComponent } from './StarComponent';
import { createArray } from '../utilities/createArray';
import { useState } from 'react';

const Star = ({totalStars}) => {
    const [selectedStars, setSelectedStars] = useState(false);

    const onSelectedStars = (i) => {
        i > 0 ? setSelectedStars(i + 1) : setSelectedStars(false);
    }
    
    return <div>{createArray(totalStars).map((n, i) => {
       return  <StarComponent selected={selectedStars > i} key={i} onClick={() => onSelectedStars(i) }/>
    })
} 
{selectedStars && <p>Rating {totalStars} out of {selectedStars}</p>}
</div>
}

Star.defaultProps = {
    totalStars : 5,
}

export default Star;

