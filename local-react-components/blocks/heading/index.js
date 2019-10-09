/**
 * Externals
 */
import React from 'react';

/**
 * Internals
 */
import {defaultAtts} from '../../utils/utils';
import attsSchema from'./attributes.js';
import Heading from './verticalHeading';
import useVertical from './useVertical';


export default (props) => {

    const attributes  = defaultAtts (props.attrs,attsSchema);
    
    return (
        <Heading {...props} attributes={attributes}/>
    );
}

export {useVertical};

