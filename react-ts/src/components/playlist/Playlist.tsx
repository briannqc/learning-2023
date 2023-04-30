import Row from 'react-bootstrap/Row';

import CardSong from './CardSong'

function Playlist() {

    const songs = [
        {
            title: "Cheap Thrills",
            singer: "Sia",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/d/1/d170e3fda75ec7afe19b1e01df3fce8a_1453722113.jpg",
        },
        {
            title: "Dance Monkey",
            singer: "Tones and I",
            thumbnail: "https://media.cnn.com/api/v1/images/stellar/prod/201126135744-dance-monkey-shazam-trnd.jpg",
        },
        {
            title: "Bam Bam",
            singer: "Camila Cabello, Ed Sheeran",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/43/Bam_Bam_featuring_Ed_Sheeran_%28Official_Single_Cover%29_by_Camila_Cabello.png",
        },
        {
            title: "Coming Up Roses",
            singer: "Keira Knightley",
            thumbnail: "https://i1.sndcdn.com/artworks-000083225302-gfqebf-t500x500.jpg",
        },
        {
            title: "Unstoppable",
            singer: "Sia",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_webp/covers/d/1/d170e3fda75ec7afe19b1e01df3fce8a_1453722113.jpg",
        },
    ]

    return (
        <Row>
            <CardSong title={songs[0].title} singer={songs[0].singer} thumbnailUrl={songs[0].thumbnail} />
            <CardSong title={songs[1].title} singer={songs[1].singer} thumbnailUrl={songs[1].thumbnail} />
            <CardSong title={songs[2].title} singer={songs[2].singer} thumbnailUrl={songs[2].thumbnail} />
            <CardSong title={songs[3].title} singer={songs[3].singer} thumbnailUrl={songs[3].thumbnail} />
            <CardSong title={songs[4].title} singer={songs[4].singer} thumbnailUrl={songs[4].thumbnail} />
        </Row>
    )
}

export default Playlist;