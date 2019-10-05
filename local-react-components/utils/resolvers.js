/**
 * Resolvers
 */

/**
 * Externals
 */
import {useState, useEffect} from 'react';
import {isEmpty} from 'lodash';
import WPAPI from 'wpapi';


 /**
  * Internals
  */
import {getPostsTermsIds,getPostsTermsList} from './selectors';
import Config from '../../config';

var apiRootJSON = require( '../../utils/wp-json.json' );


const wp = new WPAPI({ 
    endpoint: Config.apiUrl,
    routes: apiRootJSON.routes
  });

/**
 * 
 * @param {*} props 
 */
const useCustomPosts = (props) => {

    const {postType} = props.attrs;
    const [sliderPosts,setSliderPosts] = useState([]);

    useEffect(()=>{
        wp[postType] = wp.registerRoute ('wp/v2','/' + postType + '/(?P<id>)');

        const postsObj = async () => wp[postType]()
          .then((postsObj) => {
                setSliderPosts(postsObj);          
        });
        
        postsObj();

    },[]);

	const sliderPostsCount = sliderPosts
		?	sliderPosts.length
		:	0;    

    return {
        ...props,
        sliderPosts: sliderPosts,
		allowedNavigation: {
			right: sliderPostsCount > 1,
			left: sliderPostsCount > 1,
		},        
    };

}

/**
 * 
 * @param {*} props 
 */
const useCustomTerms = (props) => {

    const [sliderTerms,setSliderTerms] = useState([]);

    const {taxonomy} = props.attrs;

    const {sliderPosts} = props;

    if (isEmpty(taxonomy)) {
        return props;
    }
    
    useEffect (()=>{
        
        wp[taxonomy] = wp.registerRoute ('wp/v2','/' + taxonomy + '/(?P<id>)');

        if (isEmpty(sliderPosts)) {
            return ;
        }

        const termsIds = getPostsTermsIds(sliderPosts,taxonomy);

        // console.log ('post ids: ', termsIds);

        const termsOb = async () => wp[taxonomy]()
            .param('include',termsIds)
            .then((termsObj) => {
                const termsList = getPostsTermsList(termsObj);
                setSliderTerms (termsList);
        }); 

        termsOb();

    },[sliderPosts]);

    return {
        ...props,
        sliderTerms: sliderTerms
    }
}

export {useCustomPosts,useCustomTerms};