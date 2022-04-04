import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useActions, useAppState } from "../../overmind";
import { RootTabScreenProps } from "../../types";
import StockCard from "./components/StockCard";
import { Divider, Flex, Text } from "native-base";
import SearchBar from "./components/SearchBar";
import Loader from "../../components/Loader";

export default function Explore({ navigation }: RootTabScreenProps<"Explore">) {
  const { stocks } = useAppState();
  const { data, loading, nextPageLoading } = stocks || {};
  const actions = useActions();

  const [stocksFromSearch, setStocksFromSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    actions.stocks.getStocks();
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <StockCard stock={item} navigation={navigation} />;
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return `stock-ticker-${index}-${item.ticker}`;
  }, []);

  const onEndReached = useCallback(() => {
    actions.stocks.getNextStocks();
  }, []);

  const onChangeText = useCallback(
    (text) => {
      setSearchText(text);
      if (text.length > 0) {
        setStocksFromSearch(
          stocks.data.filter(
            (stock) => stock.name.includes(text) || stock.ticker.includes(text)
          )
        );
      } else {
        setStocksFromSearch([]);
      }
    },
    [stocks.data]
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Flex flex={1} justifyContent="center">
          <Loader loading />
        </Flex>
      ) : (
        <View>
          <SearchBar onChangeText={onChangeText} />

          {stocksFromSearch.length > 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={stocksFromSearch}
              renderItem={renderItem}
              ItemSeparatorComponent={Divider}
              keyExtractor={keyExtractor}
            />
          ) : null}

          {stocksFromSearch.length == 0 && searchText.length > 0 ? (
            <Text>The searched stock not found</Text>
          ) : null}

          {searchText.length == 0 && stocks?.data?.length > 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              ItemSeparatorComponent={Divider}
              keyExtractor={keyExtractor}
              onEndReachedThreshold={0.5}
              onEndReached={onEndReached}
              ListFooterComponent={<Loader loading={nextPageLoading} />}
            />
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
