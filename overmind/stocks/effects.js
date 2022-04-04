import { axiosInstance } from "../../API";

const TICKERS = '/v3/reference/tickers';

export const api = {
  getStocks(nextPage) {
    if (nextPage) {
      return axiosInstance.get(nextPage, {
        baseURL: undefined,
      });
    }
    return axiosInstance.get(
      `${TICKERS}?active=true&sort=ticker&order=asc&limit=10`
    );
  },
  getStockDetails(ticker) {
    return axiosInstance.get(
      `${TICKERS}/${ticker}`
    );
  }
};
