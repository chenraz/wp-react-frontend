

import {
    mapValues,
    omitBy,
    defaults, 
    isNull,
    forOwn
} from 'lodash';

const defaultAtts = (atts, attsSchema) => 
    defaults(
        atts,
        omitBy(
            mapValues(attsSchema,(att)=>att.default || null),
            isNull
        )
    );

/**
 * Wrapper for multiple JS setAttribute
 * 
 * @param {*} el 
 * @param {*} atts 
 */
const setAttributes = 
    (el,atts) => 
        forOwn(atts,(val,prop) => 
            el.setAttribute(prop,val));


export {defaultAtts,setAttributes};