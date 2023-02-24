import React from 'react';
import "./Watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/How_to_make_video.webm"

      />
    </div>
  )
}

export default Watch