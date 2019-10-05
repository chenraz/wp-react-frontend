/**
 * Selectors
 */

 /**
  * Externals
  */
import { reduce, findKey, isUndefined } from 'lodash';

/**
 * Internals
 */
import { API_NAMESPACE } from './constants';

/**
 * 
 * @param {*} posts 
 * @param {*} taxonomy 
 */
export const getPostsTermsIds = (posts, taxonomy) => reduce(
    posts,
	((r,v)=>{
        if (! isUndefined(v[taxonomy])) {
            r = [...r,...v[taxonomy]];
        }
        return r;
    }),
    []
);

/**
 * 
 * @param {*} terms 
 */
export const getPostsTermsList = (terms) => reduce(
    terms,
	((r,v)=>{
        r.push(
            {label: v.name,value:v.id}
        );
        return r;
    }),
    []    
);

/**
 * 
 * @param {*} post 
 * @param {*} taxonomy 
 */
export const getPostTerm = (post,taxonomy) => {
    return post && ! isUndefined(post[taxonomy][0])
        ?  post[taxonomy][0]
        :  false; 
}

/**
 * 
 * @param {*} posts 
 * @param {*} term 
 * @param {*} taxonomy 
 */
export const getPostKeyByTerm = (posts,term,taxonomy) => {
    return findKey(posts,function(post){return term==post[taxonomy];});
}

/**
 * 
 * @param {*} name 
 */
export const getBaseClassName = (blockName) => {
    return isUndefined(blockName)
        ?   ""
        :   "wp-block-" + blockName.replace(/core\//,'').replace(/\//,'-');
}