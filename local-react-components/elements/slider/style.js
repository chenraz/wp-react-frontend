import css from 'styled-jsx/css';


export default css.resolve`
.excerpt-portal {
    max-width: 30%;
}
.excerpt-title {
    margin-bottom: 12px;
}
.wp-block-til-posts-slider {
    position: relative;
}
button {
    position: relative;
    z-index: 1;
}
.terms-box { 
    list-style: none;
    cursor: pointer;
    z-index: 1;
    padding-right: 0;
    position: relative;
}

.terms-box li {
    line-height: 24px;   
}
.terms-box .active {
    font-weight: bold;
} 
.terms-box svg {
    vertical-align: bottom;   
}
.slide-image {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);    
}
`
