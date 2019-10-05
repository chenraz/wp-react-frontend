import Wellcome from './wellcome';
import BlocksSlider from './blocks-slider';
import PostsSlider from './posts-slider';
import Group from './group';
import Heading from './heading';

export default function GetCustomBlock(name) {
  switch (name) {
    case 'til/wellcome': return Wellcome
    case 'til/blocks-slider': return BlocksSlider
    case 'til/posts-slider': return PostsSlider
    case 'core/group': return Group
    case 'core/heading': return Heading
    case '':
        // console.log('reusable?');
        break;
    default: 
      // console.log('got the default for : ' + name);
      return null
  }
}