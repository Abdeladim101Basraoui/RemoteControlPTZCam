import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Providers/GlobalProvider";
import { Slider } from "antd";
import styled from "styled-components";
export default function SliderComponent() {
  const { socket } = Context();
  const [slider, setSlider] = useState(0);
  const style = { display: "inline-block", height: 300, marginLeft: 70 , marginTop: 30 };
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("slider", slider);
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket]);

  return (
    <div style={style}>
      <Slider
        vertical
        defaultValue={0}
        // onChange={(value) => {
        //   setSlider(value);
        //   socket.emit("slider", value);
        // }}
      />
    </div>
  );
}
