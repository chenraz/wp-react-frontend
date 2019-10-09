/**
 * Externals
 */
import React from 'react';
import classNames from 'classnames/bind';
import {isUndefined} from 'lodash';

/**
 * Internals
 */
import './style.scss';

/**
 * 
 * @param {*} props 
 */
const Heading = (props) => {
    
    const {attributes}  = props;

    const {
        level,
        className,
    } = attributes;

    const {innerHTML,children,tag} = props;

    // allow Hocs to change tag
    const Tag = (! isUndefined(tag) && tag)
        ?   tag
        :   `h${level}`;
    
    return (
        <Tag className={classNames(className, {"wp-block-heading": true})} > 
            { children ||         
                <span dangerouslySetInnerHTML={{ __html: innerHTML.replace(/(<([^>]+)>)/ig,"") }} /> 
            }
        </Tag>
    );   
}

export default Heading;

