import { useRef } from "react";
import { useMediaStream } from "../../Hooks/useMediaStream";
export const PTZ = () => {
  const VideoRef = useRef(null);
  const { MediaStream } = useMediaStream(VideoRef);


  const handelControl = () => {
    const videoTracks = MediaStream.getVideoTracks()
    const [track] = ([window.track]= MediaStream.getVideoTracks())
    const capabilities = track.getCapabilities()
    const settings = track.getSettings()


    for (const PTZ of ['pan', 'tilt', 'zoom']) {
      if (!(PTZ in settings)) {
        continue
      }
    }
  }
  return <video ref={VideoRef} autoPlay playsInline muted></video>;
};
