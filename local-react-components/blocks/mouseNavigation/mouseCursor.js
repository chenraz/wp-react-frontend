import { useSelector } from 'react-redux';
import {getHoverX,getHoverY} from '../../store/selectors';

import {MouseCursor as Mouse} from '../../elements/mouseNavigation';

const MouseCursor = (props) => {

    const hoverX = useSelector(getHoverX);
    const hoverY = useSelector(getHoverY);  

    return <Mouse {...props} hoverX={hoverX} hoverY={hoverY} />

}

export default MouseCursor;


