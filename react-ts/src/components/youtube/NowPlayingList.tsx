import ListGroup from "react-bootstrap/ListGroup";
import NowPlayingItem from "./NowPlayingItem";

import fetchVideos from './api'

function NowPlayingList() {
    const videos = fetchVideos("RDYaEG2aWJnZ8");
    return (
        <ListGroup>
            {videos.map(v => <NowPlayingItem
                key={v.videoId}
                videoId={v.videoId}
                title={v.title}
                channelTitle={v.videoOwnerChannelTitle}
                channelId={v.videoOwnerChannelId}
                thumbnailUrl={v.thumbnailUrl} />)}
        </ListGroup>
    )
}

export default NowPlayingList;
