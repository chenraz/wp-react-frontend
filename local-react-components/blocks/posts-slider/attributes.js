/**
 * The Block Attributes
 */

export default {
    "contentLayout": {
        "type": "string",
        "default": "post"
    },
    "showTitle": {
        "type": "boolean",
        "default": true,
    },    
    "showExcerpt": {
        "type": "boolean",
        "default": true,
    },
    "showThumbnail": {
        "type": "boolean",
        "default": true,
    }, 
    "textColor": {
        "type": "string"
    },          
    "accentColor": {
        "type": "string"
    },
    "align": {
        "type": "string"
    },
    "className": {
        "type": "string"
    },
    "postType": {
        "type": "string",
        "default": "post",
    },
    "blockType": {
        "type": "string",
        "default": "",
    },
    "taxonomy": {
        "type": "string",
        "default": "",
    },    

    "postsToShow": {
        "type": "number",
        "default": 5,
    },	

    "displayPostDate": {
        "type": "boolean",
        "default": false,
    },	

    "order": {
        "type": "string",
        "default": "desc",
    },	
    "orderBy": {
        "type": "string",
        "default": "date",
    },					
}


