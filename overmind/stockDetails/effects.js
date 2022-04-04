import { axiosInstance } from "../../API";

const TICKERS = "/v3/reference/tickers";

export const api = {
  getStockDetails(ticker) {
    return axiosInstance.get(`${TICKERS}/${ticker}`);
  },
  getStockPrevClose(ticker) {
    return axiosInstance.get(`/v2/aggs/ticker/${ticker}/prev`);
  },
};
