/**
 * Allow mouse navigatin by hovering on element edges
 */

 /**
  * External Dependencies
  */
import React,{useState} from 'react';

const noop = () => {return {}}; 

export default (({setHoverX}) => 
    ( WrappedComponent ) => (
        props => {
            const [horizontalHover,setHorizontalHover] = useState();
            const [verticalHover,setVerticalHover] = useState();

            const { allowedNavigation,onClick } = props;

            const canNavigate = (
                allowedNavigation 
                && (allowedNavigation.left || allowedNavigation.right)
            ); 
            
            console.log ("default withmaousenavigation: ", props);

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
                // const { allowedNavigation,onClick } = props;
                
                console.log ('mouse moved allowed navigatin : ' , allowedNavigation);

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
                        onMouseMove = { canNavigate ? onMouseMove : noop } 
                        onMouseLeave = { canNavigate ? onMouseLeave : noop } 
                    >
                        <WrappedComponent {...props} horizontalHover={horizontalHover} setHorizontalHover={canNavigate ? setHorizontals : noop} />
                    </div>
                  
                );


            }
    )
); 


