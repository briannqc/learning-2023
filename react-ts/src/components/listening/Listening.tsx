import { useState } from "react";
import { Container } from "react-bootstrap"

function Listening() {
    const [time, setTime] = useState(new Date());
    function updateTime() {
        setTime(new Date())
    }
    setInterval(updateTime, 1000)

    return (
        <Container>
            <h1>Visualize your surrounding, makes it more fun</h1>
            <p>Rest assure, we only listen to your surrounding to make it more fun with visualizers.
                No data is sent to nor saved anywhere, even your own browsers</p>
            <h2>{time.toTimeString()}</h2>
            <button onClick={updateTime}>Set time</button>
        </Container>
    )
}

export default Listening;
