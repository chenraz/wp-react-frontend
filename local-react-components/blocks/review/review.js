import React from 'react';

import Img from '../../components/image';
import './style.scss';
// import Star from './Star24Px';
// import starUrl, { ReactComponent as Star } from './star-24px.svg';
// import StarRating from '../../components/starRating';
import Stars from '../../components/Stars';


const Review = (props) => {
    const {attrs,className} = props;

    const {
        review,
        profileImage,
        profileName,
        projectName,
        rating,
    } = attrs;

    console.log ('review: ', props);

    return (
        <div className={className}>
            <div className='review-content'>
                <p dangerouslySetInnerHTML={{__html: review}} />
            </div>
            <div className='review-details'>
                <div className='profile-image-wrap'>
                    <Img
                        src={profileImage}
                    />

                </div>
                <div className='profile-name-wrap'>
                    <p
                        className='profile-name'
                        dangerouslySetInnerHTML={ {__html: profileName} }
                    />  
                </div>

                <div className='project-name-wrap'>
                    <p
                        className='project-name'
                        dangerouslySetInnerHTML={{__html: projectName} }
                    />  
                </div>

                <Stars 
                        rating={ rating }
                    />
            </div>

        </div>        
    );
}

export default Review;