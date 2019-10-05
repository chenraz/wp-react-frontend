/**
 * Externals
 */
import React from 'react';
import classNames from 'classnames/dedupe';

/**
 * Internals
 */
import './style.scss'

/**
 * 
 * @param {*} props 
 */
const Wellcome = (props) => {
    
    const {logo,text,tagline,image,className} = props.attrs;

    return (
        <div className={classNames("wellcome-block",className)} >
            <img className="image" src={ image } />
            <img className="logo" src={ logo } />
            <div className='content'>
                <div className='inner-content'>
                    <div className="top-content" dangerouslySetInnerHTML={{ __html: text }}/>
                    <div className="tagline" dangerouslySetInnerHTML={{ __html: tagline }}/>
                </div>
            </div>  
        </div>
    );   
}

export default Wellcome;