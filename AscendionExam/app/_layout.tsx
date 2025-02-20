import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/navigation.types";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import App from "./app";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <App />
    </GestureHandlerRootView>
  );
}
