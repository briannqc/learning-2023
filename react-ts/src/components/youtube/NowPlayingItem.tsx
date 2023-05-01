import { ListGroupItem } from "react-bootstrap";
import Thumbnail from "./Thumbnail";

type NowPlayingItemProps = {
    videoId: string
    title: string
    channelTitle: string
    channelId: string
    thumbnailUrl: string
}

function NowPlayingItem(props: NowPlayingItemProps) {
    return (
        <ListGroupItem className="d-flex">
            <div className="flex-shrink-0">
                <Thumbnail src={props.thumbnailUrl} />
            </div>
            <div className="flex-grow-1 ms-3 d-grid align-items-center">
                <h6>{props.title}</h6>
                <p>{props.channelTitle}</p>
            </div>
        </ListGroupItem >
    )
}

export default NowPlayingItem;
