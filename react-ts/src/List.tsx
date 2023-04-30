import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function List() {
    return (
        <Row>
            <Col lg={3} sm={4} xs={6}>
                <Image className="img-thumbnail thumbnail" src="https://picsum.photos/300" />
            </Col>
            <Col lg={3} sm={4} xs={6}>
                <Image className="img-thumbnail thumbnail" src="https://picsum.photos/301" />
            </Col>
            <Col lg={3} sm={4} xs={6}>
                <Image className="img-thumbnail thumbnail" src="https://picsum.photos/302" />
            </Col>
            <Col lg={3} sm={4} xs={6}>
                <Image className="img-thumbnail thumbnail" src="https://picsum.photos/303" />
            </Col>
        </Row>
    )
}

export default List