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
import GetCustomBlock from '../index';


const Block = ({post}) => {

    console.log ("Block post: ", post);

	const blockObj = post.blocks && post.blocks.length 
		? [post.blocks[0]]
        : false;
            
    return blockObj
        ?   (
                <WPGBlocks blocks={blockObj} mapToBlock={GetCustomBlock} />
            )
        :   '';
}

/**
 * 
 * @param {*} props 
 */
const usePostsSlider = (props) => {
    
    const attributes  = defaultAtts (props.attrs,attsSchema);
    
    const exerptEl = useRef(null);    

    return (
        // <Slider {...props} {...attributes} exerptEl={exerptEl} Block={WPGBlocks} />
        <Slider {...props} {...attributes} exerptEl={exerptEl} Block={Block} />

    );   
}

const withNavigation = withMouseNavigation(usePostsSlider);

/**
 * Compose React Hooks
 */
const sliderWithHooks = flowRight ([
    // PostsSlider,
    // withMouseNavigation,
    withNavigation,
    useCustomTerms,
    useCustomPosts,
]);


export {
    sliderWithHooks as default,
    Slider,
}



