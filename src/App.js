import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./routes/RootNavigator";
import {
  KeyboardAvoidingView,
  DeviceEventEmitter,
  StatusBar,
} from "react-native";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    DeviceEventEmitter.addListener("loading", handler);
  });

  function handler(param) {
    param &&
      setLoading(() => {
        return param.loading;
      });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      {loading && <Loader />}
    </KeyboardAvoidingView>
  );
}
