// import Wellcome from './wellcome';
// import BlocksSlider from './blocks-slider';
// import PostsSlider from './posts-slider';

// export default function GetCustomBlock(name) {
//   switch (name) {
//     case 'til/wellcome': return Wellcome
//     case 'til/blocks-slider': return BlocksSlider
//     case 'til/posts-slider': return PostsSlider
//     case '':
//         console.log('reusable?');
//         break;
//     default: 
//       console.log('got the default for : ' + name);
//       return null
//   }
// }

// export dfault  from './blocks';
import GetCustomBlock from './blocks';
export {GetCustomBlock};
export * from './elements';
