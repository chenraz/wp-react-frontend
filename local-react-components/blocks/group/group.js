/**
 * Group Element
 */

/**
 * Externals
 */
import classNames from 'classnames/dedupe';

/**
 * Internals
 */
import GroupWithContext,{GroupPropsContext} from './groupWithContext';
import {getBaseClassName} from '../../utils/selectors';
import './style.scss';

/**
 * Group
 * 
 * @param {*} props 
 */
const Group = (props) => {

    const attrs = props.attrs || props.attributes;
    const {className} = attrs;
    const baseClassName = getBaseClassName(props.blockName);

    return (
        <GroupWithContext {...props}>
            <div className={classNames(baseClassName,className)}>
                {props.children}
            </div>
        </GroupWithContext>
    );

}

export {
    Group as default,
    GroupPropsContext
}