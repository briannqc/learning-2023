import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './App.css'
import Heading from './Heading';
import NowPlayingList from './youtube/NowPlayingList';
import Listening from './listening/Listening';


type Source = "YouTube" | "Microphone"

function App() {
  let source: Source = "YouTube"
  return (
    <Container>
      <Heading />
      {source === "YouTube" ? <NowPlayingList /> : <Listening />}
    </Container>
  )
}

export default App
