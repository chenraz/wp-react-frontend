/**
 * Externals
 */
import React from "react";

/**
 * Internals
 */
import Heading from './heading';
import useVertical from './useVertical';

/**
 * 
 * @param {*} props 
 */
const VerticalHeading = 
    (props) => {
        
        const {tagRef,isVertical} = useVertical(props);        
       
        return (
            <div ref={tagRef}>
                <Heading {...props}>
                    {isVertical && 
                        <svg>
                            <text x="0" y="0" dangerouslySetInnerHTML={{ __html: props.innerHTML.replace(/(<([^>]+)>)/ig,"") }} />
                        </svg>
                    }    
                </Heading> 
            </div>
        );
        
    };

export default VerticalHeading;