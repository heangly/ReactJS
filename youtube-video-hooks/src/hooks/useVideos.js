import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


const KEY = 'AIzaSyBjNOGwPjy1_FxaugiZEBft6XujiJaPDzE';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: term,
        type: 'video',
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
