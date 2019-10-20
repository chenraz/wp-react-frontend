import Wellcome from './wellcome';
import BlocksSlider from './blocks-slider';
import PostsSlider from './posts-slider';
import Group from './group';
import Heading from './heading';
import Review from './review';
import Card from './card';

export default function GetCustomBlock(name) {
  switch (name) {
    case 'til/wellcome': return Wellcome
    case 'til/blocks-slider': return BlocksSlider
    case 'til/posts-slider': return PostsSlider
    case 'til/review': return Review
    case 'til/card': return Card
    case 'core/group': return Group
    case 'core/heading': return Heading
    case '':
        break;
    default: 
      return null
  }
}