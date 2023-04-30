import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';

function App() {
  const author = "Brian NQC"
  const currentYear = new Date().getFullYear()

  return (
    <Container>
      <h1>Music Player</h1>
      <p>Created by {author}</p>
      <p>Copyright {currentYear}</p>
    </Container>
  )
}

export default App
