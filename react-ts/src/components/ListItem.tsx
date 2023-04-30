import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './ListItem.css'

type ListItemPros = {
    src: string
}

function ListItem({ src }: ListItemPros) {
    return (
        <Col lg={3} sm={4} xs={6}>
            <Image className="img-thumbnail thumbnail" src={src} />
        </Col>
    )
}

export default ListItem;