export async function getStockDetails({ state, actinos, effects }, value) {
  try {
    state.stockDetails.loading = true;
    const response = await effects.stockDetails.api.getStockDetails(value);
    const { data } = response;
    state.stockDetails.data = data;
    state.stockDetails.loading = false;
  } catch (error) {
    if (error.response) {
      Alert.alert("ERROR: ", error?.response?.data?.error || "Something went wrong!");
    } else {
      Alert.alert('Error', error.message);
    }
  }
}

export async function getStockPrevClose({ state, actinos, effects }, value) {
  try {
    state.stockDetails.prevCloseLoading = true;
    const response = await effects.stockDetails.api.getStockPrevClose(value);
    const {
      data: { results },
    } = response;
    state.stockDetails.prevClose = results[0];
    state.stockDetails.prevCloseLoading = false;
  } catch (error) {
    if (error.response) {
      Alert.alert("ERROR: ", error?.response?.data?.error || "Something went wrong!");
    } else {
      Alert.alert('Error', error.message);
    }
  }
}
