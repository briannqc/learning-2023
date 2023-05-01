import Row from 'react-bootstrap/Row';

import CardSong from './CardSong'
import songs from './songs'

function Playlist() {
    return (
        <Row>
            {songs.map(song => <CardSong
                key={song.id}
                title={song.title}
                singer={song.singer}
                thumbnailUrl={song.thumbnailUrl} />)}
        </Row>
    )
}

export default Playlist;