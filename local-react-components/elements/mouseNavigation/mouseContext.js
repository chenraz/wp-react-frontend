/**
 * Externals
 */
import {useState, createContext} from 'react';

/**
 * Create the context
 */
const MouseProps =  createContext();
MouseProps.displayName = 'MouseProps';


/**
 * Mouse Context HOC
 * @param {*} WrappedComponent 
 */
const MouseContext = (props) => {
    const [horizontalHover,setHorizontalHover] = useState();
    const [verticalHover,setVerticalHover] = useState();
    const [onHorizontalClick,setOnHorizontalClick] = useState();
    const [onVerticalClick,setOnVerticalClick] = useState();

    const value = {
        horizontalHover,   
        setHorizontalHover,
        verticalHover,
        setVerticalHover,
        onHorizontalClick,
        setOnHorizontalClick,
        onVerticalClick,
        setOnVerticalClick
    };

    return (
        <MouseProps.Provider {...props} value={value}>
            
            {props.children}
        
        </MouseProps.Provider>
    );
}



export {
    MouseContext as default,
    MouseProps
}