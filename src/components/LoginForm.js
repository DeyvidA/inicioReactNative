import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Send" onPress={() => console.log("Sending")} />
      <Text>LoginForm Component</Text>
    </View>
  );
}
