import React from 'react'
import './VideoItem.css'
const VideoItem = ({video , onVideoSelect}) => {
    return (
        <div onClick={()=>{ onVideoSelect(video) }} className="item">
            <img alt={video.snippet.title} className="ui image image-element" src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
            <p className="header">{video.snippet.title}</p>
            </div>
            
        </div>
    )
}

export default VideoItem;
