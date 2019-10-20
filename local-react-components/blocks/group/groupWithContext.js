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

const getProps = (group,attrs) => {
            
    console.log ('group getProps');

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

    return {
        isFullPage: attrs.isFullPage,
        hasVerticalHeader:attrs.hasVerticalHeader,
        ...bounds   
    };

    // return newGroupProps;

    // if (! isEqual(groupProps,newGroupProps)) {
    //     setGroupProps(newGroupProps);
    // }
}

/**
 * The Group Component
 * @param {*} props 
 */
const GroupWithContext = (props) => {

        const [groupProps,setGroupProps] = useState();

        const group = useRef();

        const attrs = props.attrs || props.attributes;

        let newGroupProps = getProps(group,attrs);

        useLayoutEffect(()=>{
            newGroupProps = getProps(group,attrs)

           console.log ('GroupWithContext useLayoutEffect');
        })

        if (
            ! groupProps
            || ! isEqual(groupProps,newGroupProps)
        ) {
            setGroupProps(newGroupProps);
        }  
    
        // maybeSetProps();

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