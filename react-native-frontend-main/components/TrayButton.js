import React from "react";
import { Text, TouchableHighlight } from "react-native";
import main from "../styles/Main";

const CustomText = ({ text }) => {
  return (
    <>
      <Text style={main.trayName}>{text}</Text>
      <Text style={main.trayStatusBlock}>
        Status:
        {/* Add in route that tells us status */}
        <Text style={main.trayStatus}>Clean</Text>
      </Text>
    </>
  );
};

function TrayButton({ go, title, text }) {
  return (
    <>
      <TouchableHighlight
        underlayColor="#009FFF"
        style={main.trayButton}
        title={title}
        onPress={() => {
          go.navigate("Level");
        }}
      >
        <CustomText text={text} />
      </TouchableHighlight>
    </>
  );
}

export default TrayButton;
