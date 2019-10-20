import Card from './card'

const CardContainer = (props) => {

    const {attrs} = props;
    // const {image,text,className} = attrs;

    // return <Card text={text} image={image} className={className} />
    return <Card {...attrs} />
}

export {
    CardContainer as default,
    Card
}