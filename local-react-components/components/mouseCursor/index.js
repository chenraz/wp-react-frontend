
import { useSelector } from 'react-redux';
import {getHoverX,getHoverY} from '../../store/selectors';

import MouseCursor from './mouseCursor';

const MouseWithCursor = (props) => {

    const hoverX = useSelector(getHoverX);
    const hoverY = useSelector(getHoverY);  

    return <MouseCursor {...props} hoverX={hoverX} hoverY={hoverY} />

}

export {
    MouseWithCursor as default,
    MouseCursor
};


