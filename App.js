import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
}
