import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app/navigation";
import navigationTheme from "./app/navigation/navigationTheme";
import "./app/utils/ignoreWarnings";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
