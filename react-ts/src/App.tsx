import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  const author = "Brian NQC"
  const now = new Date()
  const currentYear = now.getFullYear()

  let greeting: string
  let textColor: string
  if (now.getHours() < 12) {
    greeting = "Good morning!"
    textColor = "red"
  } else if (now.getHours() < 18) {
    greeting = "Good afternoon!"
    textColor = "green"
  } else {
    greeting = "Good evening!"
    textColor = "blue"
  }

  return (
    <Container>
      <h1 style={{ color: textColor }}>Music Player, {greeting}</h1>
      <p>Created by {author}</p>
      <p>Copyright {currentYear}</p>
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
