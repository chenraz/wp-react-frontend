/**
 * Externals
 */
import {useRef, useContext,useLayoutEffect,useState} from 'react';
import {round,assign,isElement} from 'lodash';
import { isUndefined } from 'util';

/**
 * Internals
 */
import {setAttributes} from '../../utils/utils';
import {GroupPropsContext} from '../group';


function useVertical (props) {

    const {attrs,attributes} = props;
     
    /**
     * Initial Coordinates
     */
    let 
        className,
        // isVertical,
        group,
        svg,
        h,
        text,
        withSvg,
        hRect,
        groupPadding,
        groupHeight,
        originalFont,
        heightRatio,
        minRatio,
        scaleRatio;

    const [isVertical,setIsVertical] = useState();
    const tagRef = useRef();
    const groupProps = useContext(GroupPropsContext);
    
    const minFont = 11;
    const margin = 0.3
    const marginRight = 0.12;
   

    /**
     * Reset the header before calculating cords
     * @param {*} header 
     */
    const resetHHeader = () => {

         ('start resetting');

        h && h.style && assign(h.style, {
            top: null,
            right: null,
            position: isVertical ? 'absolute' : null,
            transform: isVertical ? `rotate(270deg)` : null,
            "white-space": "nowrap",
        });
        console.log ("reset header: " ,h);
    }

    /**
     * Align normal heaing
     */
    const alignHHeading = () => {


        console.log ('align HHeading: ',h,groupProps,groupHeight);

        assign(h.style, {
            position: 'absolute',
            "white-space": "nowrap",
            top: `${round(group.getBoundingClientRect().top - hRect.top + ((group.getBoundingClientRect().height - hRect.height) / 2))}px`,
            right: `${round(hRect.right - group.getBoundingClientRect().right + (marginRight * groupPadding))}px`,
            transform: `rotate(270deg) scale(${scaleRatio})`
        });
    }

    /**
     * Align SVG heading
     */
    const alignSvgHeading = () => {

        setAttributes (svg,{
            width: groupHeight,
            height: groupPadding,
            viewBox: `-${round(groupHeight / 2)} -${Math.round(groupPadding/2)} ${groupHeight} ${groupPadding}`,
            direction: 'ltr'
        });

        assign(h.style,{
            width: groupHeight + 'px',
            height: groupPadding + 'px'
        });            

        const svgOffsetTop = round((groupHeight - svg.getBoundingClientRect().width) /2);

        const svgOffsetRight = round((svg.getBoundingClientRect().height / 2) - svg.getBoundingClientRect().width / 2);

        assign(h.style,{
            top: svgOffsetTop + 'px',
            right: 0,
            left: 'auto',
            transform: `rotate(270deg) translateY(${svgOffsetRight}px)`
        });

        /**
         * First scale the text
         */
        setAttributes (text,{
            transform:  `scale(${scaleRatio} ${scaleRatio})`,
        }); 

        /**
         * After scale calculate other props
         */
        setAttributes (text,{
            x: 0,
            y: round(.3 * groupPadding / 2,6),
            dx: round(-text.getBoundingClientRect().height / (2 * scaleRatio),6)
        });  

    }    

    const getPositions = () => {

        console.log ('get positions: ',typeof tagRef.current );

        /**
         * Check Group is already set
         */
        if (
            ! groupProps
            || 'undefined' === typeof tagRef.current
        ) {
            return {};
        }

        /**
         * Get variables
         */
        getFlags();
        getDomEls();

        /**
         * Make sure have the header
         */
        if (! isElement(h)) {
            return;
        }

        /**
         * Reset the header
         */
        resetHHeader();

        /**
         * Get cords for vertical header only
         */
        if (! isVertical) {
            return;
        }        

        getCords();
    }

    const getFlags = () => {
        className = isUndefined(attrs)
            ?   attributes.className
            :   attrs.className;

        // isVertical = undefined !== className && className.includes('is-style-vetical');             
        const newIsVertical = undefined !== className && className.includes('is-style-vetical');     
        if (newIsVertical != isVertical) {
            setIsVertical(newIsVertical);
        }        
    }

    const getDomEls = () => {
        group = tagRef.current.closest('.wp-block-group')        
        svg = tagRef.current.querySelector('svg');
        withSvg = null !== svg;
        text = withSvg ? svg.querySelector('text') : false
        h = tagRef.current.querySelector('.is-style-vetical');
        
    }

    /**
     * Get the coordinations
     */
    const getCords = () => {

        console.log ('ge cords groupProps: ',typeof tagRef.current );
        

        hRect = h.getBoundingClientRect();

        originalFont = parseFloat(getComputedStyle(h).fontSize);
        minRatio = round(minFont / originalFont,6);

        groupPadding = round(parseFloat(getComputedStyle(group).paddingRight));
        groupHeight = group.getBoundingClientRect().height;
                
        heightRatio = withSvg
            ?   round(
                    ((1-margin) * svg.getBoundingClientRect().height) / text.getBoundingClientRect().height,
                6)
            :   round (
                groupHeight / hRect.height,
                6                
            );   


        scaleRatio = Math.max(minRatio, Math.min (1,heightRatio));
            
        console.log ('geting the cords');

    }

    /**
     * Get initial positions
     */
    // getPositions();

    /**
     * Layout Effect
     */
    useLayoutEffect (() => {
        

        /**
         * Re-get positions
         */
        getPositions()

        console.log (`useVertical useLayoutEffect groupProps. tagRef:${tagRef}, is vertical: ${isVertical}, isElement: ${isElement(h)}, height:${groupHeight}, svg:${withSvg}`,props,groupProps);

        /**
         * Make sure we have a vertical header
         */
        // if (
        //     ! isVertical
        //     || ! isElement(h)
        //     || ! groupHeight
        // ) {
        //     return;
        // }
        if (
            isVertical
            && isElement(h)
            && groupHeight
        ) {

            /**
             * Align the header
             */
            if (withSvg) {
                alignSvgHeading();
            }
            else {
                alignHHeading();
            }        
        }
    });     

    console.log (`useVertical returns isVertical: ${isVertical}`);

    return {
        tagRef: tagRef,
        isVertical: isVertical
    }
}

export default useVertical;