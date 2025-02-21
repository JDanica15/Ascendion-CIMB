import { GestureHandlerRootView } from "react-native-gesture-handler";
import App from "./app";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <App />
    </GestureHandlerRootView>
  );
}
