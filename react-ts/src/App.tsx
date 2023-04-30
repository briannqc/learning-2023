import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  const author = "Brian NQC"
  const currentYear = new Date().getFullYear()
  const inlineStyleWorksButNotCommonlyUsed = {
    border: "1px solid",
    color: "darkseagreen"
  }

  return (
    <Container>
      <h1 contentEditable="true" spellCheck="true">Music Player</h1>
      <p>Created by {author}</p>
      <p style={inlineStyleWorksButNotCommonlyUsed}>Copyright {currentYear}</p>
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
    </Container>
  )
}

export default App
