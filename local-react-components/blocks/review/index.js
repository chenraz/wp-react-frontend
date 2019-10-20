import classNames from 'classnames/dedupe';

import Review from './review';

export default (props) => {
    const {attrs} = props;
    const {className} = attrs;

    return <Review attrs={attrs} className={classNames(className,'wp-block-til-review')} />

}

export {
    Review
};