import axios from 'axios';
const KEY="AIzaSyBuh_DPDOekXONX9EXpTkT4czmlAoFSxjg";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet', 
        type: 'video',
        maxResults: 50,
        key: `${KEY}`,

    }
})