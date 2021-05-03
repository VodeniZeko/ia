import { BG_COLOR } from "./Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BG_COLOR,
  },
  title: {
    position: "absolute",
    top: 73,

    fontSize: 24,
    color: "#003E64",
  },
  date: {
    position: "absolute",
    top: 150,
    left: 24,

    fontSize: 18,
  },
  welcomeText: {
    position: "absolute",
    top: 181,

    fontSize: 24,
    color: "#003E64",
  },
  homeText: {
    position: "absolute",
    fontSize: 14,
    top: 343,
    color: "#828282",
  },
  homeButton: {
    height: 56,
    justifyContent: "center",
    alignSelf: "center",
    width: 350,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#009FFF",
  },
  homeButtonText: {
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
    color: "#fff",
  },
  buttonText: {
    fontSize: 18,
    justifyContent: "center",
    alignSelf: "center",
  },
  homeLowerImg: {
    position: "absolute",
    top: 582,
    left: 20,
  },
  homeTopImg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  btnGroup: {
    position: "absolute",
    top: "20.54%",
  },
  trayButton: {
    justifyContent: "center",
    alignSelf: "center",
    width: 366,
    height: 72,
    borderRadius: 5,
    borderColor: "#ABAEAF",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 13,
  },
  trayName: {
    position: "absolute",
    justifyContent: "center",
    left: 8,

    fontSize: 18,
    color: "#003E64",
  },
  trayStatusBlock: {
    position: "absolute",
    right: "2%",
    top: "66%",
    fontSize: 14,
    color: "#003E64",
  },
  trayStatus: {
    fontSize: 14,

    color: "#22DD6E",
  },
  button: {
    height: 56,
    justifyContent: "center",
    alignSelf: "center",
    width: 350,
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#EBF7FF",
    margin: 10,
  },
  btnGroup: {
    position: "absolute",
    top: 190,
  },
});

export default styles;
