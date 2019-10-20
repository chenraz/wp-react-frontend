import React, {useEffect, Fragment} from 'react';
import { leftArrow, rightArrow,upArrow,downArrow } from './svgStrings';

const MouseCursor = props => {

    const {hoverX,hoverY} = props;
    
    let arrow=false; 
    
    useEffect(()=>{

        console.log ('MouseCursor use effect');

        if (hoverX) {
            arrow = 'right' === hoverX
                ?   rightArrow
                :   leftArrow;
        }
        else if (hoverY) {
            arrow = 'up' === hoverY
                ?   upArrow
                :   downArrow;
        }
        let cursorStyle = arrow
            ?   `url('data:image/svg+xml;utf8,` + arrow + `') 24 24, auto`
            :   '';

        document.body.style.cursor = cursorStyle;

    });

    return (
        <Fragment />
    );    
}

export default MouseCursor;