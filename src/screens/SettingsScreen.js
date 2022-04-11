import { View, Text, Button } from "react-native";
import React from "react";
import HomeScreen from "./HomeScreen";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Setting</Text>
      <Button onPress={goToPage} title="Go to home" />
    </View>
  );
}
