/**
 * Externals
 */
import React, {useState} from 'react';
import WPGBlocks from 'react-gutenberg';

/**
 * Internals
 */
import GetCustomBlock from '../index';

const BlocksSlider = (props) => {
    
    const {innerBlocks} = props;
    const [active,setActive] = useState(0);
    const activeBlock = [innerBlocks[active]];
    
    const goRight = ()  => {

        setActive((active + 1) == innerBlocks.length ? 0 : active + 1);
    } 

    const goLeft = ()  => {

        setActive((0==active) ? (innerBlocks.length - 1) : (active -1));
    }     

    return (
        <div>
            <button onClick={goRight}>+</button>
            <button onClick={goLeft}>-</button>
            <WPGBlocks blocks={activeBlock} mapToBlock={GetCustomBlock} />        
        </div>

    );   
}

export default BlocksSlider;
