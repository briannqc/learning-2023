import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css'
import Heading from './Heading';
import List from './List';

function App() {
  return (
    <Container>
      <Heading />
      <List />
    </Container>
  )
}

export default App
