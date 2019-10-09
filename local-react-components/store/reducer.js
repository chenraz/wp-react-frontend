const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HOVER_X':
            return {
                ...state,
                hoverX: action.x,
            }
        case 'SET_HOVER_Y':
            return {
                ...state,
                hoverY: action.y,
            }
        case 'SET_ON_X_CLICK':
            return {
                ...state,
                onXClick: action.onXClick,
            }
        case 'SET_ON_Y_CLICK':
            return {
                ...state,
                onYClick: action.onYClick,
            }
        default:
            return state
    }
}

export default reducer;