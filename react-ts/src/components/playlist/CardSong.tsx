import Col from 'react-bootstrap/Col';
import Thumbnail from './Thumbnail';


type CardSongProps = {
    title: string
    singer: string
    thumbnailUrl: string
}

function ListItem(props: CardSongProps) {
    return (
        <Col lg={3} sm={4} xs={6}>
            <Thumbnail src={props.thumbnailUrl} />
            <h6>{props.title}</h6>
            <p>{props.singer}</p>
        </Col>
    )
}

export default ListItem;