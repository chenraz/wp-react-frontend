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
import Slides from './slides';
import Post from '../../components/post';
import ErrorBoundary from '../../components/Error';

const SliderWrapper = ({
    className,
    contentLayout,
    exerptEl,
    sliderPosts,
    allowedNavigation,
    sliderTerms,
    showTitle,
    showExcerpt,
    showThumbnail,  
    taxonomy,       
    Block,
    ...props
}) => {

    // const Block = () => <div>block</div>;

    return (
        <ErrorBoundary>
            <Slides {...props} {...{className,sliderPosts,allowedNavigation,sliderTerms, taxonomy,exerptEl,contentLayout,showExcerpt,showThumbnail,showTitle,Block}} className={classNames(className)}>
                {'post' === contentLayout && sliderPosts &&
                    sliderPosts.map((post,i)=><Post exerptEl={exerptEl} key={i} {...{post:post,showTitle,showExcerpt,showThumbnail}}/>)
                }
                {'blocks' === contentLayout && sliderPosts && sliderPosts.length &&
                    sliderPosts.map((post,i)=><Block key={i} post={post} />)
                }	
            </Slides>
        </ErrorBoundary>
    );
}

export default SliderWrapper;
