import { useState, useEffect } from "react";

export const useMediaStream = (videoRef) => {
  const [mediaStream, setMediaStream] = useState(null);
  const [error, setError] = useState(null);
  const [cameraId, setCameraId] = useState(null);

  useEffect(() => {
    //get devices webrtc
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
        if (
          device.kind === "videoinput" &&
          device.label.includes("HD Camera")
        ) {
          console.log("device: ", device);
          setCameraId(device.deviceId);
        }
      });
    });
    const getMediaStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 },
            deviceId: cameraId,
            pan: true,
            zoom: true,
            tilt: true,
          },
          audio: true,
        });
        setMediaStream(stream);
        videoRef.current.srcObject = stream;
      } catch (error) {
        setError(error);
      }
    };
    getMediaStream();
  }, []);

  return [mediaStream, error];
};
