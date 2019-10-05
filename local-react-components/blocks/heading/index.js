/**
 * Externals
 */
import React from 'react';

/**
 * Internals
 */
import {defaultAtts} from '../../utils/utils';
import attsSchema from'./attributes.js';
import Heading from '../../elements/heading';


export default (props) => {

    const attributes  = defaultAtts (props.attrs,attsSchema);
    
    return (
        <Heading {...props} attributes={attributes}/>
    );
}

