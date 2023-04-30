import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css'
import Heading from './Heading';
import Playlist from './playlist/Playlist';

function App() {
  return (
    <Container>
      <Heading />
      <Playlist />
    </Container>
  )
}

export default App
