import React from "react";
import { Text, TouchableHighlight } from "react-native";

function Button({ title, mode, text, go, style, clickedColor, textStyle }) {
  return (
    <>
      <TouchableHighlight
        style={style}
        title={title}
        mode={mode}
        underlayColor={clickedColor}
        onPress={() => {
          go.navigate("Tray");
        }}
      >
        <Text style={textStyle}>{text}</Text>
      </TouchableHighlight>
    </>
  );
}

export default Button;
