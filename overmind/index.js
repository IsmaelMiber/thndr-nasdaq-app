import { createOvermind } from "overmind";
import { namespaced } from "overmind/config";
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from "overmind-react";
import stocks from "./stocks";
import stockDetails from "./stockDetails";

const config = namespaced({
  stocks,
  stockDetails,
});

export const useAppState = createStateHook();
export const useActions = createActionsHook();
export const useEffects = createEffectsHook();

const overmindInstance = createOvermind(config);

export default overmindInstance;
