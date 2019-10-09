/**
 * Externals
 */
import WPGBlocks from 'react-gutenberg';

/**
 * Internals
 */
import GetCustomBlock from '../index';
import Group,{GroupPropsContext} from './group';

const GroupWarp = (props) => {
    
    const {innerBlocks,attrs} = props;

    return (
        <Group {...props} >
            <WPGBlocks blocks={innerBlocks} mapToBlock={GetCustomBlock} />     
        </Group>
    );
 
}

export {
     GroupWarp as default,
     Group,
     GroupPropsContext
};

