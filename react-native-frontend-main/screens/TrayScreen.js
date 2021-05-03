import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import TrayButton from "../components/TrayButton";
import main from "../styles/Main";

import moment from "moment";

const TrayScreen = (props) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let date = moment().format("MMMM D, YYYY");
    setCurrentDate(date);
  });

  const text = [
    "3-Column Osteotomy Tray ",
    "Reline Core Instrument Tray 1",
    "Reline Core Instrument Tray 2",
    "Reline MAS CORE Implant Tray",
  ];

  return (
    <View style={main.screen}>
      <Text style={main.title}>Choose a tray to scan</Text>

      <Text style={main.date}>{currentDate}</Text>
      <View style={main.btnGroup}>
        {text.map((x, i) => (
          <TrayButton
            go={props.navigation}
            title="go to Level"
            key={i}
            text={x}
          />
        ))}
      </View>
    </View>
  );
};

export default TrayScreen;
