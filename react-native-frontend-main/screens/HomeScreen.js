import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../components/Button";
import main from "../styles/Main";

const HomeScreen = (props) => {
  return (
    <View style={main.screen}>
      <View style={main.homeTopImg}>
        <Image source={require("../assets/top.png")} />
      </View>
      <Text style={main.welcomeText}>Good morning, Jeff!</Text>
      <Text style={main.homeText}>
        Click on the 'Start Scan' button when you are ready!
      </Text>

      <Button
        title="Start Scan"
        mode="contained"
        text="Start Scan"
        go={props.navigation}
        style={main.homeButton}
        clickedColor="#FFF"
        textStyle={main.homeButtonText}
      />

      <View style={main.homeLowerImg}>
        <Image source={require("../assets/lower.png")} />
      </View>
    </View>
  );
};

export default HomeScreen;
