import React from 'react';
import load from './loading4.gif';


const VideoDetail = ({ video }) => {


    if(!video){
        return <div className="loading"><img alt="loading" src={load}></img></div>
    }
   
    const videoSRC=`https://www.youtube.com/embed/${video.id.videoId}`;

    return (

        <div>
        <div className="ui embed">
            <iframe title="Video Player"  src={videoSRC}/>
        </div>
        <div className="ui segment">
        <h4 className="ui header ">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>
            </div>
    )

        
    

   

};

export default VideoDetail;
