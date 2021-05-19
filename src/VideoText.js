

function VideoText({title, views, published, user, color}) {

    // DESTRUCTURING 
    /* console.log(props); */
    
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



