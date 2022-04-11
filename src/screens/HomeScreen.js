import { View, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Setting");
  };
  return (
    <View>
      <Text>We are Piretes</Text>
      <Button onPress={goToPage} title="Go to Setting" />
    </View>
  );
}
