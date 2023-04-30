import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './CardSong.css'

type CardSongProps = {
    title: string
    singer: string
    thumbnailUrl: string
}

function ListItem(props: CardSongProps) {
    return (
        <Col lg={3} sm={4} xs={6}>
            <Image className="img-thumbnail thumbnail" src={props.thumbnailUrl} />
            <h6>{props.title}</h6>
            <p>{props.singer}</p>
        </Col>
    )
}

export default ListItem;