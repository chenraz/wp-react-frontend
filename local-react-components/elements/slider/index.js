/**
 * Slider Element
 */

/**
 * External
 */
import React from 'react';
import classNames from 'classnames/dedupe';

/**
 * 
 * Internals
 */
import Slider from './slider';
import Post from '../post';

const SliderWrapper = ({
    exerptEl,
    sliderPosts,
    allowedNavigation,
    sliderTerms,
    className,
    contentLayout,
    showTitle,
    showExcerpt,
    showThumbnail,  
    taxonomy,       
    Block
}) => {

    return (
        <Slider {...{className,sliderPosts,allowedNavigation,sliderTerms, taxonomy,exerptEl,contentLayout,showExcerpt,showThumbnail,showTitle,Block}} className={classNames(className)}>
            {'post' === contentLayout && sliderPosts &&
                sliderPosts.map((post,i)=><Post exerptEl={exerptEl} key={i} {...{post:post,showTitle,showExcerpt,showThumbnail}}/>)
            }
            {'blocks' === contentLayout && sliderPosts && sliderPosts.length &&
                sliderPosts.map((post,i)=><Block key={i} post={post} />)
            }	
        </Slider>
    );
}

export default SliderWrapper;
