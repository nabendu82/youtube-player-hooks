import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [sldVideo, setSldVideo] = useState(null);

  useEffect(() => {
    fetchResource('React Tutorials');
  }, [])

  const fetchResource = async (item) => {
      await YTSearch({key: API_KEY, term: item}, (data) => {
          setVideos(data);
          setSldVideo(data[0])
      });
  }

  return (
    <div>
      <SearchBar onSearchTermChange={searchTerm => fetchResource(searchTerm)}/>
      <VideoDetail video={sldVideo}/>
      <VideoList onVideoSelect={selected => setSldVideo(selected)} videos={videos} />
    </div>
  );
}

export default App;
