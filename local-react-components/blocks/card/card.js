import classNames from 'classnames/dedupe'

import Image from '../../components/image'

import './style.scss';

const Card = (props) => {
    
    const {withTitle,title,text,image,className} = props;
    const {src,alt} = image;

    return (
        <div className={classNames('wp-block-til-card',className)}>
            {withTitle && 
                <h3
                    className='card-text'
                    dangerouslySetInnerHTML={{__html: title}}                
                />
            }
            <p 
                className='card-text'
                dangerouslySetInnerHTML={{__html: text}}
            />
                
            <div className='card-image'>
                <Image src={src} alt={alt} />
            </div>
        </div>

    );
    
}
export default Card;