import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Explore: NavigatorScreenParams<ScreensParamList> | undefined;
  StockDetails: NavigatorScreenParams<ScreensParamList> | undefined,
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type ScreensParamList = {
  Explore: undefined;
  StockDetails: undefined;
};

export type RootTabScreenProps<Screen extends keyof ScreensParamList> = CompositeScreenProps<
  BottomTabScreenProps<ScreensParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
