import { Image } from 'react-bootstrap';
import './Thumbnail.css'

type ThumbnailProps = {
    src: string
}

function Thumbnail({ src }: ThumbnailProps) {
    return <Image className="img-thumbnail thumbnail" src={src} />
}

export default Thumbnail;
