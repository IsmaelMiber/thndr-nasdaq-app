import { StatusBar } from "expo-status-bar";
import { Provider } from "overmind-react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import overmindInstance from "./overmind";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
          <StatusBar />
          <Provider value={overmindInstance}>
            <NativeBaseProvider>
            <Navigation colorScheme={colorScheme} />
            </NativeBaseProvider>
          </Provider>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
