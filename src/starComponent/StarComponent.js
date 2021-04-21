
import {FaStar} from 'react-icons/fa';

export const StarComponent = ({selected, onClick}) => {
    return <FaStar color={selected ? 'red' : 'gray'} onClick={onClick}/>
}


