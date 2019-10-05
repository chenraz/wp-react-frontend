// import {Wellcome} from '@tilnet/react-components';
// import {BlocksSlider} from '@tilnet/react-components';
// import Wellcome from '../local-react-components/wellcome';
// import BlocksSlider from '../local-react-components/blocks-slider';

import {Wellcome,BlocksSlider} from '../local-react-components';

export default function GetCustomBlock(name) {
  switch (name) {
    case 'til/wellcome': return Wellcome
    case 'til/blocks-slider': return BlocksSlider
    case '':
        // console.log('reusable?');
        break;
    default: 
      // console.log('got the default for : ' + name);
      return null
  }
}