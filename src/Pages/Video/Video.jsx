import React from 'react'
import './Video.css'
import PlayVideo from '../../component/PlayVideo/PlayVideo'
import Recommended from '../../component/Recommended/Recommended'
import { useParams } from 'react-router-dom'
function Video() {
  const {videoId,categoryId} = useParams();
  return (
    <div>
      <div className="play-container">
        <PlayVideo videoId={videoId}/> 
        <Recommended categoryId={categoryId}/>
      </div>
    </div>
  )
}

export default Video
