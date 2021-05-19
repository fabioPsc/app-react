

function VideoText(props) {

    // DESTRUCTURING 
    /* console.log(props); */
    const {title, views, published, user, color} = props;
    return (
        <div style={{ display: "flex" }}>
            <div style= {{ padding: '30px', background: color }} >
                <h1>Image</h1>
            </div>
            <div>
                <h1 style= {{ color: 'blue' }} > Titolo: {title} </h1>
                <h4> Visualizzazioni: {views} Pubblicato: {published} </h4>
                <h2> User: {user} </h2>
            </div>
        </div>
    )
}

export default VideoText;



