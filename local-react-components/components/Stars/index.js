
import { times } from 'lodash';

import {Star,StarHalf} from '@material-ui/icons';

import './style.scss';

const Stars = ({rating}) => {

    console.log ("Stars:",rating);
    
    const stars = Math.round( rating / 0.5 ) * 0.5;

	const fullStarCount = Math.floor( rating );
	const halfStarCount = Math.ceil( rating - fullStarCount );
	const emptyStarCount = 5 - ( fullStarCount + halfStarCount );

	return (
		<div className='dv-star-rating' aria-label={ `${stars} out of 5 stars` }>
			{ times( fullStarCount, ( i ) => <Star key={ `full_stars_${ i }` } className="star-filled" /> ) }
			{ times( halfStarCount, ( i ) => <StarHalf key={ `half_stars_${ i }` } className="star-half" /> ) }
			{ times( emptyStarCount, ( i ) => <Star key={ `empty_stars_${ i }` } className="star-empty"  /> ) }
		</div>
	);
}


export default Stars;