/**
 * Group with Context
 */

 /**
  * Externals
  */
import {useRef,useState, useLayoutEffect,createContext} from 'react';
import {pick,isEqual} from 'lodash';

/**
 * Create the context
 */
const GroupPropsContext =  createContext();
GroupPropsContext.displayName = 'GroupProps';

/**
 * The Group Component
 * @param {*} props 
 */
const GroupWithContext = (props) => {

        const [groupProps,setGroupProps] = useState();

        const group = useRef();

        const attrs = props.attrs || props.attributes;

        const maybeSetProps = () => {
            

            const groupBounds = group.current
                ?   group.current.getBoundingClientRect()
                :   {};

            const groupBoundsPicked = pick (
                    groupBounds,
                    ['width','height','left','right','top','bottom']
                )                

            const bounds = group.current
                ?   {
                        ...groupBoundsPicked,
                        paddingRight: getComputedStyle(group.current).paddingRight
                    }
                :   {};

            const newGroupProps = {
                isFullPage: attrs.isFullPage,
                hasVerticalHeader:attrs.hasVerticalHeader,
                ...bounds   
            };

            if (! isEqual(groupProps,newGroupProps)) {
                setGroupProps(newGroupProps);
            }
        }

        maybeSetProps();

        useLayoutEffect(maybeSetProps);
    
        return(
            <GroupPropsContext.Provider {...props} value={groupProps} > 
                <div ref={group} >
                    {props.children}
                </div>   
            </GroupPropsContext.Provider>

        );

    }

export {
    GroupWithContext as default,
    GroupPropsContext
}    