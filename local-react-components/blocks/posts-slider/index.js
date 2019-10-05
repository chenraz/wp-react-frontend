/**
 * External
 */
import React, {useRef} from 'react';
import {flowRight} from 'lodash';
import WPGBlocks from 'react-gutenberg';

/**
 * Internals
 */
import attsSchema from'./attributes.js';
import Slider from '../../elements/slider';
import {useCustomPosts,useCustomTerms} from '../../utils/resolvers';
import {defaultAtts} from '../../utils/utils';
import  './style.scss';

/**
 * 
 * @param {*} props 
 */
const PostsSlider = (props) => {
    
    const attributes  = defaultAtts (props.attrs,attsSchema);
    
    const exerptEl = useRef(null);    

    // const {allowedNavigation} = props;

    return (
        <Slider {...props} {...attributes} exerptEl={exerptEl} Block={WPGBlocks} />

    );   
}

/**
 * Compose React Hooks
 */
const sliderWithHooks = flowRight ([
    PostsSlider,
    useCustomTerms,
    useCustomPosts,
]);

export default sliderWithHooks;


