import React , {useState} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {

const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);



function onVideoSelect(video){
    setSelectedVideo(video);
}

   async function onTermSubmit(term){
     const response = await youtube.get('/search',{
           params:{
               q: term
           }
       });
       
       setVideos(response.data.items);
       setSelectedVideo(response.data.items[0]);
       
       
    };

    return (
        <div style={{marginTop:"4px"}} className="ui container">
        <SearchBar  className="search-bar" onTermSubmit={onTermSubmit}/>
        
        <div className="ui grid">

<div className="ui row">
<div className="eleven wide column">
<VideoDetail video={selectedVideo}  />
</div>

   <div className="five wide column">

  
        <VideoList  onVideoSelect={onVideoSelect} videos={videos} />

        </div>
</div>
        
        
        </div>
        </div>
    )
}

export default App;
