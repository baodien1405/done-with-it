import { NavigationContainer } from "@react-navigation/native";
import OfflineNotice from "./app/components/OfflineNotice";

import { AppNavigator } from "./app/navigation";
import navigationTheme from "./app/navigation/navigationTheme";
import "./app/utils/ignoreWarnings";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
