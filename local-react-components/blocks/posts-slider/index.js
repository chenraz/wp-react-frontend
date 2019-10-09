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
import Slider from './slider';
import {useCustomPosts,useCustomTerms} from '../../utils/resolvers';
import {defaultAtts} from '../../utils/utils';
import withMouseNavigation from '../../components/mouseNavigation';


/**
 * 
 * @param {*} props 
 */
const PostsSlider = (props) => {
    
    const attributes  = defaultAtts (props.attrs,attsSchema);
    
    const exerptEl = useRef(null);    

    return (
        <Slider {...props} {...attributes} exerptEl={exerptEl} Block={WPGBlocks} />

    );   
}

const withNavigation = withMouseNavigation(PostsSlider);

/**
 * Compose React Hooks
 */
const sliderWithHooks = flowRight ([
    withNavigation,
    useCustomTerms,
    useCustomPosts,
]);

export {
    sliderWithHooks as default,
    Slider,
}



