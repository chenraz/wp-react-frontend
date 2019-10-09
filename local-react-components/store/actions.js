
const setHoverX = (x) => ({
    type: 'SET_HOVER_X',
    x    
});

const setHoverY = (y) => ({
    type: 'SET_HOVER_Y',
    y  
});

const setOnXClick = (onXClick) => ({
    type: 'SET_ON_X_CLICK',
    onXClick  
});

const setOnYClick = (onYClick) => ({
    type: 'SET_ON_X_CLICK',
    onYClick  
});

const actions = {
    setHoverX,
    setHoverY,
    setOnXClick,
    setOnYClick           
}

export {
    actions as default,
    setHoverX,
    setHoverY,
    setOnXClick,
    setOnYClick
};