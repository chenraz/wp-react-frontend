const getHoverX = (state) => state.hoverX;
const getHoverY = (state) => state.hoverY;
const getOnXClick = (state) => state.onXClick;
const getOnYClick = (state) => state.onYClick;

const selectors = {
    getHoverX,
    getHoverY,
    getOnXClick,
    getOnYClick
}

export {
    selectors as default,
    getHoverX,
    getHoverY,
    getOnXClick,
    getOnYClick
};