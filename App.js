import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Greeting from "./src/components/Greeting";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native Course</Text>
      <Greeting />
      <Greeting firstName="Deyvid" lastName="Arauz" />
      <Greeting firstName="Cassie" lastName="Carrion" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
