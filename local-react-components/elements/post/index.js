/**
 * Post
 */

/**
 * Externals
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {isUndefined, isEmpty} from 'lodash';
import classNames from 'classnames';

/**
 * Internals
 */

 import Image from '../image';

const Post = ({post,showTitle,showExcerpt,showThumbnail,exerptEl}) => {

    if (! post) {
        return <div></div>;
    }

    const displayTitle = showTitle && exerptEl && exerptEl.current && ! isEmpty (post.title.rendered);
    const displayExcerpt = showExcerpt && exerptEl && exerptEl.current && ! isUndefined (post.excerpt_raw);
    
    const Excerpt = () => {

        const rows = ! displayExcerpt
            ? {}
            : post.excerpt_raw.split('\n').map((text, index)=> (
                <React.Fragment key={`${text}-${index}`}>
                    {text}
                    <br />
                </React.Fragment>
            ));
            

        return (! displayExcerpt && ! displayTitle)
            ?   ''
            : (
            <div>
                {displayTitle &&
                    <h3 className='excerpt-title'>{post.title.rendered}</h3>
                } 
                {rows}
                   
            </div>
        );
    }

    return ([
        <div key="thumbnail" className="post-slide">
            { showThumbnail && ! isUndefined (post.thumbnail) && ! isEmpty (post.thumbnail) &&
                <div className="slide-image">
                    <Image src={post.thumbnail.url} alt={post.thumbnail.alt} />
                </div>
            }
        </div>,
            (displayTitle || displayExcerpt) &&
            ReactDOM.createPortal(
                <Excerpt />,
                exerptEl.current
            )

    ]);
};

export default Post;