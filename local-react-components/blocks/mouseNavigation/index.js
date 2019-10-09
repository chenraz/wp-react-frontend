import {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {setHoverX as setHoverXAction} from '../../store/actions'

import MouseCursor from './mouseCursor';
import withMouseNavigation from '../../elements/mouseNavigation';

const MouseNavigator = ({setHoverX,WrappedComponent,...props}) => (
    withMouseNavigation({setHoverX})(WrappedComponent)(props)
);


export default ( WrappedComponent ) => (
    props => {
        const dispatch = useDispatch();
        const setHoverX = useCallback(
            newHoverX => dispatch(setHoverXAction(newHoverX)),
            []
        );
        return <MouseNavigator {...props} WrappedComponent={WrappedComponent} setHoverX={setHoverX}/>
    }
);

export {
    MouseCursor
};

