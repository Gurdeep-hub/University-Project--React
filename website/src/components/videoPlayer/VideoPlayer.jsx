import './videoPlayer.css';
import video from '../../edusity_assets/college.mp4'
import { useRef } from 'react';
export function VideoPlayer({playState,setPlaystate}) {

    const player = useRef(null);
    const closePlayer = (e)=>{
        if (e.target === player.current) {
            setPlaystate(false);
        }
    }
    return(
        <div ref={player} onClick={closePlayer} className={`video-player ${playState ? '' : 'hide'}`  }>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
}