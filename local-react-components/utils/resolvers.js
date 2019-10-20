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

    console.log ('useCustomPosts : ', postType);
    useEffect(()=>{
        if (postType) {
            wp[postType] = wp.registerRoute ('wp/v2','/' + postType + '/(?P<id>)');

            console.log ("requestiong : ",postType);
            const postsObj = async () => wp[postType]()
            .then((postsObj) => {
                console.log (`useCustomPosts effect ${postType}`, postsObj);
                setSliderPosts(postsObj);          
            });
            
            postsObj();
        }

    },[postType]);

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

    console.log ('useCustomTerms : ',props);

    // if (isEmpty(taxonomy)) {
    //     return props;
    // }
    
    useEffect (()=>{
        console.log ('checking isempty');
        if (! isEmpty(taxonomy)) {
        
            // console.log (' registering : ', 'wp/v2','/' + taxonomy + '/(?P<id>)');
            wp[taxonomy] = wp.registerRoute ('wp/v2','/' + taxonomy + '/(?P<id>)');

            if (isEmpty(sliderPosts)) {
                return ;
            }

            const termsIds = getPostsTermsIds(sliderPosts,taxonomy);

            console.log ('termsIds: ', termsIds);

            const termsOb = async () => wp[taxonomy]()
                .param('include',termsIds)
                .then((termsObj) => {
                    const termsList = getPostsTermsList(termsObj);
                    setSliderTerms (termsList);
            }); 

            console.log("calling termsob:", termsOb);
            termsOb();
        }

    },[sliderPosts,taxonomy]);


    return {
        ...props,
        sliderTerms: sliderTerms
    }
}

export {useCustomPosts,useCustomTerms};