

function VideoText(props) {
    return (
        <div style={{ display: "flex" }}>
            <div style= {{ padding: '30px', background: props.color }} >
                <h1>Image</h1>
            </div>
            <div>
                <h1 style= {{ color: 'blue' }} > Titolo: {props.title} </h1>
                <h4> Visualizzazioni: {props.views} Pubblicato: {props.published} </h4>
                <h2> User: {props.user} </h2>
            </div>
        </div>
    )
}

export default VideoText;



