import { Alert } from "react-native";

export async function getStocks({ state, actions, effects }, value) {
  try {
    state.stocks.loading = true;
    const response = await effects.stocks.api.getStocks();
    const {
      data: { results, next_url },
    } = response;
    state.stocks.data = [...state.stocks.data, ...results];
    state.stocks.nextPage = next_url;
    state.stocks.loading = false;
  } catch (error) {
    if (error.response) {
      Alert.alert("ERROR: ", error?.response?.data?.error || "Something went wrong!");
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export async function getNextStocks({state, actions, effects}, value) {

  try {
    state.stocks.nextPageLoading = true;
    const response = await effects.stocks.api.getStocks(state.stocks.nextPage);
    const {
      data: { results, next_url },
    } = response;
    state.stocks.data = [...state.stocks.data, ...results];
    state.stocks.nextPage = next_url;
    state.stocks.nextPageLoading = false;
  } catch (error) {
    if (error.response) {
      Alert.alert("ERROR: ", error?.response?.data?.error || "Something went wrong!");
    } else {
      Alert.alert('Error', error.message);
    }
  }

}
