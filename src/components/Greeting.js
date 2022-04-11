import { View, Text } from "react-native";
import React from "react";

export default function Greeting(props) {
  const { firstName, lastName } = props;
  return (
    <View>
      <Text>
        Hello {firstName} {lastName}
      </Text>
    </View>
  );
}

Greeting.defaultProps = {
  firstName: "Ammy",
  lastName: "Fletes",
};
