/**
 * Allow mouse navigatin by hovering on element edges
 */

 /**
  * External Dependencies
  */
import React,{useState} from 'react';


export default (({setHoverX}) => 
    ( WrappedComponent ) => (
        props => {
            const [horizontalHover,setHorizontalHover] = useState();
            const [verticalHover,setVerticalHover] = useState();

            const setHorizontals = (newHorizontal) => {
                setHorizontalHover(newHorizontal);
                setHoverX(newHorizontal);            
            }

            const onMouseLeave = () => {
                setHorizontals(false);
            }  
            
            const onMouseMove = ( event ) => {

                const container = event.currentTarget;
                const { width, height, left, right, top, bottom } = container.getBoundingClientRect();
                const { allowedNavigation,onClick } = props;

                let newHorizontalHover = null;
                if ( 
                    allowedNavigation && allowedNavigation.left
                    && ( event.clientX - left ) < width / 2 
                ) {
                    newHorizontalHover = 'left';
                } else if ( 
                    allowedNavigation && allowedNavigation.right
                    && ( right - event.clientX ) < width / 2 
                ) {
                    newHorizontalHover = 'right';
                }
        
                if ( horizontalHover !== newHorizontalHover ) {
                    setHorizontals(newHorizontalHover);

                }
            }
            
                return (
                    <div 
                        onMouseMove = { onMouseMove } 
                        onMouseLeave = { onMouseLeave } 
                    >
                        <WrappedComponent {...props} horizontalHover={horizontalHover} setHorizontalHover={setHorizontals} />
                    </div>
                );


            }
    )
); 


