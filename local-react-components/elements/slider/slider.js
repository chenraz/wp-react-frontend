/**
 * Slider Element
 */

/**
 * External
 */
import React, {useState} from 'react';
import classNames from 'classnames';
import {flowRight} from 'lodash';

/**
 * 
 * Internals
 */
import {getPostTerm, getPostKeyByTerm} from '../../utils/selectors';
import LeftArrow from './leftArrow';
// import withMouseNavigation from '../withMouseNavigation';
import withMouseNavigation from '../mouseNavigation';
// import { compose } from 'redux';

/**
 * 
 * @param {*} props 
 */
const Slider = (props) => {

    console.log ('the slider props',props);
    
    const {className,sliderPosts,sliderTerms, taxonomy,exerptEl,horizontalHover,contentLayout,showExcerpt,showThumbnail,showTitle} = props;

    const [currentSlide,setCurrentSlide] = useState(0);
    
    const currentTerm   = taxonomy && sliderPosts && getPostTerm (sliderPosts[currentSlide],taxonomy)
    
    const goRight = ()  => {
        setCurrentSlide(((currentSlide + 1) >= sliderPosts.length) ? 0 : currentSlide + 1);
    } 

    const goLeft = ()  => {
        setCurrentSlide((0>=currentSlide) ? (sliderPosts.length - 1) : (currentSlide -1));
    } 
    
    const gotoTerm = (term) => {
        const postIndex = getPostKeyByTerm (sliderPosts, term,taxonomy);
        if (postIndex != currentSlide) {
            setCurrentSlide(postIndex);
        }
    };

    const navigate = () => {
        if ('left' === horizontalHover) {
            return goLeft();
            
        }
        goRight();
        console.log ('navigate: ', arguments);
    }

    const termsControl = sliderTerms && (
        <ul className='terms-box'>
            {sliderTerms.map((term,i)=>{
                return(
                    <li key={i} onClick={()=>{gotoTerm(term.value)}} className={classNames({active: term.value == currentTerm})}>
                        <LeftArrow />
                        {term.label}
                    </li>
                );
            })}
        </ul>
    );
    
    return (
        <div className={className} onClick={navigate}>
           
            <button onClick={goRight}>+</button>
            <button onClick={goLeft}>-</button>
            
            {termsControl}

            <div className='excerpt-portal use-accent-color' ref={exerptEl} />
                {React.Children.toArray(props.children)[currentSlide]}
        </div>
    );   
}

export default Slider;
// const ComposedSlider = flowRight([
//     withMouseNavigation
// ])(Slider);
// const ComposedSlider = withMouseNavigation(Slider);

// export default ComposedSlider;

