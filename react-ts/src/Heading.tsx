function Heading() {
    let greeting: string
    const hours = new Date().getHours()
    if (hours < 12) {
        greeting = "Good morning!"
    } else if (hours < 18) {
        greeting = "Good afternoon!"
    } else {
        greeting = "Good evening!"
    }

    return <h1>Music Player, {greeting}</h1>
}

export default Heading