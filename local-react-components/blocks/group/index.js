/**
 * Externals
 */
import WPGBlocks from 'react-gutenberg';

/**
 * Internals
 */
import GetCustomBlock from '../index';
import './style.scss';
import Group from '../../elements/group';

const GroupWarp = (props) => {
    
    const {innerBlocks,attrs} = props;

    return (
        <Group {...props} >
            <WPGBlocks blocks={innerBlocks} mapToBlock={GetCustomBlock} />     
        </Group>
    );
 
}

export default GroupWarp;

