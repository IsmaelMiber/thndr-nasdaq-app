import React from "react";
import { Heading, Text, View } from "native-base";

export default function InfoItem({ title, value }) {
  return value ? (
    <View  width="auto" height="auto">
      <Heading size="sm" height="auto">{title}: </Heading>
      <Text size="sm" flex={1} height="auto" marginBottom="2">{value}</Text>
    </View>
  ) : null;
}
