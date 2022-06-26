import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screen/AccountScreen";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ListingsScreen from "./app/screen/ListingsScreen";
import MessagesScreen from "./app/screen/MessagesScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return <ListingsScreen />;
}
