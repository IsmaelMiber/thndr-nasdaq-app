import { useAppState } from "../../../overmind";

export function usePrevClose() {
    const { stockDetails } = useAppState();
    const { prevClose } = stockDetails;
    const { c: close, o: open, h: high, l: low, v: volume } = prevClose || {};

    if(!prevClose) return null;
    return {close, open, high, low, volume};
}