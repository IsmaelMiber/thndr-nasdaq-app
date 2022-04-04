import React, { useCallback, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import { useActions, useAppState } from "../../overmind";
import Image from "./components/Image";
import {
  Icon,
  ScrollView,
  Flex,
  Text,
  Divider,
  View,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import InfoItem from "./components/InfoItem";
import Statistics from "./components/Statistics";
import Loader from "../../components/Loader";

export default function StockDetails({ route, navigation }) {
  const actions = useActions();
  const { stockDetails } = useAppState();
  const { loading, data, prevCloseLoading } = stockDetails;
  const { results } = data || {};
  const { branding, homepage_url, description, sic_description } =
    results || {};
  const { logo_url } = branding || {};

  useEffect(() => {
    const { ticker } = route?.params || {};
    if (ticker) {
      actions.stockDetails.getStockDetails(ticker);
      actions.stockDetails.getStockPrevClose(ticker);
    }
  }, []);

  const openUrl = useCallback(() => {
    Linking.openURL(homepage_url);
  }, [homepage_url]);

  if (loading || prevCloseLoading) {
    return (
      <Flex flex={1} justifyContent="center">
        <Loader loading />
      </Flex>
    );
  }

  return (
    <ScrollView>
      <Flex paddingY="2" paddingX="4">
        
        <Image uri={logo_url} />

        <InfoItem title="Name" value={results?.name} />
        <InfoItem title="Ticker" value={results?.ticker} />

        <Divider marginY="5" />

        <Statistics />

        <Divider marginY="5" />

        <InfoItem title="Description" value={description} />
        <InfoItem title="Industry" value={sic_description} />

        {homepage_url ? (
          <View>
            <Divider marginY="5" />

            <Button onPress={openUrl}>
              <Text>Open Company URL</Text>
            </Button>
          </View>
        ) : null}
      </Flex>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
