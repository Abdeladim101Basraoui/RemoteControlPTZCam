import { Context } from "../../Providers/GlobalProvider";
import { useEffect, useState } from "react";
import SliderComponent from "./Slider";
import { PTZ } from "./PTZ";
export function CameraControl() {
  const [camera, setCamera] = useState("front");
  const { socket } = Context();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("camera", camera);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket]);
  const onChange = (value) => {
    setCamera(value);
  };

  return (
    <div>
      <button onClick={() => setCamera("front")}>Front</button>
      <button onClick={() => setCamera("back")}>Back</button>
      <button onClick={() => setCamera("left")}>Left</button>
      <button onClick={() => setCamera("right")}>Right</button>
      <button onClick={() => setCamera("top")}>Top</button>
      <button onClick={() => setCamera("bottom")}>Bottom</button>
      <button onClick={() => setCamera("iso")}>Iso</button>
      <SliderComponent onChange={onChange} />

      <PTZ />
    </div>
  );
}
