import {useCallback} from 'react';
import { useDispatch } from 'react-redux';

import {setHoverX as setHoverXAction} from '../../store/actions';
import MouseContext,{MouseProps} from './mouseContext';
import withMouseNavigation from './withMouseNavigation';

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
    withMouseNavigation,
    MouseContext,
    MouseProps,
}