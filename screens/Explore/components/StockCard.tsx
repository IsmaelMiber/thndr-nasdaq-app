import React, { useCallback } from "react";
import { Box, Heading, Text } from "native-base";
import { TouchableOpacity } from "react-native";

function StockCard({ stock, navigation }) {
  const onPress = useCallback(
    () =>
      navigation.navigate("StockDetails", {
        ticker: stock.ticker,
      }),
    [stock, navigation]
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <Box padding="2">
        <Heading size="md">{stock?.ticker || ""}</Heading>
        <Text fontSize="md">{stock?.name || ""}</Text>
      </Box>
    </TouchableOpacity>
  );
}

export default React.memo(StockCard);
