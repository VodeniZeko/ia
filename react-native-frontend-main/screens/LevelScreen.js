import React from "react";
import { View, Text } from "react-native";

import Btn from "../components/Button";
import main from "../styles/Main";

const levels = ["Level A", "Level B", "Level C"];

const LevelScreen = (props) => {
  return (
    <View style={main.screen}>
      <Text style={main.title}>Choose a Level</Text>
      <View style={main.btnGroup}>
        {levels.map((x, i) => (
          <Btn
            key={i}
            style={main.button}
            title="Start Scan"
            mode="contained"
            text={x}
            go={props.navigation}
            clickedColor="#009FFF"
            textStyle={main.buttonText}
          />
        ))}
      </View>
    </View>
  );
};

export default LevelScreen;
